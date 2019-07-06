import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import cookie from 'js-cookie'
import 'url-search-params-polyfill'
import Playlist from './Playlist'
import './App.css';

const SPOTIFY_USER_ID = 'jon.trainor';
const SPOTIFY_CLIENT_ID = '0b71959111884567b4530208b9f5add7';
const COOKIE_NAME = 'jontrainor-spotify-playlist';

function App() {

  const [accessToken, setAccessToken] = useState(undefined);
  const [fetchPlaylistsStatus, setFetchPlaylistsStatus] = useState('NOT_ASKED');
  const [fetchPlaylistsChunkStatus, setFetchPlaylistsChunkStatus] = useState('NOT_ASKED');
  const [fetchPlaylistOffset, setFetchPlaylistOffset] = useState(0)
  const [playlists, setPlaylists] = useState([])

  // get and set auth token
  useEffect(() => {
    const cookieAccessToken = cookie.get(COOKIE_NAME)
    const spotifyApi = new SpotifyWebApi()
    const query = new URLSearchParams(window.location.hash.slice(1))
    // if spotify authorization failed
    // const queryError = query.get('error')
    // const queryErrorState = query.get('state')

    const queryAccessToken = query.get('access_token')
    if(queryAccessToken) {
      spotifyApi.setAccessToken(queryAccessToken)
      setAccessToken(queryAccessToken)
      cookie.set(COOKIE_NAME, queryAccessToken)
    } else if(cookieAccessToken) {
      setAccessToken(cookieAccessToken)
      spotifyApi.setAccessToken(cookieAccessToken)
    }
  }, [window.location.hash]);

  // get playlists
  useEffect(() => {
    // ex: 06-19-2019
    const playlistRegex = /^20\d\d\.\d\d\.\d\d$/

    const getUserPlaylists = (offset) => {
      const spotifyApi = new SpotifyWebApi()
      return spotifyApi.getUserPlaylists(SPOTIFY_USER_ID, {
        limit: 50,
        offset,
      })
    }

    if(accessToken && fetchPlaylistsChunkStatus !== 'PENDING' && fetchPlaylistOffset !== null) {
      setFetchPlaylistsChunkStatus('PENDING')
      setFetchPlaylistsStatus('PENDING')
      getUserPlaylists(fetchPlaylistOffset).then((response, error) => {
        if(error) {
          setFetchPlaylistsChunkStatus('ERROR')
          setFetchPlaylistsStatus('ERROR')
        } else {
          setFetchPlaylistsChunkStatus('SUCCESS')
          const newPlaylists = response.items.filter((playlist) => {
            return playlistRegex.test(playlist.name)
          })
          setPlaylists([...playlists, ...newPlaylists])

          if(response.next) {
            setFetchPlaylistOffset(fetchPlaylistOffset + response.limit)
          } else {
            setFetchPlaylistOffset(null)
          setFetchPlaylistsStatus('SUCCESS')
          }
        }
      }).catch((error) => {
        // access token expired
        if(error.status === 401) {
          cookie.remove(COOKIE_NAME)
          setAccessToken(undefined)
          setFetchPlaylistsStatus('NOT_ASKED')
        }
      })
    }
  }, [SPOTIFY_USER_ID, accessToken, fetchPlaylistOffset])

  const handleLoginClick = () => {
    const encodedRedirectURI = encodeURI(process.env.REACT_APP_REDIRECT_URI)
    window.location = `https://accounts.spotify.com/authorize?response_type=token&client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodedRedirectURI}`
  }

  const renderFetchPlaylistState = () => {
    switch(fetchPlaylistsStatus) {
      case 'NOT_ASKED' || 'PENDING':
        return <div>loading</div>
      case 'ERROR':
        return <div>error</div>
      case 'SUCCESS':
        return (
          <main>
            <h1>Weekly Playlists</h1>
            { playlists.map((playlist, index) => {
              return (
                <Playlist
                  playlist={playlist}
                />
              )
            })}
          </main>
        )
      default:
        return <noscript/>
    }
  }

  return accessToken ? renderFetchPlaylistState() : (
    <button onClick={handleLoginClick}>Log in to Spotify</button>
  );
}

export default App;
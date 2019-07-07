import React, { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

function Playlist(props) {
  const [tracks, setTracks] = useState([])
  const [fetchTracksStatus, setFetchTracksStatus] = useState('NOT_ASKED')

  const fetchTracks = () => {
    setFetchTracksStatus('PENDING')
    const spotifyApi = new SpotifyWebApi()
    spotifyApi.getPlaylistTracks(props.playlist.id).then((response, error) => {
      if(error) {
        setFetchTracksStatus('ERROR')
      } else {
        setFetchTracksStatus('SUCCESS')
        setTracks(response.items)
      }
    })
  }

  if(props.expandTracks && fetchTracksStatus === 'NOT_ASKED') {
    fetchTracks()
  }

  const renderTrackArtists = (track) => {
    return track.artists.map((artist, index) => {
      return artist.name;
    })
  };

  const renderTracks = () => {
    switch (fetchTracksStatus) {
      case 'NOT_ASKED':
        return <button className="button" onClick={fetchTracks}>Expand tracks</button>
      case 'PENDING':
        return <div>Loading tracks...</div>
      case 'SUCCESS':
        return tracks.map((trackObj) => {
          const track = trackObj.track
          return (
            <div key={track.id} className="trackContainer">
              <p> {`${track.name} by ${renderTrackArtists(track)} from ${track.album.name} (${track.album.release_date.split('-')[0]})`} </p>
            </div>
          );
        })
      default:
        return null;
    }
  }

  return (
    <section>
      <h2>{props.playlist.name}</h2>
      <div>
        <span className="uri">URI: {props.playlist.uri}</span>
        <iframe
          title={props.playlist.name}
          src={`https://open.spotify.com/embed/playlist/${props.playlist.id}`}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media">
        </iframe>
        <div className="tracks">
          { renderTracks() }
        </div>
      </div>
    </section>
  )
}

export default Playlist;
import React from 'react';

function Playlist(props) {
  const getPlaylistId = (playlist) => {
    // spotify:playlist:123asdf
    const uriParts = playlist.uri.split(':')
    return uriParts[2]
  }

  return (
    <section>
      <h2>{props.playlist.name}</h2>
      <div>
        <iframe
          title={props.playlist.name}
          src={`https://open.spotify.com/embed/playlist/${getPlaylistId(props.playlist)}`}
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media">
        </iframe>
      </div>
    </section>
  )
}

export default Playlist;
export default function SpotifyPlayerCard({
  title = "Now playing",
  subtitle = "My favourites",
  spotifyUrl = "https://open.spotify.com/embed/playlist/61sjCaefm0Culkp9dQ2B2Q?si=YoUoidmJQsm1fFwUX0BHdA&pi=yTRQ0g5cQq-zn", 
}) {
  return (
    
      <div className="p-6">
    

        {/* Real Spotify player */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/1">
          <iframe
            title="Spotify player"
            src={spotifyUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block"
          />
        </div>
      </div>
  );
}

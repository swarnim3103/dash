interface MusicProps {
  onClose?: () => void;
}
export default function Music({ onClose }: MusicProps) {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 w-80 border-10 border-chart-3 rounded-xl bg-chart-3">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute -top-3 -left-3 z-10 w-8 h-8 rounded-full text-white font-bold shadow-lg transition-all flex items-center justify-center text-2xl"
            aria-label="Close music player"
          >
            ×
          </button>
        )}
        
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px"}}
          src="https://open.spotify.com/embed/playlist/0sYurpSRuGagraVVQUACMc?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </>
  );
}
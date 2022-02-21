export default function BgVideo() {
  return (
    <>
      <style jsx>{`
        .video {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
          filter: opacity(30%);
          z-index: -1;
        }
      `}</style>

      <video autoPlay muted loop className="video">
        <source src="bgHDVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

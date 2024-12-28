export default function Page() {
  return (
    <div>
              <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <video
          src="/Loading.mp4" // Replace with the path to your video
          autoPlay
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        ></video>
      </div>
    </div>
  );
}

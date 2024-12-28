export default function Loading() {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "100vh" }} className="mt-[100px]">
        <video
          src="/Loading.mp4"
          autoPlay
          muted
          playsInline
          style={{ width: "100%", height: "60%", objectFit: "contain" }}
        ></video>
      </div>
    </div>
  );
}

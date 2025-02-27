
export default function Videobg() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[url(/backgroundhero.png)] bg-cover bg-no-repeat bg-center">
    <iframe
        src="https://player.vimeo.com/video/1060562782?h=fa56ea58b5&dnt=1&autoplay=1&loop=1&muted=1&background=1"
        className="absolute top-1/2 left-1/2 w-full h-full"
        style={{
          width: "100vw",
          height: "56.25vw", // Maintain 16:9 aspect ratio
          minHeight: "100vh",
          minWidth: "177.78vh", // Maintain 16:9 aspect ratio
          transform: "translate(-50%, -50%)", // Center the video
        }}
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
      </div>
  )
}

const HeroSection = () => (
  <div className="relative w-full h-[90vh] overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source
        src="/supreme-videos/automotive.224e7418884105595114.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black/50 z-0" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
      <p className="text-base md:text-lg font-light mb-2">
        Driven by performance
      </p>
      <h1 className="text-2xl md:text-4xl font-bold">
        Soft trims and <span className="text-cyan-400">NVH solutions</span>
      </h1>
      <p className="text-lg md:text-xl font-light mt-2">for seamless rides</p>
    </div>
  </div>
);

export default HeroSection;

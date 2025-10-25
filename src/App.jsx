import React, { useState } from "react";

export default function App() {
  const versions = {
    "0.1.0": {
      name: "0.1.0 — The first release",
      date: "2025-08-12",
      featured: false,
      changelog: ["Inital Release"],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/arcswebsite/releases/download/oa-ae/OptiArk.Adventure.Edition.0.1.mrpack",
    },
    "0.2.0": {
      name: "0.2.0",
      date: "2025-9-04",
      featured: false, // Auto-selected by default
      changelog: [
        "Add a bunch of new 3D items",
        "Re enable animations and biome colors",
        "Add a new update UI",
        "Benchmarking will take place as soon as my lapotp is repaired.",
        "New loading screen warning",
        "Add a small animation when UI's are opened",
        "Pre loading screen added",
      ],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/arcswebsite/releases/download/oa-ae/OptiArk.Adventure.Edition.0.2.mrpack",
    },
    "0.3.0": {
      name: "0.3.0 — Menu Update",
      date: "2025-09-10",
      featured: false,
      changelog: [
        "Adds more shaders",
        "Updates some mods",
        "Configuration changes",
        "Fix some issues",
        "Updated menues",
        "Changed Loading Screen",
        "Added a paralax effect to the logo",
        "In-Game HUD Changes",
        "Threatans minecraft to use the newest OpenGL Version (Usualy 4.6)",
        "Adds Distant Horizon (At least a 16 Core CPU Reccomended for this)",
      ],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/arcswebsite/releases/download/oa-ae/OptiArk.Adventure.Edition.Test.0.3.0.mrpack",
    },
    "0.4.0": {
      name: "0.4.0 — The Texture Update",
      date: "2025-09-12",
      featured: false,
      changelog: [
        "Fix the stick model",
        "Remove distant horizens (caused alot of TPS issues)",
        "Added a minimum ram amount (8GB)",
        "Added a new 3D tools texturepack",
        "Made items drop on the ground realisticly",
        "Added xaeros minimap",
        "Behind the scence changes",
        "Fancymenu UI changes",
        "Bug Fixes",
      ],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/arcswebsite/releases/download/oa-ae/OptiArk.Adventure.Edition.0.4.mrpack",
    },
    "0.4.1": {
      name: "0.4.1 — The Pet update",
      date: "2025-09-13",
      featured: true,
      changelog: [
        "Foxes are now tamable",
        "Pets now have personal Inventories",
        "Pets can now teleport with you if you use the /tp command",
        "You can now pet mobs, becuase, yeah.",
        "New shaders added",
        "More structures added",
        "More partical effects added like water splashing",
        "Bug Fixes",
      ],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/arcswebsite/releases/download/oa-ae/OptiArk.Adventure.Edition.0.4.1.mrpack",
    },
    "0.5.0-ALPHA": {
      name: "0.5.0 — The Remake (IN DEVELOPMENT, BUGGY)",
      date: "2025-10-25",
      featured: false,
      changelog: [
        "Remade all the textures",
        "HMI updated so it looks much closer to A&S",
        "A whole bunch of new mods installed to make your expereance better",
        "Some of the texturepacks are disabled for a reason, dont enable them.",
        "Whole bunch of other things i forgot because ive been working on this 1 update for 3 weeks",
        "Bug fixes from the last version",
        "WARNING: USE THIS VERSION AT YOUR OWN RISK, IT IS IN ALPHA AND IS STILL IN CONSTANT DEVELOPMENT",
      ],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/optiark-website/releases/download/oaaev5/OptiArk.Adventure.Edition.0.5.mrpack",
    },
  };

  // Auto-select the featured version
  const featuredVersion =
    Object.keys(versions).find((v) => versions[v].featured) ||
    Object.keys(versions)[0];
  const [selectedVersion, setSelectedVersion] = useState(featuredVersion);

  const current = versions[selectedVersion];
  const coverImage = "/cover.png"; // You set this manually in /public


  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070b12] to-[#0a0e16] text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center p-8 h-screen">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl animate-pulse pointer-events-none"></div>

        {/* Cover Image */}
        {coverImage && (
          <img
            src={coverImage}
            alt="Cover"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
          />
        )}
{/* Topbar */}
<div className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/50 shadow-md">
  <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 px-6 py-2">
    {/* Home */}
    <a
      href="/"
      //target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200"
    >
      Home
    </a>

    {/* News */}
    <a
      href="/#/news"
      // target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200"
    >
      News
    </a>

    {/* Adventure Edition (current page) */}
    <span className="text-white px-3 py-1 rounded bg-blue-700/30 font-semibold">
      Adventure Edition
    </span>
  </div>
</div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none"></div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent animate-pulse-slow drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
          OptiArk
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 italic mb-6 relative z-10">
          Adventure Edition
        </p>

        {/* Description */}
        <p className="max-w-2xl text-gray-400 mb-8 relative z-10">
          A Minecraft modpack with amazing animations, visuals, and more!
          Finnaly a good alternative to Actions & Stuff!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 relative z-10 mt-6">
          <button
            onClick={() => {
              document.getElementById("downloads")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
          >
            Download Now
          </button>

          <a
            href="https://www.arc360hub.com/OptiArk/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105"
          >
            Main OptiArk Website
          </a>
        </div>
      </section>

      {/* Version Info + Changelog */}
      <section id="downloads" className="py-20 px-8 bg-[#0f131c] relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">
            Version Information
          </h2>

          {/* Custom Version Selector Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {Object.keys(versions).map((v) => {
              const version = versions[v];
              const isSelected = selectedVersion === v;
              return (
                <button
                  key={v}
                  onClick={() => setSelectedVersion(v)}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center font-semibold ${
                    version.featured
                      ? "border-yellow-400 shadow-[0_0_20px_#facc15] animate-pulse"
                      : "border-gray-700"
                  } ${isSelected ? "bg-blue-700/30" : "bg-[#151b25] hover:bg-[#1f2530]"} `}
                >
                  <span className="text-lg">{v}</span>
                  {version.featured && (
                    <span className="text-xs text-yellow-300 mt-1">★ Featured</span>
                  )}
                </button>
              );
            })}
          </div>

          <p className="text-gray-500 mb-4">Released: {current.date}</p>

          <div className="bg-[#131820] rounded-xl p-6 border border-gray-800 shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-200">
              Changelog for {selectedVersion}
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {current.changelog.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Download Button */}
          <a
            href={current.download}
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_30px_#60a5fa] transition-all"
          >
            Download this version
          </a>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section className="py-20 px-8 bg-[#0b0f16] relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-purple-300">
            Showcase Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_#a855f7]"
              />
            ))}
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="py-10 text-center border-t border-gray-800 bg-[#0a0c12]">
  <p className="text-gray-400">
    © 2025 Made with ❤️ by Arc360 :3{" "}
    <a
      href="https://github.com/arc360alt/optiark-website"
      className="text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200 font-semibold"
    >
      Website Source
    </a>

  </p>
  <p className="text-gray-500 mt-2">
    Not affiliated with or a product of Mojang or Microsoft.
  </p>
</footer>
    </div>
  );
}

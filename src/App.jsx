import React, { useState } from "react";

export default function App() {
  const versions = {
    "0.1.0": {
      name: "0.1.0 — The first release",
      date: "2025-08-12",
      featured: false,
      unsupported: true,
      changelog: ["Inital Release"],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/arcswebsite/releases/download/oa-ae/OptiArk.Adventure.Edition.0.1.mrpack",
    },
    "0.2.0": {
      name: "0.2.0",
      date: "2025-9-04",
      featured: false, // Auto-selected by default
      unsupported: true,
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
      unsupported: true,
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
      unsupported: true,
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
    "0.5.0-test5": {
      name: "0.5.0 — The Remake (IN DEVELOPMENT, BUGGY)",
      date: "2025-10-25",
      featured: false,
      beta: true, 
      changelog: [
        "Remade all the textures",
        "HMI updated so it looks much closer to A&S",
        "A whole bunch of new mods installed to make your expereance better",
        "Some of the texturepacks are disabled for a reason, dont enable them.",
        "Backport the Happy Ghast to this version",
        "Fix the 3D Buckets",
        "Plants and seeds now appear as 3D in your hands",
        "New RPG Like Mob Textures",
        "Add guides to help users do stuff (like disabling the worldgen mods)",
        "Whole bunch of other things i forgot because ive been working on this 1 update for 3 weeks",
        "Bug fixes from the last version",
        "WARNING: Use this verison at your own risk, it could corrupt worlds if your not carful.",
      ],
      images: ["/showcase1.png", "/showcase2.png"],
      download: "https://github.com/arc360alt/optiark-website/releases/download/oaaev5/OptiArk.Adventure.Edition.0.5-test5.mrpack",
    },
  };

  // Auto-select the featured version
  const featuredVersion =
    Object.keys(versions).find((v) => versions[v].featured) ||
    Object.keys(versions)[0];
  const [selectedVersion, setSelectedVersion] = useState(featuredVersion);

  const current = versions[selectedVersion];
  const coverImage = "/cover.png"; // You set this manually in /public
const [showUnsupported, setShowUnsupported] = useState(false);
const [showBeta, setShowBeta] = useState(false);
const [showUnsupportedWarning, setShowUnsupportedWarning] = useState(false);
const [showBetaWarning, setShowBetaWarning] = useState(false);

// Optional background images per version
const VERSION_BACKGROUNDS = {
  "0.1.0": "0.1.0.png",
  "0.2.0": "0.2.0.png",
  "0.3.0": "0.3.0.png",
  "0.4.0": "/0.4.0.png",
  "0.4.1": "cover.png",
  "0.5.0-ALPHA": "/showcase1.png",
  default: "showcase2.png", // fallback if none specified
};


  
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

    {/* Version Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {Object.keys(versions).map((v) => {
        const version = versions[v];
        const isSelected = selectedVersion === v;

        const isUnsupported =
          version.name.toLowerCase().includes("unsupported") ||
          v.toLowerCase().includes("unsupported") ||
          version.unsupported === true;

        const isBeta =
          version.name.toLowerCase().includes("alpha") ||
          version.name.toLowerCase().includes("beta");

        const backgroundImage =
          VERSION_BACKGROUNDS?.[v] || VERSION_BACKGROUNDS?.default || "";

        return (
          <button
            key={v}
            onClick={() => setSelectedVersion(v)}
            className={`relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center font-semibold overflow-hidden transform ${
              version.featured
                ? "border-yellow-400 shadow-[0_0_20px_#facc15] animate-pulse"
                : "border-gray-700"
            } ${
              isSelected
                ? "bg-blue-700/30 scale-105 shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                : "bg-[#151b25] hover:bg-[#1f2530] hover:scale-105"
            }`}
            style={{
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {backgroundImage && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 hover:bg-black/50" />
            )}

            <div className="relative z-10 text-center">
              <span className="text-lg text-white drop-shadow-md">{v}</span>

              {version.featured && (
                <span className="block text-xs text-yellow-300 mt-1">
                  ★ Featured
                </span>
              )}

{version.beta && (
  <span className="block text-xs text-orange-300 bg-orange-900/40 px-2 py-0.5 rounded mt-1">
    Beta
  </span>
)}


              {isUnsupported && (
                <span className="block text-xs text-red-300 bg-red-900/40 px-2 py-0.5 rounded mt-2">
                  Unsupported
                </span>
              )}

              {isBeta && (
                <span className="block text-xs text-yellow-300 bg-yellow-900/40 px-2 py-0.5 rounded mt-2">
                  Beta
                </span>
              )}
            </div>
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
    <button
onClick={() => {
  const version = versions[selectedVersion];
  
  if (version.unsupported) {
    setShowUnsupported(true);
    return;
  }

  if (version.beta || version.name.toLowerCase().includes("alpha") || version.name.toLowerCase().includes("beta")) {
    setShowBeta(true);
    return;
  }

  window.open(version.download, "_blank");
}}
      className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_30px_#60a5fa] transition-all"
    >
      Download this version
    </button>
  </div>

{/* Popups */}
{(showUnsupported || showBeta) && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 animate-fadeIn">
    <div
      className={`bg-[#151b25]/90 border rounded-2xl p-8 shadow-2xl max-w-md text-center animate-slideUp ${
        showUnsupported ? "border-red-500/40" : "border-yellow-500/40"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-4 ${
          showUnsupported ? "text-red-400" : "text-yellow-400"
        }`}
      >
        {showUnsupported ? "⚠️ Unsupported Version" : "🧪 Beta Version"}
      </h2>

      <p className="text-gray-300 mb-6">
        {showUnsupported
          ? "This version may not work properly or could cause issues. Proceed only if you understand the risks."
          : "This version is still in testing and may contain bugs or performance issues."}
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            setShowUnsupported(false);
            setShowBeta(false);
          }}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          ×
        </button>
        <button
          onClick={() => {
            const version = versions[selectedVersion];
            setShowUnsupported(false);
            setShowBeta(false);
            window.open(version.download, "_blank");
          }}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            showUnsupported
              ? "bg-red-600 hover:bg-red-700"
              : "bg-yellow-600 hover:bg-yellow-700"
          }`}
        >
          Continue Anyway
        </button>
      </div>
    </div>
  </div>
)}

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

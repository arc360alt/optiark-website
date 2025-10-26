import React, { useState } from "react";

const DOWNLOAD_DATA = {
    "Sodium": {
        "1.20.1 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.20.1.1.8.Sodium.zip",
        "1.21.4 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.4.1.8.Sodium.zip",
        "1.21.5": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.5.1.8.Sodium.zip",
        "1.21.6": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.6.1.8.Sodium.zip",
        "1.21.7": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.7.1.8.Sodium.zip",
        "1.21.8": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.8.1.8.Sodium.zip",
        "1.21.9": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.9.1.8.Sodium.zip",
      "1.21.10": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.10.1.8.Sodium.zip"
    },
    "VulkanMod": {
        "1.20.1VK": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.20.1.1.8.VK.zip",
        "1.21.4VK": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.4.1.8.VK.zip",
        "1.21.5VK": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.5.1.8.VK.zip"
    },
    "Nividium": {
        "1.20.1NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.20.1.1.8.NV.zip",
        "1.21.4NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.4.1.8.NV.zip",
        "1.21.5NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.5.1.8.NV.zip",
        "1.21.6NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.6.1.8.NV.zip",
        "1.21.7NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.7.1.8.NV.zip",
        "1.21.8NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.8.1.8.NV.zip",
        "1.21.9NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.9.1.8.NV.zip",
      "1.21.10NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8.0-1.21.9-10/OptiArk.1.21.10.1.8.NV.zip"
    },
  Embeddium: {
    "1.20.1": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7/OptiArk.1.20.1.1.7.EB.mrpack",
    "1.19.4": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.19.4.1.8.EB.mrpack",
    "1.18.2": "https://github.com/arc360alt/optiark-website/releases/download/old/OptiArk.1.18.2.1.8.EB.mrpack",
    "1.16.5": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7/OptiArk.1.16.5.1.7.EB.mrpack"
  },
  Other: {
    "1.8.9 OptiFine": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.8.9.1.7.OptiFine.mrpack",
    "1.12.2 Sodium": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.12.2.1.7.Sodium.mrpack",
    "1.12.2 OptiFine": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.12.2.1.7.OptiFine.mrpack"
  }
};

// Add this at the top of your component file, after DOWNLOAD_DATA
const TECH_ICONS = {
  Sodium: "https://cdn.modrinth.com/data/AANobbMI/295862f4724dc3f78df3447ad6072b2dcd3ef0c9_96.webp",     
  VulkanMod: "https://cdn.modrinth.com/data/JYQhtZtO/2b37b630b4be3c92101ddb500c628def9b57ea3d_96.webp",    
  Nividium: "https://cdn.modrinth.com/data/SfMw2IZN/2db76d464a0f67cdb9e30fd99040eb096ac62016_96.webp",   
  Embeddium: "https://cdn.modrinth.com/data/sk9rgfiA/55f9c50284f8abbbe2a485abfd6a16209201e451_96.webp",   
  Other: "https://avatars.githubusercontent.com/u/69833574?s=280&v=4"       
};


export default function App() {
  const coverImage = "/a.png";
  const technologies = Object.keys(DOWNLOAD_DATA);
  const [selectedTech, setSelectedTech] = useState(technologies[0]);
  const [selectedVersion, setSelectedVersion] = useState(Object.keys(DOWNLOAD_DATA[technologies[0]])[0]);
  const [unsupportedWarning, setUnsupportedWarning] = useState(false);

  const handleTechChange = (tech) => {
    setSelectedTech(tech);
    setSelectedVersion(Object.keys(DOWNLOAD_DATA[tech])[0]);
  };

  const handleDownload = (version) => {
    if (!version) return;
    if (version.toLowerCase().includes("unsupported")) {
      setUnsupportedWarning(true);
      return;
    }
    const url = DOWNLOAD_DATA[selectedTech][version];
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070b12] to-[#0a0e16] text-white font-sans overflow-x-hidden">
      {/* Small toast warning (center top) */}
{unsupportedWarning && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Blur overlay */}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"></div>

    {/* Popup */}
    <div className="relative bg-red-600/90 text-white px-6 py-4 rounded-xl shadow-lg shadow-red-500/40 flex flex-col items-center gap-3 max-w-md w-[90%] border border-red-400 z-10 animate-popupIn">
      <div className="flex justify-between items-center w-full">
        <span className="font-semibold text-lg">⚠️ Unsupported Version</span>
        <button
          onClick={() => setUnsupportedWarning(false)}
          className="text-white hover:text-gray-200 text-xl leading-none"
        >
          ✕
        </button>
      </div>
      <p className="text-sm text-gray-100 text-center">
        This version is marked as unsupported and may not work properly. Continue only if you understand the risks.
      </p>
      <div className="flex gap-3 mt-2">
        <button
          onClick={() => {
            window.open(DOWNLOAD_DATA[selectedTech][selectedVersion], "_blank");
            setUnsupportedWarning(false);
          }}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          Continue Anyway
        </button>
        <button
          onClick={() => setUnsupportedWarning(false)}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center p-8 h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl animate-pulse pointer-events-none"></div>
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
            <span className="text-white px-3 py-1 rounded bg-blue-700/30 font-semibold">Home</span>
            <a href="/#/news" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">News</a>
            <a href="/#/adventure" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">Adventure Edition</a>
            
          </div>
        </div>

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none"></div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent animate-pulse-slow drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
          OptiArk
        </h1>
        <p className="max-w-2xl text-gray-400 mb-8 relative z-10">
          A minecraft preformance modpack for 1.21.8
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 relative z-10 mt-6">
          <button
            onClick={() => document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
          >
            Download Now
          </button>

          <a
            href="https://arkmc.arc360hub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105"
          >
            Check out or minecraft server
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-[#0d1119] relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">
            Key Features
          </h2>
          <p className="text-gray-400 mb-12">
            Discover what makes OptiArk a next-generation performance experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#151b25] rounded-2xl shadow-lg p-6 hover:scale-[1.03] hover:shadow-[0_0_25px_#3b82f6aa] transition-all duration-300">
              <img
                src="/4090.png"
                alt="Performant Gameplay"
                className="rounded-xl mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Extreme Performance Boost
              </h3>
              <p className="text-gray-300 text-sm">
                OptiArk delivers massive FPS gains through optimized mod configurations and Vulkan support.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#151b25] rounded-2xl shadow-lg p-6 hover:scale-[1.03] hover:shadow-[0_0_25px_#8b5cf6aa] transition-all duration-300">
              <img
                src="/680m.png"
                alt="Visual Enhancements"
                className="rounded-xl mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                Runs Great Everywhere
              </h3>
              <p className="text-gray-300 text-sm">
                OptiArk is created for efficiency and framerate. It runs pretty great on a wide spectrum of hardware (that can run java 21+), delivering high framerates and some qol mods without demanding top-tier specs. (image is a 680m integrated laptop gpu running the game quite well)
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#151b25] rounded-2xl shadow-lg p-6 hover:scale-[1.03] hover:shadow-[0_0_25px_#22c55eaa] transition-all duration-300">
              <img
                src="/a.png"
                alt="Easy Installation"
                className="rounded-xl mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">
                Simple Setup
              </h3>
              <p className="text-gray-300 text-sm">
                Download, install, and play instantly. OptiArk’s smart structure ensures compatibility and simplicity. All you need is Prism Launcher (or Modrinth, but you will need a costom tool for that) and import the .zip or converted .mrpack
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benchmark Section */}
      <section className="py-20 px-8 bg-[#10141d] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-green-400">
            Performance Benchmark
          </h2>
          <p className="text-gray-400 mb-10">
            See how OptiArk stacks up, tested on a ThinkPad with a 680M GPU.
          </p>

          {/* Bars */}
          <div className="flex flex-col gap-6 items-center">
            {/* Bar 1 */}
            <div className="w-full bg-[#1a1e27] rounded-xl overflow-hidden shadow-lg">
              <div
                className="bg-red-600 text-left px-4 py-2 font-bold text-sm text-white"
                style={{ width: "82%" }}
              >
                OptiArk VULKAN FPS: 820
              </div>
            </div>

            {/* Bar 2 */}
            <div className="w-full bg-[#1a1e27] rounded-xl overflow-hidden shadow-lg">
              <div
                className="bg-blue-600 text-left px-4 py-2 font-bold text-sm text-white"
                style={{ width: "56%" }}
              >
                OptiArk FPS: 560
              </div>
            </div>

            {/* Bar 3 */}
            <div className="w-full bg-[#1a1e27] rounded-xl overflow-hidden shadow-lg">
              <div
                className="bg-green-600 text-left px-4 py-2 font-bold text-sm text-white"
                style={{ width: "34%" }}
              >
                Competitor Pack: 340
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6 italic">
            *Benchmark results can vary based on hardware, game version, and specific in-game scenarios.
            This pack is still in development and may change at any time.
          </p>
        </div>
      </section>


{/* Version Selector */}
<section id="downloads" className="py-20 px-8 bg-[#0f131c] relative z-10">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-8 text-blue-300 text-center">Version Information</h2>

{/* Technologies Tabs with Individual Icons */}
<div className="flex justify-center gap-4 mb-8 flex-wrap">
  {technologies.map((tech) => (
    <button
      key={tech}
      onClick={() => handleTechChange(tech)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
        selectedTech === tech
          ? "bg-blue-600 text-white shadow-[0_0_15px_#3b82f6]"
          : "bg-[#151b25] text-gray-300 hover:bg-[#1f2530]"
      }`}
    >
      {/* Individual tech icon */}
      <img
        src={TECH_ICONS[tech] || "/placeholder-icon.png"} // fallback placeholder
        alt={`${tech} icon`}
        className="w-6 h-6 rounded-full flex-shrink-0 object-cover"
      />
      <span>{tech}</span>
    </button>
  ))}
</div>


    {/* Versions Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {Object.keys(DOWNLOAD_DATA[selectedTech]).map((version) => {
        const isUnsupported = version.toLowerCase().includes("unsupported");
        const cleanName = version.replace(/\(unsupported\)/gi, "").trim();
        return (
          <div
            key={version}
            className={`flex flex-col justify-between p-4 rounded-xl transition-all duration-200 border ${
              selectedVersion === version
                ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_#3b82f6]"
                : "bg-[#1f2530] text-gray-300 border-[#2a2f38] hover:bg-[#2a2f38]"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{cleanName}</span>
              {isUnsupported && (
                <span className="text-xs text-red-300 bg-red-900/30 px-2 py-0.5 rounded">
                  Unsupported
                </span>
              )}
            </div>
            <button
              onClick={() => setSelectedVersion(version)}
              className={`mt-2 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                selectedVersion === version
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Select
            </button>
          </div>
        );
      })}
    </div>

    {/* Download Button */}
    <div className="text-center mb-6">
      <button
        onClick={() => handleDownload(selectedVersion)}
        className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_30px_#60a5fa] transition-all"
      >
        Download {selectedVersion ? `— ${selectedVersion.replace(/\(unsupported\)/gi, "").trim()}` : ""}
      </button>
    </div>

    {/* Conversion Tool Info */}
    <p className="text-center text-sm text-gray-400">
      To convert these <span className="text-blue-400">.zip</span> packs into 
      <span className="text-green-400"> .mrpack </span> files for use in Modrinth, 
      use this tool:{" "}
      <a
        href="https://github.com/arc360alt/OptiArk/releases/tag/converter0.1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 underline transition-colors"
      >
        OptiArk Converter 0.1
      </a>
    </p>
  </div>
</section>


      {/* Showcase Gallery */}
      <section className="py-20 px-8 bg-[#0b0f16] relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-purple-300">Showcase Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/680m.png" alt="Screenshot 1" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_#a855f7]" />
            <img src="/4090.png" alt="Screenshot 2" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_#a855f7]" />
             <img src="/6000fps.png" alt="Screenshot 2" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_#a855f7]" />
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="py-10 text-center border-t border-gray-800 bg-[#0a0c12]">
  <p className="text-gray-400">
    © 2025 Made with ❤️ by Arc360 :3{" "}
    <a
      href="https://github.com/arc360alt/OptiArk"
      className="text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200 font-semibold"
    >
      Modpack Source 
    </a>

  </p>
  <p className="text-gray-500 mt-2">
    Not affiliated with or a product of Mojang or Microsoft.
  </p>
</footer>


      {/* Tiny animation for toast */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-6px) scale(0.98); }
          10% { opacity: 1; transform: translateY(0) scale(1); }
          90% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-6px) scale(0.98); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 3s ease-in-out forwards;
        }
            @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }

  @keyframes popupIn {
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }
  .animate-popupIn {
    animation: popupIn 0.3s ease-out forwards;
  }
      `}</style>
    </div>
  );
}

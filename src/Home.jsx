import React, { useState } from "react";

const DOWNLOAD_DATA = {
    "Sodium": {
        "1.21.11": "https://github.com/arc360alt/OptiArk-New/releases/download/v1.1.0/OptiArk-sodium-1.21.11.mrpack",
        "1.21.10 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.10.1.8.Sodium.zip",
        "1.21.9 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.9.1.8.Sodium.zip",
        "1.21.8 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.8.1.8.Sodium.zip",
        "1.21.7 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.7.1.8.Sodium.zip",
        "1.21.6 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.6.1.8.Sodium.zip",
        "1.21.5 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.5.1.8.Sodium.zip",
        "1.21.4 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.4.1.8.Sodium.zip",
        "1.20.1 (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.20.1.1.8.Sodium.zip"
    },
    "VulkanMod": {
        "1.21.11VK": "https://github.com/arc360alt/OptiArk-New/releases/download/v1.1.0/OptiArk-vulkanmod-1.21.11.mrpack",
        "1.21.10VK (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.10.1.8.VK.zip",
        "1.21.9VK (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.9.1.8.VK.zip",
        "1.21.5VK (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.5.1.8.VK.zip",
        "1.21.4VK (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.4.1.8.VK.zip",
        "1.20.1VK (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.20.1.1.8.VK.zip"
    },
    "Nividium": {
        "1.21.11NV": "https://github.com/arc360alt/OptiArk-New/releases/download/v1.1.0/OptiArk-nvidium-1.21.11.mrpack",
        "1.21.10NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.10.1.8.NV.zip",
        "1.21.9NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.9.1.8.NV.zip",
        "1.21.8NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.8.1.8.NV.zip",
        "1.21.7NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.7.1.8.NV.zip",
        "1.21.6NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.6.1.8.NV.zip",
        "1.21.5NV (Unsupported)": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.5.1.8.NV.zip",
        "1.21.4 (Unsupported)NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.21.4.1.8.NV.zip",
        "1.20.1 (Unsupported)NV": "https://github.com/arc360alt/OptiArk/releases/download/optiark-v1.8-11nvvk/OptiArk.1.20.1.1.8.NV.zip"
    },
    "Embeddium": {
        "1.20.1": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7/OptiArk.1.20.1.1.7.EB.mrpack",
        "1.19.4": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.19.4.1.8.EB.mrpack",
        "1.18.2": "https://github.com/arc360alt/optiark-website/releases/download/old/OptiArk.1.18.2.1.8.EB.mrpack",
        "1.16.5": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7/OptiArk.1.16.5.1.7.EB.mrpack"
    },
    "Other": {
        "1.8.9 OptiFine": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.8.9.1.7.OptiFine.mrpack",
        "1.12.2 Sodium": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.12.2.1.7.Sodium.mrpack",
        "1.12.2 OptiFine": "https://github.com/arc360alt/arcswebsite/releases/download/oa1.7OLD/OptiArk.1.12.2.1.7.OptiFine.mrpack"
    }
};

const BUILD_COMMENTS = {
    "VulkanMod": {
        "1.21.9VK (Unsupported)": "If your having issues with the game starting, add this JVM Argument: -Dorg.lwjgl.system.stackSize=256.",
        "1.21.10VK (Unsupported)": "If your having issues with the game starting, add this JVM Argument: -Dorg.lwjgl.system.stackSize=256",
        "1.21.11VK": "If your having issues with the game starting, add this JVM Argument: -Dorg.lwjgl.system.stackSize=256"
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

const BANNER_MESSAGE = "🚀 OptiArk has been rewritten from the ground up! New .mrpack format, cleaner structure, and better updates. Check the latest release!";
const BANNER_LINK = "#downloads";

// Backgrounds for each Minecraft version
const VERSION_BACKGROUNDS = {
  "1.21.11": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MCV_MountsOfMayhem_Launch_editorial_1170x500.jpg",
  "1.21.10": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21.10%201170x500.jpg",
  "1.21.9": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21.9_1170x500.jpg",
  "1.21.8": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21.8%201170x500.jpg",
  "1.21.7": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21.7-1170x500.jpg",
  "1.21.6": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21.6_1170x500.jpg",
  "1.21.5": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21.5_1170x500.jpg",
  "1.21.4": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21.4_1170x500.jpg",
  "1.20.1": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.20.1%201170x500.jpg",
  "1.19.4": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1_19_4_release_header.jpg",
  "1.18.2": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1-18-2-release-header.jpg",
  "1.16.5": "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/nether-header.jpg",
  "1.12.2": "https://www.minecraft.net/content/dam/minecraftnet/archive/be692329014b85620ad11631650c1f91-Header.png",
  "1.8.9": "https://minecraft.wiki/images/thumb/Java_Edition_1.8.9.png/800px-Java_Edition_1.8.9.png?3d88b"
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

const [hoveredBar, setHoveredBar] = useState(null);
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070b12] to-[#0a0e16] text-white font-sans overflow-x-hidden">
<div className="fixed top-12 left-0 w-full z-40 bg-blue-600/95 backdrop-blur-sm border-b border-blue-400/30 text-white text-sm py-2 px-4 flex items-center justify-center gap-3 shadow-lg">
  <span className="text-yellow-300 font-bold shrink-0">★ NEW</span>
  <span className="text-center text-white/90">OptiArk has been fully rewritten — new .mrpack format, cleaner structure, and better updates.</span>
  <button
    onClick={() => document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth", block: "start" })}
    className="shrink-0 bg-white text-blue-700 font-semibold px-3 py-0.5 rounded-full text-xs hover:bg-yellow-300 transition-colors duration-200"
  >
    See Downloads →
  </button>
</div>
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
            <a href="/#/converter" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">Converter</a>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none"></div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent animate-pulse-slow drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
          OptiArk
        </h1>
        <p className="max-w-2xl text-gray-400 mb-8 relative z-10">
          A minecraft preformance modpack for 1.20.1-1.21.11
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 relative z-10 mt-6">
          <button
            onClick={() => document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
          >
            Download Now
          </button>
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

{/* System Requirements Section */}
<section className="py-20 px-8 bg-[#0a0e16] relative z-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4 text-center text-blue-300">
      System Requirements
    </h2>
    <p className="text-gray-400 mb-12 text-center">
      Choose the right build for your hardware.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Sodium Card */}
      <div className="bg-[#151b25] rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={TECH_ICONS.Sodium}
            alt="Sodium"
            className="w-10 h-10 rounded-lg"
          />
          <h3 className="text-2xl font-bold text-blue-400">Sodium</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-green-400 font-semibold mb-2">✓ Minimum</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 21+</li>
              <li>• 4GB RAM</li>
              <li>• Intel HD 4000 / AMD Radeon R5 or equivalent</li>
              <li>• OpenGL 4.6 support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">★ Recommended</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 21+</li>
              <li>• 8GB RAM</li>
              <li>• GTX 1050 / RX 560 or better</li>
              <li>• OpenGL 4.6 support</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-green-300 bg-green-900/20 px-3 py-2 rounded-lg border border-green-700/30">
          Recommended option for casual gameplay
        </p>
      </div>

      {/* Nividium Card */}
      <div className="bg-[#151b25] rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={TECH_ICONS.Nividium}
            alt="Nividium"
            className="w-10 h-10 rounded-lg"
          />
          <h3 className="text-2xl font-bold text-green-400">Nividium</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-green-400 font-semibold mb-2">✓ Minimum</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 21+</li>
              <li>• 6GB RAM</li>
              <li>• <span className="text-green-400 font-semibold">NVIDIA GTX 1600 series or newer. </span><span className="text-xs text-gray-400 font-semibold">Older GPU's will not work as they dont have the required features.</span></li>
              <li>• OpenGL 4.6 + NVIDIA drivers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">★ Recommended</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 21+</li>
              <li>• 8GB+ RAM</li>
              <li>• <span className="text-green-400 font-semibold">NVIDIA RTX 2060 or better / GTX equivalent</span></li>
              <li>• Latest NVIDIA drivers</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4 text-xs text-yellow-300 bg-yellow-900/20 px-3 py-2 rounded-lg border border-yellow-700/30">
          ⚠️ NVIDIA GPUs only, Can be buggy at times as this pack is using beta nvidium builds.
        </p>
      </div>

      {/* VulkanMod Card */}
      <div className="bg-[#151b25] rounded-2xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={TECH_ICONS.VulkanMod}
            alt="VulkanMod"
            className="w-10 h-10 rounded-lg"
          />
          <h3 className="text-2xl font-bold text-red-400">VulkanMod</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-green-400 font-semibold mb-2">✓ Minimum</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 21+</li>
              <li>• 4GB RAM</li>
              <li>• Vulkan 1.3 compatible GPU (Most GPU's newer than 2013 have Vulkan suported drivers)</li>
              <li>• Latest GPU drivers with Vulkan support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">★ Recommended</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 21+</li>
              <li>• 8GB RAM</li>
              <li>• GTX 1060 / RX 580 / Intel Arc A380 or better</li>
              <li>• Latest Vulkan drivers</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4 text-xs text-blue-300 bg-blue-900/20 px-3 py-2 rounded-lg border border-blue-700/30">
          💡 Best performance gains on AMD and Intel GPUs
        </p>
      </div>

      {/* Embeddium Card */}
      <div className="bg-[#151b25] rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={TECH_ICONS.Embeddium}
            alt="Embeddium"
            className="w-10 h-10 rounded-lg"
          />
          <h3 className="text-2xl font-bold text-orange-400">Embeddium</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-green-400 font-semibold mb-2">✓ Minimum</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 17+ (version dependent)</li>
              <li>• 4GB RAM</li>
              <li>• Intel HD 4000 / AMD Radeon R5 or equivalent</li>
              <li>• OpenGL 4.3 support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">★ Recommended</h4>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Java 17+</li>
              <li>• 6GB RAM</li>
              <li>• GTX 750 Ti / RX 460 or better</li>
              <li>• OpenGL 4.6 support</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4 text-xs text-purple-300 bg-purple-900/20 px-3 py-2 rounded-lg border border-purple-700/30">
          🕰️ For older Minecraft versions (1.16.5-1.20.1)
        </p>
      </div>
    </div>
    <p style={{ margin: '18px' }}>Your CPU should have 4-6 cores at least for the best performance on all of these.</p>
    {/* General Notes */}
    <div className="mt-8 bg-[#151b25] rounded-xl p-6 border border-gray-800">
      <h4 className="text-lg font-semibold text-gray-200 mb-3">📋 General Notes</h4>
      <ul className="text-gray-400 text-sm space-y-2">
        <li>• All builds require the latest GPU drivers for optimal performance</li>
        <li>• RAM allocation of 4-6GB recommended for most scenarios</li>
        <li>• These may be inaccurate, so if the GPU required is not on this list the game still may run.</li>
        <li>• For best results, close background applications while gaming</li>
        <li>• Please suggest changes to the required hardware as these are probably very inaccurate, I only know the Nvidium ones are accurate.</li>
      </ul>
    </div>
  </div>
</section>

{/* Performance Section */}
<section id="performance" className="py-20 px-8 bg-[#0f131c] relative z-10">
  {(() => {
    const [hoveredBar, setHoveredBar] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const maxFPS = 1000; // max bar range (adjustable)

    return (
      <>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-2 text-blue-300">
            Performance Benchmark
          </h2>
          <p className="text-gray-400 mb-10">
            See how OptiArk stacks up, tested on a ThinkPad with a 680M GPU.
          </p>

          <div className="space-y-6">
            {[
              {
                label: "OptiArk VULKAN",
                value: 820,
                color: "bg-red-500",
                description:
                  "Measured on a ThinkPad with 680M GPU using OptiArk Vulkan, exceptional performance boost. (Defualt settings that are set out of the box)",
              },
              {
                label: "OptiArk (Default)",
                value: 560,
                color: "bg-blue-500",
                description:
                  "Normal minecraft gameplay, using settings that are set out of the box with OptiArk.",
              },
              {
                label: "Competitor Modpack",
                value: 340,
                color: "bg-green-500",
                description:
                  "Playing at the same exact settings as with Optiark, this modpack is the most popular one on Modrinth. Significant preformance loss.",
              },
            ].map((test, i) => (
              <div
                key={i}
                className="relative w-full h-8 bg-[#1a1f2b] rounded-xl overflow-hidden cursor-pointer border border-gray-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                onMouseEnter={() => setHoveredBar(test)}
                onMouseLeave={() => setHoveredBar(null)}
                onMouseMove={(e) =>
                  setMousePosition({ x: e.clientX, y: e.clientY })
                }
              >
                {/* Bar Fill */}
                <div
                  className={`${test.color} h-full rounded-xl transition-all duration-300`}
                  style={{
                    width: `${(test.value / maxFPS) * 100}%`,
                    transformOrigin: "left",
                  }}
                ></div>

                {/* Label */}
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-100 drop-shadow-md pointer-events-none">
                  {test.label}: {test.value} FPS
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {hoveredBar && (
          <div
            className="fixed bg-[#151b25]/90 border border-gray-700 text-gray-200 text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none transition-opacity duration-150 z-50 backdrop-blur-md"
            style={{
              top: mousePosition.y + 15,
              left: mousePosition.x + 15,
            }}
          >
            {hoveredBar.description}
          </div>
        )}
      </>
    );
  })()}
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
<div className="flex justify-center gap-6 flex-wrap mb-6">
{Object.keys(DOWNLOAD_DATA[selectedTech]).map((version) => {
    const isUnsupported = version.toLowerCase().includes("unsupported");
    const isBeta = version.toLowerCase().includes("beta");
    const cleanName = version.replace(/\(unsupported\)/gi, "").replace(/\(beta\)/gi, "").trim();
    const downloadUrl = DOWNLOAD_DATA[selectedTech][version];
    const isComingSoon = !downloadUrl || downloadUrl === "";
    const buildComment = BUILD_COMMENTS[selectedTech]?.[version];

    // Detect Minecraft version (e.g., "1.20.1")
    const mcVersionMatch = cleanName.match(/\d+\.\d+(\.\d+)?/);
    const mcVersion = mcVersionMatch ? mcVersionMatch[0] : null;
    const backgroundImage = VERSION_BACKGROUNDS[mcVersion] || "";

    return (
      <div
        key={version}
        className="relative rounded-xl overflow-hidden bg-[#1b1f29] backdrop-blur-md shadow-md transform transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] cursor-pointer"
        style={{
          width: "220px",
          minHeight: "130px",
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => !isComingSoon && setSelectedVersion(version)}
      >
        {/* Dark overlay */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0 transition-all duration-300 hover:bg-black/50" />
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center p-4 gap-3">
          <span className="text-gray-200 font-semibold text-lg">{cleanName}</span>
          {isUnsupported && (
            <span className="text-xs text-red-300 bg-red-900/30 px-2 py-0.5 rounded">
              Unsupported
            </span>
          )}
          {isBeta && (
            <span className="text-xs text-yellow-300 bg-yellow-900/30 px-2 py-0.5 rounded">
              Beta
            </span>
          )}
          {isComingSoon ? (
            <button
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 rounded-lg font-medium text-sm bg-yellow-600/50 text-yellow-200 cursor-not-allowed"
            >
              Coming Soon
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVersion(version);
              }}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                selectedVersion === version
                  ? "bg-blue-500 text-white shadow-[0_0_15px_#3b82f6]"
                  : "bg-[#2a2f38] text-gray-300 hover:bg-[#3a3f48]"
              }`}
            >
              Select
            </button>
          )}
        </div>
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
      
      {/* Build Comment */}
      {BUILD_COMMENTS[selectedTech]?.[selectedVersion] && (
        <div className="mt-4 max-w-2xl mx-auto">
          <p className="text-sm text-gray-300 bg-gray-800/50 border border-gray-700 px-4 py-3 rounded-lg">
            💬 <span className="font-semibold text-blue-400">Note:</span> {BUILD_COMMENTS[selectedTech][selectedVersion]}
          </p>
        </div>
      )}
    </div>

    {/* Conversion Tool Info */}
    <p className="text-center text-sm text-gray-400">
      To convert these <span className="text-blue-400">.zip</span> packs into 
      <span className="text-green-400"> .mrpack </span> files for use in Modrinth, 
      use this tool:{" "}
      <a
        href="/#/converter"
        target=""
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 underline transition-colors"
      >
        OptiArk Converter
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
    © 2026 Made with ❤️ by Arc360 :3{" "}
    <a
      href="https://github.com/arc360alt/OptiArk-New"
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

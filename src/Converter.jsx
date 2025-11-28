import React, { useState } from "react";

const DOWNLOAD_LINKS = {
  windows: "https://github.com/arc360alt/OptiArk/releases/download/conv0.2.0/converter-windows.zip",
  linux: "https://github.com/arc360alt/OptiArk/releases/download/conv0.2.0/converter-linux.tar.gz",
  macos: "https://github.com/arc360alt/OptiArk/releases/download/conv0.2.0/converter-macos.tar.gz"
};

export default function ConverterDownload() {
  const [downloading, setDownloading] = useState(null);

  const handleDownload = (platform) => {
    setDownloading(platform);
    window.open(DOWNLOAD_LINKS[platform], "_blank");
    setTimeout(() => setDownloading(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070b12] to-[#0a0e16] text-white font-sans overflow-x-hidden">
      {/* Topbar */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 px-6 py-2">
          <a href="/#/" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">Home</a>
          <a href="/#/news" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">News</a>
          <a href="/#/adventure" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">Adventure Edition</a>
          <span className="text-white px-3 py-1 rounded bg-blue-700/30 font-semibold">Converter</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center p-8 min-h-screen pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent animate-pulse-slow drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            OptiArk Converter
          </h1>
          
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Convert MultiMC/Prism Launcher instances to Modrinth MRPack format
          </p>
          
          <p className="text-sm text-gray-400 mb-12 max-w-xl mx-auto">
            Easily convert your OptiArk .zip files into .mrpack files for use with Modrinth Launcher. 
            Simple drag-and-drop interface with automatic mod detection.
          </p>

          {/* Download Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Windows */}
            <div className="bg-[#151b25] rounded-2xl shadow-lg p-8 hover:scale-[1.03] hover:shadow-[0_0_25px_#3b82f6aa] transition-all duration-300 border border-gray-800">
              <div className="text-6xl mb-4">🪟</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Windows</h3>
              <p className="text-gray-400 text-sm mb-6">
                Windows 10/11 (64-bit)
              </p>
              <button
                onClick={() => handleDownload("windows")}
                disabled={downloading === "windows"}
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  downloading === "windows"
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#60a5fa]"
                }`}
              >
                {downloading === "windows" ? "Downloading..." : "Download"}
              </button>
            </div>

            {/* Linux */}
            <div className="bg-[#151b25] rounded-2xl shadow-lg p-8 hover:scale-[1.03] hover:shadow-[0_0_25px_#a855f7aa] transition-all duration-300 border border-gray-800">
              <div className="text-6xl mb-4">🐧</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">Linux</h3>
              <p className="text-gray-400 text-sm mb-6">
                Any Distro
              </p>
              <button
                onClick={() => handleDownload("linux")}
                disabled={downloading === "linux"}
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  downloading === "linux"
                    ? "bg-green-600 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_#a855f7] hover:shadow-[0_0_25px_#c084fc]"
                }`}
              >
                {downloading === "linux" ? "Downloading..." : "Download"}
              </button>
            </div>

            {/* macOS */}
            <div className="bg-[#151b25] rounded-2xl shadow-lg p-8 hover:scale-[1.03] hover:shadow-[0_0_25px_#22c55eaa] transition-all duration-300 border border-gray-800">
              <div className="text-6xl mb-4">🍎</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">macOS</h3>
              <p className="text-gray-400 text-sm mb-6">
                macOS 11+ (Intel only)
              </p>
              <button
                onClick={() => handleDownload("macos")}
                disabled={downloading === "macos"}
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  downloading === "macos"
                    ? "bg-green-600 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_15px_#22c55e] hover:shadow-[0_0_25px_#4ade80]"
                }`}
              >
                {downloading === "macos" ? "Downloading..." : "Download"}
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="bg-[#151b25]/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-blue-300 mb-6">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-300">Drag & drop interface</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-300">Automatic mod detection</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-300">Modrinth API integration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-300">Preserves pack configuration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-300">Fast conversion</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-300">Free & open source</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-[#151b25]/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">How to Use</h3>
            <ol className="text-left space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">1.</span>
                <span>Download the converter for your platform above</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">2.</span>
                <span>Extract the archive and run the executable</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">3.</span>
                <span>Drag your OptiArk .zip file into the converter window</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">4.</span>
                <span>Click "Convert to MRPack" and wait for completion</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">5.</span>
                <span>Import the generated .mrpack file into your launcher of choise</span>
              </li>
            </ol>
          </div>

          {/* GitHub Link */}
          <div className="mt-12">
            <a
              href="https://github.com/arc360alt/OptiArk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <span>View on GitHub</span>
              <span>→</span>
            </a>
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

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
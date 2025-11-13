import React from "react";

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070b12] to-[#0a0e16] text-white font-sans">
      {/* Topbar */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 px-6 py-2">
          <a href="/" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">
            Home
          </a>
          <span className="text-white px-3 py-1 rounded bg-blue-700/30 font-semibold">
            News
          </span>
          <a href="/#/adventure" className="text-gray-300 hover:text-white px-3 py-1 rounded transition-colors duration-200">
            Adventure Edition
          </a>
        </div>
      </div>

      {/* Header */}
      <section className="pt-32 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          OptiArk News & Updates
        </h1>
        <p className="text-gray-400 text-lg italic">
          Stay up to date with the latest OptiArk updates and patch notes.
        </p>
      </section>

      {/* Changelog Section */}
      <section id="update-log" className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Update Log
        </h2>
        <p className="text-gray-400 mb-8">
          Current General OptiArk Version: <span className="text-blue-400 font-semibold">1.8</span> (as of 2025-08-06)
        </p>

        <div className="space-y-10">
          {/* Update Entry */}

          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              OPTIARK VULKAN IS BACK{" "}
              <span className="text-gray-400 text-sm">(2025-10-26)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>The developers of Vulkanmod have started releasing betas for 1.21.9 and 1.21.10.</li>
              <li>So yes, soon there will be an OptiArk vulkan 1.21.9 and 1.21.10 release!</li>
              <li>I am unsure about 21.6-21.8 but we will see.</li>
            </ul>
          </div>
          
          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Website Update - Better preformance bars{" "}
              <span className="text-gray-400 text-sm">(2025-10-26)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Update the preformance bars to have a discription attached to them.</li>
              <li>So when you hover over each bar you can get a costom discription on how I tested that one version.</li>
              <li>Smoohter zoom animations on all of the bars.</li>
              <li>Bug Fixes</li>
            </ul>
          </div>

          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Website Update - Better Version Picker{" "}
              <span className="text-gray-400 text-sm">(2025-10-25)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>All versions now have their own backround (Even on the Adventure Edition page)</li>
              <li>It is now easier to click the versions, as now the entire box is clickable</li>
              <li>Smoohter zoom animations on all of the version buttons.</li>
              <li>Bug Fixes</li>
            </ul>
          </div>

          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Pack Update – 1.21.9-1.21.10{" "}
              <span className="text-gray-400 text-sm">(2025-10-25)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Adds 1.21.9 and 1.21.10 compatibility</li>
              <li>Minecrafts next update may take a while for me to update to, becuase it includes alot of new rendering changes as revealed recently by Mojang.</li>
              <li>By the message above i mean 1.21.11 or 1.22 or whatever they make the update (mounts of mayhem).</li>
              <li>Benchmarking will start soon</li>
            </ul>
          </div>
          
          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Pack Update – 1.21.8{" "}
              <span className="text-gray-400 text-sm">(2025-09-13)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Adds 1.21.8 compatibility</li>
              <li>
                Note: 1.21.9 Compatibility will come out as soon as a lot of mods
                are supported for it
              </li>
              <li>Benchmarking will start soon</li>
            </ul>
          </div>

          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              OAAE – Update 0.2{" "}
              <span className="text-gray-400 text-sm">(2025-09-14)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Add a bunch of new 3D items</li>
              <li>Re-enable animations and biome colors</li>
              <li>Add a new update UI</li>
              <li>
                Benchmarking will take place as soon as my laptop is repaired
              </li>
              <li>New loading screen warning</li>
              <li>Add a small animation when UI’s are opened</li>
              <li>Pre-loading screen added</li>
            </ul>
          </div>

          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              New Pack – OptiArk Adventure Edition{" "}
              <span className="text-gray-400 text-sm">(2025-08-12)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                A New pack has been added to the lineup! OptiArk Adventure
                Edition
              </li>
              <li>
                This is a 1.21.5-only pack, and it is currently in development,
                so expect bugs
              </li>
              <li>
                This pack is for visuals and gameplay, not performance — expect
                less than optimal performance.
              </li>
              <li>
                Benchmarking will take place as soon as my laptop is repaired.
              </li>
            </ul>
          </div>

          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Pack Update – 1.20.1{" "}
              <span className="text-gray-400 text-sm">(2025-08-06)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                1.20.1 Nividium, Sodium, and VulkanMod have been added to the
                lineup
              </li>
              <li>
                These versions are automatically discontinued — they’re just for
                compatibility with mods
              </li>
              <li>
                All packs have now been switched to a .zip format (just import
                into Modrinth, PrismLauncher, etc.)
              </li>
              <li>
                Benchmarking will take place as soon as my laptop is repaired
              </li>
            </ul>
          </div>

          <div className="bg-[#0f131c]/60 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-700/40 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Pack Wide Update – MEGAUPDATE{" "}
              <span className="text-gray-400 text-sm">(2025-07-14)</span>
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>All packs updated with all supported versions</li>
              <li>
                Greatly improves performance on lower-end hardware (tested by
                HexyMC)
              </li>
              <li>
                Removes a bunch of mods that were impacting performance badly
              </li>
              <li>New and better version/naming scheme.</li>
            </ul>
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

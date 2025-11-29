import React from 'react'

const Hero = () => {
  return (
        <section className="max-w-6xl mt-20 mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#0A2540]">
          ZenPods X — Next-Gen Wireless Earbuds
        </h1>
        <p className="mt-6 text-lg text-[#0A2540]/70 max-w-xl">
          Experience studio-grade sound, 60-hour battery life, and intelligent noise control.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a href="#pricing" className="inline-block text-center px-6 py-3 rounded-lg bg-[#1976D2] text-white font-medium hover:bg-[#0D47A1] shadow">Pre-order Now</a>

          <a href="#features" className="inline-block text-center px-6 py-3 rounded-lg border border-[#BBDEFB] text-[#0A2540]">Explore Features</a>
        </div>

        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-[#0A2540]/70">
          <li><strong className="text-[#1976D2]">Hi-Fi Audio</strong> — Balanced, neutral tuning</li>
          <li><strong className="text-[#1976D2]">60-Hour Battery</strong> — Multi-day use</li>
          <li><strong className="text-[#1976D2]">Adaptive ANC</strong> — Block noise smartly</li>
        </ul>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl p-8 shadow-blue-100 shadow-lg">
          <img src="https://m.media-amazon.com/images/I/41Sz91deqoL._SX522_.jpg" className="w-full h-auto rounded-xl" />
          <div className="mt-4 text-center">
            <div className="text-xs text-[#0A2540]/50">Model</div>
            <div className="font-semibold">ZenPods X • Carbon Silver</div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Hero

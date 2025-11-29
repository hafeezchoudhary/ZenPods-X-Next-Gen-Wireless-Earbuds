import React from 'react'

const Features = () => {
  const items = [
    {
      title: "Immersive Sound",
      desc: "Custom 12mm drivers tuned for clarity, deep bass and crisp mids.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M12 3v18" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
    },
    {
      title: "Adaptive ANC",
      desc: "Automatically adjusts noise cancellation to your environment.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
    },
    {
      title: "Ultra Battery",
      desc: "Up to 60 hours total with the charging case and fast USB-C charging.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
    },
  ];

  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Features</h2>
        <p className="mt-3 text-[#0A2540]/70 max-w-2xl mx-auto">
          Everything designed around exceptional audio quality and battery life.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {["Immersive Sound", "Adaptive ANC", "Ultra Battery"].map((title) => (
          <div key={title} className="border border-[#BBDEFB] bg-[#F5FBFF] rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-[#1976D2]">{title}</h3>
            <p className="mt-2 text-sm text-[#0A2540]/70">
              {items.find(item => item.title === title)?.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features

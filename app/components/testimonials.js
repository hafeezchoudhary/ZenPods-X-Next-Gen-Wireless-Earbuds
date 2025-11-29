import React from 'react'

const Testimonials = () => {
  const reviews = [
    { name: "Aisha R.", text: "Phenomenal sound and the ANC is surprisingly good for the price.", role: "Product Designer" },
    { name: "Rohit S.", text: "Battery life lasts all week of commuting. Very impressed.", role: "Developer" },
    { name: "Priya M.", text: "Comfortable for long sessions and the case is very pocketable.", role: "Photographer" },
  ];

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-20 rounded-t-3xl">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">What people say</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Aisha", "Rohit", "Priya"].map((name) => (
          <div key={name} className="bg-[#F5FBFF] p-6 rounded-xl shadow border border-[#BBDEFB]">
            <div className="font-semibold text-[#1976D2]">{name}</div>
            <p className="text-sm mt-2 text-[#0A2540]/70">
              “Amazing clarity and bass! Battery life is unbelievable.”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials

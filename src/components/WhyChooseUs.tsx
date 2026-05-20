'use client'

export default function WhyChooseUs() {
  const features = [
    {
      icon: '🚢',
      title: 'Cruise Port Location',
      text: 'Located directly by the harbor for easy access from cruise ships.',
    },
    {
      icon: '♿',
      title: 'Accessible Travel',
      text: 'Perfect for seniors and travelers with limited mobility.',
    },
    {
      icon: '❤️',
      title: 'Family-Run Service',
      text: 'Friendly local team dedicated to making your trip unforgettable.',
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Why Choose Us</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Designed for comfort, accessibility, and unforgettable experiences in Akureyri.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-semibold mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

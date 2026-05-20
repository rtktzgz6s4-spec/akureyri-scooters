export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Akureyri Scooters
        </h1>

        <p className="mt-6 text-2xl">
          Premium scooter rentals in Akureyri
        </p>

        <a
          href="tel:+3548988100"
          className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-xl"
        >
          Call Now
        </a>
      </div>
    </main>
  )
}

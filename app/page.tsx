export default function AkileWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full shadow-lg">
            <img
              src="/images/logo.png"
              alt="AKILE Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
        <span className="text-xl font-bold tracking-[0.3em]">AKILE</span>
      </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#collection" className="hover:text-white transition-colors">
              Collection
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#community" className="hover:text-white transition-colors">
              Community
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block border border-neutral-700 px-5 py-2 rounded-xl hover:bg-neutral-900 transition-colors">
              Sign In
            </button>

            <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition-transform">
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black opacity-80"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-[0.4em]">
              AKILE
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-neutral-300 mb-4 tracking-wide">
            BUILT DIFFERENT.
          </p>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Premium South African streetwear inspired by ambition, movement,
            and modern culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#collection">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-2xl shadow-white/10">
                Shop Collection
              </button>
            </a>

            <a href="#about">
              <button className="border border-neutral-700 px-8 py-4 rounded-2xl hover:bg-neutral-900 transition-colors">
                Explore Brand
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section id="about" className="py-24 px-6 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4">
              THE AKILE AESTHETIC
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Minimal. Bold. Premium.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              AKILE represents confidence, ambition, and individuality.
              Designed for people who refuse to settle for ordinary.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["Oversized", "Streetwear", "Luxury", "Johannesburg"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-neutral-900 rounded-3xl h-52 flex items-center justify-center text-neutral-500"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section
        id="collection"
        className="py-24 px-6 border-b border-neutral-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-sm tracking-[0.3em] text-neutral-500 mb-2">
                COLLECTION
              </p>
              <h2 className="text-4xl font-bold">
                AKILE Essentials Vol. 1
              </h2>
            </div>

            <button className="border border-neutral-700 px-6 py-3 rounded-xl hover:bg-neutral-900 transition-colors hidden md:block">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Heavyweight Tee",
                placeholder: "Oversized Tee",
                price: "R750",
                description: "260 GSM heavyweight cotton.",
              },
              {
                name: "Golf Club Tee",
                placeholder: "Golf Tee",
                price: "R920",
                description: "Minimal luxury streetwear.",
              },
              {
                name: "Graphic Series",
                placeholder: "Graphic Tee",
                price: "R850",
                description: "Bold graphical identity.",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-96 bg-neutral-900 flex items-center justify-center text-neutral-600 text-xl">
                  {product.placeholder}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-semibold">
                      {product.name}
                    </h3>
                    <span className="text-neutral-400">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-neutral-500 text-sm mb-4">
                    {product.description}
                  </p>

                  <button className="w-full bg-white text-black py-3 rounded-xl font-medium hover:opacity-90 hover:scale-[1.02] transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 px-6 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4">
            JOHANNESBURG · SOUTH AFRICA
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Fashion inspired by ambition, movement, and culture.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Premium Quality",
                text: "Heavyweight fabrics, premium construction, and durable materials.",
              },
              {
                title: "Modern Aesthetic",
                text: "Minimal design language with bold visual identity.",
              },
              {
                title: "Built Different",
                text: "Designed for people who refuse ordinary and move with purpose.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-neutral-900 rounded-3xl p-10 text-left"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="community" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center bg-neutral-950 border border-neutral-800 rounded-[2rem] p-12">
          <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4">
            JOIN THE COMMUNITY
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Be the first to access future drops.
          </h2>

          <p className="text-neutral-400 mb-8">
            Limited releases. Exclusive collections. Premium streetwear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black border border-neutral-700 rounded-2xl px-6 py-4 outline-none"
            />

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-neutral-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-[0.3em] mb-2">
              AKILE
            </h3>
            <p className="text-neutral-500 text-sm">Built Different.</p>
          </div>

          <div className="flex gap-6 text-neutral-400 text-sm flex-wrap justify-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>

            <a
              href="mailto:akile.clothing@gmail.co.za"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
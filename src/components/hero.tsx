export default function Hero() {
  return (
    <>
      <section
        className="research-hero relative flex min-h-[610px] items-end overflow-hidden bg-[#19352d] sm:min-h-[690px]"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(12, 31, 25, .92) 0%, rgba(12, 31, 25, .78) 44%, rgba(12, 31, 25, .1) 100%), url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2200&q=85')" }}
      >
        <div className="reveal-in relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#d5e88c]">Ghana-based · Technology for connection and better health</p>
          <h1 className="display-type max-w-3xl text-5xl leading-[1.06] text-white sm:text-6xl lg:text-7xl">
            Stronger networks. Better health.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Eloi builds dependable networking solutions and genomics technology for African-led health research, starting here in Ghana.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#networks" className="inline-flex items-center gap-3 bg-[#cbe36b] px-5 py-3 text-sm font-bold text-[#17231d] transition hover:bg-white">
              Network solutions <span aria-hidden="true">↓</span>
            </a>
            <a href="#research" className="inline-flex items-center gap-3 border border-white/65 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              Genomics technology <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/30 pt-5 text-xs font-semibold uppercase tracking-[0.1em] text-white/75">
            <span>Connectivity</span><span>Infrastructure</span><span>Genomics</span><span>Health data</span>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f4f6f1] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div className="md:col-span-2">
            <p className="section-kicker mb-4">Two connected specialties</p>
            <h2 className="display-type max-w-3xl text-4xl leading-tight text-[#17231d] sm:text-5xl">Technology that connects. Research that moves us forward.</h2>
          </div>
          <a href="#networks" className="group border-t-2 border-[#164b3b] pt-5 transition-colors hover:border-[#e96f50]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#164b3b]">01 / Networks</p>
            <h3 className="display-type mb-3 text-3xl text-[#17231d]">Reliable connections for a connected Africa.</h3>
            <p className="mb-5 leading-7 text-[#647169]">From network infrastructure to secure connectivity, we help organizations build the digital foundations they rely on.</p>
            <span className="text-sm font-bold text-[#164b3b]">Explore networking <span aria-hidden="true">↗</span></span>
          </a>
          <a href="#research" className="group border-t-2 border-[#e96f50] pt-5 transition-colors hover:border-[#164b3b]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#c9553b]">02 / Genomics</p>
            <h3 className="display-type mb-3 text-3xl text-[#17231d]">Genomics technology for African health.</h3>
            <p className="mb-5 leading-7 text-[#647169]">We bring genomic data, bioinformatics and local research expertise together to make African-led discovery possible.</p>
            <span className="text-sm font-bold text-[#164b3b]">Explore genomics <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </section>
    </>
  );
}

export default function Hero() {
  return (
    <>
      <section
        className="research-hero relative flex min-h-[610px] items-end overflow-hidden bg-[#19352d] sm:min-h-[690px]"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(12, 31, 25, .92) 0%, rgba(12, 31, 25, .78) 44%, rgba(12, 31, 25, .1) 100%), url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2200&q=85')" }}
      >
        <div className="reveal-in relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#d5e88c]">Genomics · Bioinformatics · Evidence-led research</p>
          <h1 className="display-type max-w-3xl text-5xl leading-[1.06] text-white sm:text-6xl lg:text-7xl">
            Answers to biology&apos;s hardest questions.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            We work with large, complex genomic datasets to produce reliable, useful answers grounded in evidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#about" className="inline-flex items-center gap-3 bg-[#cbe36b] px-5 py-3 text-sm font-bold text-[#17231d] transition hover:bg-white">
              Our approach <span aria-hidden="true">↓</span>
            </a>
            <a href="https://rna.eloisystems.com" className="inline-flex items-center gap-3 border border-white/65 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              Explore our Single Cell RNA analysis engine <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/30 pt-5 text-xs font-semibold uppercase tracking-[0.1em] text-white/75">
            <span>Large-scale data</span><span>Reproducible analysis</span><span>Biological insight</span><span>Evidence you can trust</span>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f4f6f1] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div className="md:col-span-2">
            <p className="section-kicker mb-4">From data to biological evidence</p>
            <h2 className="display-type max-w-3xl text-4xl leading-tight text-[#17231d] sm:text-5xl">Rigorous genomics, built around the question.</h2>
          </div>
          <a href="#research" className="group border-t-2 border-[#e96f50] pt-5 transition-colors hover:border-[#164b3b]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#c9553b]">01 / Genomics</p>
            <h3 className="display-type mb-3 text-3xl text-[#17231d]">Tackle hard biological questions.</h3>
            <p className="mb-5 leading-7 text-[#647169]">We bring bioinformatics, genomic analysis and biological context to complex datasets, with findings grounded in transparent, reproducible evidence.</p>
            <span className="text-sm font-bold text-[#164b3b]">Explore genomic capabilities <span aria-hidden="true">↗</span></span>
          </a>
          <a href="#networks" className="group border-t-2 border-[#164b3b] pt-5 transition-colors hover:border-[#e96f50]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#164b3b]">02 / Technical foundations</p>
            <h3 className="display-type mb-3 text-3xl text-[#17231d]">Reliable systems for ambitious research.</h3>
            <p className="mb-5 leading-7 text-[#647169]">We provide the connectivity and infrastructure organizations depend on, alongside tools that make large-scale genomic work possible.</p>
            <span className="text-sm font-bold text-[#164b3b]">Explore network solutions <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </section>
    </>
  );
}

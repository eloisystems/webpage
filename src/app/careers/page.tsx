export default function Careers() {
  return (
    <section id="careers" className="bg-[#e8eee5] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div>
          <p className="section-kicker mb-4">Our approach</p>
          <h2 className="display-type max-w-2xl text-4xl leading-tight text-[#17231d] sm:text-5xl">From complex data to confident insight.</h2>
        </div>
        <div>
          <p className="mb-7 text-lg leading-8 text-[#46554b]">We guide genomic analysis from sophisticated data to biological insight. By combining rigorous computational methods with biological context, we make complex results clearer, more useful and grounded in evidence.</p>
          <a href="#research" className="inline-flex items-center gap-3 bg-[#e96f50] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c9553b]">Explore genomic analysis <span aria-hidden="true">↗</span></a>
          <p className="mt-5 text-sm text-[#647169]">Interested in future roles? Introduce yourself and tell us what you hope to contribute.</p>
        </div>
      </div>
    </section>
  );
}

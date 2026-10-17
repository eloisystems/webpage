export default function Careers() {
  return (
    <section id="careers" className="bg-[#e8eee5] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div>
          <p className="section-kicker mb-4">Join the work</p>
          <h2 className="display-type max-w-2xl text-4xl leading-tight text-[#17231d] sm:text-5xl">Good science is a team effort.</h2>
        </div>
        <div>
          <p className="mb-7 text-lg leading-8 text-[#46554b]">We welcome conversations with organizations looking for network solutions, and with researchers, clinicians, universities and health institutions advancing African-led discovery.</p>
          <a href="mailto:info@eloisystems.com?subject=Collaboration%20inquiry" className="inline-flex items-center gap-3 bg-[#e96f50] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c9553b]">Explore a collaboration <span aria-hidden="true">↗</span></a>
          <p className="mt-5 text-sm text-[#647169]">Interested in future roles? Introduce yourself and tell us what you hope to contribute.</p>
        </div>
      </div>
    </section>
  );
}

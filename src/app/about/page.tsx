export default function About() {
  return (
    <section id="about" className="bg-[#f4f6f1] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="section-kicker mb-4">About Eloi Systems</p>
          <h1 className="display-type text-5xl leading-tight text-[#17231d] sm:text-6xl">Building connections. Advancing health.</h1>
          <p className="mt-6 text-lg leading-8 text-[#46554b]">Eloi works across networking solutions and genomics technology, strengthening digital infrastructure and enabling health discovery through data and research.</p>
        </div>

        <div className="grid gap-10 border-t border-[#dce2d9] pt-10 md:grid-cols-3">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#e96f50]">Our mission</p>
            <h2 className="display-type mb-4 text-2xl">Connect essential systems.</h2>
            <p className="leading-7 text-[#647169]">Design dependable networking solutions that help organizations connect people, sites and services.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#e96f50]">Our vision</p>
            <h2 className="display-type mb-4 text-2xl">Put genomics to work for health.</h2>
            <p className="leading-7 text-[#647169]">Develop genomic data and computational foundations that help researchers investigate important health questions.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#e96f50]">Our principles</p>
            <h2 className="display-type mb-4 text-2xl">Trust, rigor and reciprocity.</h2>
            <p className="leading-7 text-[#647169]">We believe in secure systems, ethical research and partnerships built around shared goals and lasting research capacity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

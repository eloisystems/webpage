export default function Contact() {
  return (
    <main className="bg-[#f4f6f1] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker mb-4">Contact Eloi</p>
        <h1 className="display-type max-w-2xl text-4xl leading-tight text-[#17231d] sm:text-5xl">Networks, genomics, or collaboration.</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#647169]">Reach our team directly by email.</p>
        <a href="mailto:info@eloisystems.com" className="mt-7 inline-flex items-center gap-3 bg-[#164b3b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#103a2e]">
          info@eloisystems.com <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  );
}
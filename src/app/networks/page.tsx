export default function Networks() {
  return (
    <section id="networks" className="bg-[#164b3b] px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto mb-10 max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d5e88c]">Network solutions</p>
        <h2 className="display-type max-w-3xl text-4xl leading-tight sm:text-5xl">The digital foundations that keep essential work connected.</h2>
      </div>
      <div className="mx-auto grid max-w-7xl gap-9 sm:grid-cols-3 sm:gap-12">
        <div className="border-t border-white/35 pt-5">
          <p className="mb-4 text-sm font-bold text-[#d5e88c]">01 / Infrastructure</p>
          <h3 className="display-type mb-3 text-2xl">Networks built around how you work.</h3>
          <p className="leading-7 text-white/75">Plan and strengthen wired and wireless networks for the needs of organizations, campuses and institutions.</p>
        </div>
        <div className="border-t border-white/35 pt-5">
          <p className="mb-4 text-sm font-bold text-[#d5e88c]">02 / Secure connectivity</p>
          <h3 className="display-type mb-3 text-2xl">Dependable links between people and systems.</h3>
          <p className="leading-7 text-white/75">Connect teams, sites and services with security and reliability designed into the network.</p>
        </div>
        <div className="border-t border-white/35 pt-5">
          <p className="mb-4 text-sm font-bold text-[#d5e88c]">03 / Systems support</p>
          <h3 className="display-type mb-3 text-2xl">Technology that stays useful.</h3>
          <p className="leading-7 text-white/75">Practical integration and ongoing support help keep critical infrastructure working as needs change.</p>
        </div>
      </div>
    </section>
  );
}
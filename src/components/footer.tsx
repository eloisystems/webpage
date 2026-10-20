import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17231d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 border-b border-white/20 pb-10 sm:grid-cols-2">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
              <span className="text-lg font-bold">Eloi <span className="font-normal text-white/65">Systems</span></span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-white/65">We turn complex genomic data into reliable, useful answers to biological questions, grounded in evidence.</p>
          </div>
          <div className="sm:justify-self-end">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d5e88c]">Explore</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
              <Link href="#networks" className="hover:text-white">Networks</Link>
              <Link href="#research" className="hover:text-white">Genomics</Link>
              <Link href="#about" className="hover:text-white">Our approach</Link>
              <Link href="#careers" className="hover:text-white">Collaborate</Link>
              <a href="mailto:info@eloisystems.com" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>&copy; {currentYear} Eloi Systems. All rights reserved.</p>
          <p>Connected for impact</p>
        </div>
      </div>
    </footer>
  );
}

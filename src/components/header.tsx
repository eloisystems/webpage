import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dce2d9] bg-[#f4f6f1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Eloi Networks and Health home">
          <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
          <span className="text-lg font-bold tracking-tight text-[#17231d]">Eloi <span className="font-medium text-[#647169]">Systems</span></span>
        </Link>

        <nav aria-label="Main navigation" className="order-3 flex w-full items-center justify-between gap-4 overflow-x-auto pb-1 text-sm font-medium text-[#39483f] sm:order-none sm:w-auto sm:justify-start sm:gap-7 sm:pb-0">
          <Link href="#networks" className="whitespace-nowrap transition hover:text-[#e96f50]">Networks</Link>
          <Link href="#research" className="whitespace-nowrap transition hover:text-[#e96f50]">Genomics</Link>
          <Link href="#about" className="whitespace-nowrap transition hover:text-[#e96f50]">Our approach</Link>
          <Link href="#careers" className="whitespace-nowrap transition hover:text-[#e96f50]">Collaborate</Link>
        </nav>

        <a href="mailto:info@eloisystems.com" className="rounded-sm bg-[#164b3b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#103a2e]">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

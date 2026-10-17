export default function Features() {
  const researchAreas = [
    {
      number: '01',
      title: 'Genomic data infrastructure',
      description: 'Build the data foundations for secure, well-governed genomic research led by African institutions.',
    },
    {
      number: '02',
      title: 'Bioinformatics & analysis',
      description: 'Apply computational tools and reproducible workflows to turn sequencing data into useful research evidence.',
    },
    {
      number: '03',
      title: 'Pathogen genomics',
      description: 'Use genomic approaches to support research on malaria, tuberculosis, antimicrobial resistance and emerging infections.',
    },
    {
      number: '04',
      title: 'African population genomics',
      description: 'Support more representative genomic research and better understanding of the genetic diversity of African populations.',
    },
    {
      number: '05',
      title: 'Precision health research',
      description: 'Explore how genomic evidence can contribute to care and health insights relevant to African communities.',
    },
    {
      number: '06',
      title: 'Responsible data stewardship',
      description: 'Keep privacy, local governance and equitable participation central to genomic data and technology.',
    },
  ];

  return (
    <section id="research" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker mb-4">Genomics technology / Health solutions</p>
            <h2 className="display-type max-w-2xl text-4xl leading-tight text-[#17231d] sm:text-5xl">Genomics tools for health questions that matter in Africa.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#647169]">We focus on the data infrastructure, computational methods and African-led partnerships that make genomic research more useful and representative.</p>
        </div>

        <div className="grid border-l border-t border-[#dce2d9] sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <div
              key={area.number}
              className="min-h-56 border-b border-r border-[#dce2d9] p-6 transition-colors hover:bg-[#f4f6f1] sm:p-8"
            >
              <p className="mb-8 text-xs font-bold tracking-[0.12em] text-[#e96f50]">{area.number} / AREA</p>
              <h3 className="mb-3 text-xl font-bold text-[#17231d]">
                {area.title}
              </h3>
              <p className="leading-7 text-[#647169]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

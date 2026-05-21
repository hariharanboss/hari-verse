import SectionWrapper from "./SectionWrapper";

const education = [
  {
    period: "Present",
    title: "Bachelor of Technology",
    school: "Computer Science & Engineering",
    description:
      "Pursuing a degree in Computer Science, focusing on software development, algorithms, and system design.",
    status: "Ongoing",
  },
  {
    period: "2023",
    title: "Higher Secondary Education",
    school: "HSC",
    description:
      "Completed higher secondary education with a focus on Mathematics and Computer Science.",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            EDUCATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            The foundation that shaped my technical expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {education.map((item, index) => (
            <div key={index} className="relative pl-20 pb-16 last:pb-0">
              <div className="absolute left-4 top-1 w-9 h-9 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1">{item.title}</h3>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-light border border-primary/20 whitespace-nowrap">
                    {item.status}
                  </span>
                </div>
                <p className="text-white/70 font-medium mb-2">{item.school}</p>
                <p className="text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

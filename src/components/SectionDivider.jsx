export default function SectionDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden -my-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-3">
        <span className="block w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <span className="block w-1.5 h-1.5 rounded-full bg-primary/40" />
        <span className="block w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </div>
  );
}

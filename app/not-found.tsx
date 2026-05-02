import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="relative bg-hero-night min-h-[80vh] flex items-center justify-center px-6 md:px-10 pt-[120px] pb-20">
      <div className="max-w-[700px] text-center text-white">
        <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-5">
          404
        </p>
        <h1 className="font-display font-black leading-[1.1] text-[clamp(2.5rem,7vw,5rem)] mb-6">
          The lights are out <span className="text-gold-light italic">on this page.</span>
        </h1>
        <p className="text-white/75 leading-relaxed mb-9">
          We couldn’t find what you were looking for. Let’s get you back to a
          page that glows.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="red">
            Back Home
          </Button>
          <Button href="/services" variant="outline-white">
            See Services
          </Button>
        </div>
      </div>
    </section>
  );
}

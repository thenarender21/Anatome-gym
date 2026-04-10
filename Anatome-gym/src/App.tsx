import { useEffect, useState } from 'react';
import {
  Dumbbell,
  Menu,
  X,
  ArrowRight,
  Star,
} from 'lucide-react';

const sections = [
  { id: 'social-proof', label: 'Reviews' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why Us' },
  { id: 'pricing', label: 'Memberships' },
  { id: 'contact', label: 'Contact' },
] as const;

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = 88;
  const bodyTop = document.body.getBoundingClientRect().top;
  const elTop = el.getBoundingClientRect().top;
  const target = elTop - bodyTop - offset;

  window.scrollTo({ top: target, behavior: 'smooth' });
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      let currentId = '';
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentId = s.id;
        }
      });
      setActiveSection(currentId);
    };

    const reveal = () => {
      const items = document.querySelectorAll<HTMLElement>('[data-animate="fade-up"]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      items.forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const cleanupReveal = reveal();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cleanupReveal();
    };
  }, []);

  const brandNumber = '+91 9867338006';

  return (
    <div className="min-h-screen bg-background text-ink">
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink/5">
              <Dumbbell className="h-5 w-5 text-accentGold" />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-ink/45">
                Anatomé
              </span>
              <span className="text-sm font-semibold tracking-wide">Premium Fitness Studio</span>
            </div>
          </button>

          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/60 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToSection(s.id)}
                className={`transition-colors hover:text-ink ${
                  activeSection === s.id ? 'text-accentGold' : ''
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/80 shadow-sm transition hover:border-accentGold/60 hover:shadow"
            >
              Book Free Trial
            </button>
            <a
              href={`tel:${brandNumber.replace(/\\s/g, '')}`}
              className="flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-ink/90"
            >
              Join Now
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white p-2 text-ink shadow-sm md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-ink/10 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/70">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(s.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-full px-2 py-2 text-left transition-colors hover:text-ink ${
                    activeSection === s.id ? 'text-accentGold' : ''
                  }`}
                >
                  {s.label}
                  {activeSection === s.id && (
                    <span className="h-1 w-6 rounded-full bg-accentGold/80" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(247,247,247,0.98)), url('https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,74,0.16),_transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-white/35" />

          <div className="relative z-10 mt-20 flex w-full justify-center px-4 pb-16 pt-8 sm:px-6 lg:mt-24 lg:pb-24 lg:pt-16">
            <div className="w-full max-w-3xl text-center" data-animate="fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ink/55">
                Thane • India
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-[3.6rem] md:leading-[1.02]">
                Train Like a Pro.
                <span className="mt-2 block text-shadow-glow">Transform Your Body.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink/65">
                Premium coaching, curated training, and a calm space designed for results—without the crowd.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={`tel:${brandNumber.replace(/\\s/g, '')}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:bg-ink/90 sm:w-auto"
                >
                  Join Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink/80 shadow-sm transition hover:border-accentGold/60 hover:shadow sm:w-auto"
                >
                  Book Free Trial
                </button>
              </div>

              <div className="mt-10 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-surface/90 px-6 py-5 shadow-sm ring-1 ring-ink/5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ink/50">
                    Rating
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className="h-4 w-4 fill-accentGold text-accentGold" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-ink">4.9</p>
                    <p className="text-xs text-ink/55">(57 reviews)</p>
                  </div>
                  <p className="mt-3 text-sm text-ink/65">
                    “Clean, premium, and results-driven.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section id="social-proof" className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate="fade-up">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
                  Social Proof
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Trusted. Reviewed. Recommended.
                </h2>
                <div className="mt-5 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      {
                        alt: 'Member portrait',
                        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=120&h=120&q=80&facepad=3',
                      },
                      {
                        alt: 'Member portrait',
                        src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=120&h=120&q=80&facepad=3',
                      },
                      {
                        alt: 'Member portrait',
                        src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=120&h=120&q=80&facepad=3',
                      },
                      {
                        alt: 'Member portrait',
                        src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&w=120&h=120&q=80&facepad=3',
                      },
                    ].map((img, idx) => (
                      <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-10 w-10 rounded-full border border-white shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="text-xs text-ink/60">
                    <p className="font-semibold text-ink">500+ members trained</p>
                    <p className="mt-0.5">Real people. Real results.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-ink/5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} className="h-4 w-4 fill-accentGold text-accentGold" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-ink">4.9</p>
                  <p className="text-xs text-ink/55">57 reviews</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3" data-animate="fade-up">
              {[
                { name: 'Rahul', quote: 'Clean space, focused training. Noticeable progress in weeks.' },
                { name: 'Sneha', quote: 'Premium environment. Coaches are precise and professional.' },
                { name: 'Vikram', quote: 'Efficient sessions. No fluff—just structured results.' },
              ].map((t) => (
                <article
                  key={t.name}
                  className="rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-ink/5 transition hover:shadow"
                >
                  <p className="text-sm leading-relaxed text-ink/75">“{t.quote}”</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink/45">
                    {t.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
            <div className="mb-10" data-animate="fade-up">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
                Services
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Everything you need to train well.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-ink/65">
                Simple, premium, and effective.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-animate="fade-up">
              {[
                { title: 'Strength Training', desc: 'Progressive programming, tracked performance.' },
                { title: 'Personal Coaching', desc: 'Technique, intent, accountability.' },
                { title: 'Body Recomposition', desc: 'Lean muscle + conditioning.' },
                { title: 'Functional Fitness', desc: 'Move better. Train smarter.' },
                { title: 'Group Sessions', desc: 'Small groups, high coaching attention.' },
                { title: 'Flexible Timings', desc: 'Designed for real schedules.' },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-ink/5 transition hover:shadow"
                >
                  <p className="text-sm font-semibold text-ink">{s.title}</p>
                  <p className="mt-2 text-sm text-ink/65">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why" className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start" data-animate="fade-up">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
                  Why Choose Us
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Premium training, without the noise.
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-ink/70">
                {[
                  'Structured programming with measurable progress.',
                  'Coach-led sessions with clear technique standards.',
                  'Clean, calm environment—no overcrowding.',
                  'Fast onboarding built for momentum.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accentGold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
            <div className="mb-10" data-animate="fade-up">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
                Pricing Plans
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Simple plans. Clear value.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-ink/65">
                Choose your cadence. Upgrade anytime.
              </p>
            </div>

            <div
              className="grid gap-4 md:grid-cols-3"
              data-animate="fade-up"
            >
              {[
                {
                  name: 'Starter',
                  price: '₹2,999',
                  detail: 'per month',
                  popular: false,
                  items: ['Gym access', 'Group sessions', 'Monthly check-in'],
                },
                {
                  name: 'Best Value',
                  price: '₹7,999',
                  detail: 'per month',
                  popular: true,
                  items: ['Coached training', 'Progress tracking', 'Priority slots'],
                },
                {
                  name: 'Elite',
                  price: '₹24,999',
                  detail: 'per year',
                  popular: false,
                  items: ['Best savings', 'Guest passes', 'VIP support'],
                },
              ].map((tier) => (
                <article
                  key={tier.name}
                  className={`relative flex flex-col justify-between rounded-3xl bg-surface p-6 shadow-sm ring-1 transition hover:shadow ${
                    tier.popular ? 'ring-accentGold/60' : 'ring-ink/5'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-accentGold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accentGold">
                      Best Value
                    </span>
                  )}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-ink/45">{tier.name}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-semibold text-ink">{tier.price}</p>
                      <p className="text-xs text-ink/55">{tier.detail}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-ink/70">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accentGold/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${brandNumber.replace(/\\s/g, '')}`}
                    className={`mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                      tier.popular
                        ? 'bg-ink text-white hover:bg-ink/90'
                        : 'border border-ink/10 bg-white text-ink/80 hover:border-accentGold/60 hover:shadow'
                    }`}
                  >
                    Join / Call
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
            <div
              className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
              data-animate="fade-up"
            >
              <div className="space-y-6">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
                  Contact
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Book a free trial.
                </h2>
                <p className="text-sm text-ink/65">
                  5, Acre, Kothari Warehouse, Unit - A-2/4 & A-2, 4 & 2/5 27, Hill Garden,
                  Kokanipada, Thane West, Thane, Maharashtra 400610.
                </p>
                <div className="space-y-3 text-sm text-ink/70">
                  <p>
                    <span className="text-ink/45">Phone · </span>
                    <a
                      href={`tel:${brandNumber.replace(/\\s/g, '')}`}
                      className="text-accentGold hover:underline"
                    >
                      {brandNumber}
                    </a>
                  </p>
                </div>
                <div className="h-64 overflow-hidden rounded-3xl bg-surface shadow-sm ring-1 ring-ink/5">
                  <iframe
                    title="Anatomé Gym Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8299999999997!2d72.9647!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA1LjkiTiA3MsKwNTcnNTIuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="space-y-6 rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-ink/5">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
                  Get a callback
                </p>
                <p className="text-sm text-ink/65">
                  Leave your details. We’ll call you back shortly.
                </p>
                <form
                  className="space-y-4 text-sm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you. Our team will reach out to you shortly.');
                  }}
                >
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-[0.2em] text-ink/45">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-2xl border border-ink/10 bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-accentGold/70"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-[0.2em] text-ink/45">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full rounded-2xl border border-ink/10 bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-accentGold/70"
                      placeholder="+91 —"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-[0.2em] text-ink/45">
                      Focus
                    </label>
                    <select
                      required
                      className="w-full rounded-2xl border border-ink/10 bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-accentGold/70"
                    >
                      <option value="">Select primary goal</option>
                      <option value="strength">Strength & performance</option>
                      <option value="recomp">Body recomposition</option>
                      <option value="general">General fitness</option>
                      <option value="private">Private training</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-ink/90"
                  >
                    Submit Request
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-10 text-center text-[0.7rem] uppercase tracking-[0.25em] text-ink/40">
        <p>© {new Date().getFullYear()} Anatomé Gym · Premium training, simplified.</p>
      </footer>
    </div>
  );
}

export default App;

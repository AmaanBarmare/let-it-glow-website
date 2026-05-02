'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES } from '@/lib/content';

type Status = 'idle' | 'sending' | 'success' | 'error';

const initial = {
  name: '',
  email: '',
  phone: '',
  address: '',
  town: '',
  service: '',
  message: '',
  // Honeypot — bots fill it, humans don't see it
  website: '',
};

export default function ContactForm() {
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const update = <K extends keyof typeof initial>(
    key: K,
    value: (typeof initial)[K],
  ) => setData((d) => ({ ...d, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.website) return; // honeypot tripped
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong');
      }
      setStatus('success');
      setData(initial);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-card p-10 md:p-14 text-center">
        <CheckCircle2 className="w-14 h-14 text-forest mx-auto mb-5" />
        <h3 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
          Thanks — we’ve got it.
        </h3>
        <p className="text-ink-light leading-relaxed max-w-prose mx-auto">
          We’ll be in touch within one business day to set up your free
          walkthrough. If you have photos of your home you’d like us to look at
          before we visit, you can email them to{' '}
          <a className="text-crimson font-bold" href="mailto:info@letitglowholidaylighting.com">
            info@letitglowholidaylighting.com
          </a>
          .
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-7 text-sm font-bold tracking-[0.12em] uppercase text-crimson hover:text-crimson-dark"
        >
          Send another →
        </button>
      </div>
    );
  }

  const inputCls =
    'w-full bg-cream/60 border border-ink/10 focus:border-crimson focus:ring-2 focus:ring-crimson/20 outline-none rounded-lg px-4 py-3 text-ink placeholder:text-ink-light/60 transition';

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow-card p-7 md:p-10 grid gap-5"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink mb-2">
            Name<span className="text-crimson">*</span>
          </label>
          <input
            required
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputCls}
            placeholder="Jane Smith"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink mb-2">
            Phone<span className="text-crimson">*</span>
          </label>
          <input
            required
            type="tel"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputCls}
            placeholder="(201) 555-0199"
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className="block text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink mb-2">
          Email<span className="text-crimson">*</span>
        </label>
        <input
          required
          type="email"
          value={data.email}
          onChange={(e) => update('email', e.target.value)}
          className={inputCls}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <div className="grid sm:grid-cols-[2fr_1fr] gap-5">
        <div>
          <label className="block text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink mb-2">
            Street Address
          </label>
          <input
            type="text"
            value={data.address}
            onChange={(e) => update('address', e.target.value)}
            className={inputCls}
            placeholder="260 Birchwood Rd"
            autoComplete="street-address"
          />
        </div>
        <div>
          <label className="block text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink mb-2">
            Town
          </label>
          <input
            type="text"
            value={data.town}
            onChange={(e) => update('town', e.target.value)}
            className={inputCls}
            placeholder="New Milford"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <div>
        <label className="block text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink mb-2">
          Service Interest
        </label>
        <select
          value={data.service}
          onChange={(e) => update('service', e.target.value)}
          className={inputCls}
        >
          <option value="">Choose one (optional)</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure">Not sure — help me design it</option>
        </select>
      </div>

      <div>
        <label className="block text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink mb-2">
          Tell us about the project
        </label>
        <textarea
          rows={5}
          value={data.message}
          onChange={(e) => update('message', e.target.value)}
          className={inputCls}
          placeholder="Two-story colonial, full roofline plus a few bushes out front, warm white preferred, want it up by the day after Thanksgiving..."
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </label>
      </div>

      {status === 'error' && (
        <div className="flex gap-3 items-start bg-crimson/5 border border-crimson/20 text-crimson-dark text-sm p-4 rounded-lg">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>
            Something went wrong sending the form. Try again, or email us
            directly at{' '}
            <a className="font-bold underline" href="mailto:info@letitglowholidaylighting.com">
              info@letitglowholidaylighting.com
            </a>
            . {errorMsg && <span className="opacity-70">({errorMsg})</span>}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-crimson hover:bg-crimson-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold tracking-[0.05em] py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-red-glow flex items-center justify-center gap-2 mt-2"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>🎁 Request My Free Quote</>
        )}
      </button>
      <p className="text-xs text-ink-light text-center -mt-1">
        We respond within one business day. No spam, ever.
      </p>
    </form>
  );
}

import { useEffect } from 'react';

/**
 * Per-page <title>, meta description and canonical URL.
 *
 * All eight pages shared the single title set in index.html, so every browser
 * tab read "PrioraOS — Clinical Priority Infrastructure for Public Health
 * Systems" and Google was given one title and one description for the whole
 * site. The canonical was likewise fixed at the homepage, which invites search
 * engines to treat every other page as a duplicate of it.
 *
 * The apex domain is used deliberately: www.prioraos.com has no DNS record.
 */
const ORIGIN = 'https://prioraos.com';

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const ensure = (selector: string, make: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) { el = make(); document.head.appendChild(el); }
      return el;
    };

    const desc = ensure('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }) as HTMLMetaElement;
    const prevDesc = desc.content;
    if (description) desc.content = description;

    const ogTitle = ensure('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    }) as HTMLMetaElement;
    const prevOg = ogTitle.content;
    ogTitle.content = title;

    const canonical = ensure('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }) as HTMLLinkElement;
    const prevCanonical = canonical.href;
    canonical.href = ORIGIN + window.location.pathname;

    return () => {
      document.title = prevTitle;
      if (description) desc.content = prevDesc;
      ogTitle.content = prevOg;
      canonical.href = prevCanonical;
    };
  }, [title, description]);
}

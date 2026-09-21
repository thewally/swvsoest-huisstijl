/* @ds-bundle: {"format":4,"namespace":"SVS","components":[{"name":"Button"},{"name":"Badge"},{"name":"SectionHeading"},{"name":"Hero"},{"name":"NewsCard"},{"name":"MatchCard"},{"name":"SiteHeader"},{"name":"SiteFooter"}]} */
(function () {
  var R = window.React, h = R.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  function Button(p) {
    var variant = p.variant || 'primary', size = p.size || 'md';
    var rest = Object.assign({}, p); delete rest.variant; delete rest.size; delete rest.className; delete rest.children;
    var cls = cx('svs-btn', 'svs-btn-' + variant, 'svs-btn-' + size, p.className);
    return p.href ? h('a', Object.assign({}, rest, { className: cls }), p.children)
                  : h('button', Object.assign({ type: 'button' }, rest, { className: cls }), p.children);
  }

  function Badge(p) {
    return h('span', { className: cx('svs-badge', 'svs-badge-' + (p.tone || 'neutral')) }, p.children);
  }

  function SectionHeading(p) {
    return h('div', { className: 'svs-sechead' },
      h('div', null,
        p.label ? h('p', { className: 'svs-label svs-sechead-label' }, p.label) : null,
        h(p.as || 'h2', { className: 'svs-sechead-title' }, p.title)),
      p.action || null);
  }

  function Hero(p) {
    return h('section', { className: 'svs-hero' },
      h('div', { className: 'svs-hero-inner' },
        h('div', { className: 'svs-hero-text' },
          p.label ? h('p', { className: 'svs-label svs-hero-label' }, p.label) : null,
          h('h1', { className: 'svs-hero-title' }, p.title),
          p.intro ? h('p', { className: 'svs-hero-intro' }, p.intro) : null,
          p.actions ? h('div', { className: 'svs-hero-actions' }, p.actions) : null),
        p.markSrc ? h('img', { className: 'svs-hero-mark', src: p.markSrc, alt: '' }) : null));
  }

  function NewsCard(p) {
    var media = p.image
      ? h('img', { className: 'svs-news-img', src: p.image, alt: p.imageAlt || '' })
      : h('div', { className: 'svs-news-img svs-news-placeholder', 'aria-hidden': 'true' });
    return h('article', { className: 'svs-card svs-news' },
      media,
      h('div', { className: 'svs-news-body' },
        p.label ? h(Badge, { tone: p.tone || 'groen' }, p.label) : null,
        h('h3', { className: 'svs-news-title' },
          p.href ? h('a', { href: p.href, className: 'svs-news-link' }, p.title) : p.title),
        p.excerpt ? h('p', { className: 'svs-news-excerpt' }, p.excerpt) : null,
        p.date ? h('p', { className: 'svs-meta' }, p.date) : null));
  }

  function Team(t, side) {
    return h('div', { className: 'svs-team svs-team-' + side },
      t.logo ? h('img', { className: 'svs-team-logo', src: t.logo, alt: '' }) : h('span', { className: 'svs-team-logo svs-team-nologo', 'aria-hidden': 'true' }),
      h('span', { className: 'svs-team-name' }, t.name));
  }
  function MatchCard(p) {
    var status = p.status || 'gepland';
    var middle = status === 'gespeeld' && p.score
      ? h('span', { className: 'svs-score' }, p.score[0] + '\u2009\u2013\u2009' + p.score[1])
      : h('span', { className: cx('svs-score', 'svs-score-time', status === 'afgelast' && 'svs-score-off') }, p.time || '');
    return h('article', { className: 'svs-card svs-match' },
      h('div', { className: 'svs-match-top' },
        h('span', { className: 'svs-label svs-match-cat' }, p.category || ''),
        status === 'afgelast' ? h(Badge, { tone: 'danger' }, 'Afgelast')
          : status === 'gespeeld' ? h(Badge, { tone: 'neutral' }, 'Uitslag')
          : h('span', { className: 'svs-meta' }, p.date || '')),
      h('div', { className: 'svs-match-row' }, Team(p.home, 'home'), middle, Team(p.away, 'away')),
      p.location ? h('p', { className: 'svs-meta svs-match-loc' }, p.location) : null);
  }

  function SiteHeader(p) {
    var items = p.items || [];
    return h('header', { className: 'svs-header' },
      h('div', { className: 'svs-header-inner' },
        h('a', { className: 'svs-header-brand', href: p.homeHref || '/' },
          p.logoSrc ? h('img', { src: p.logoSrc, alt: '', className: 'svs-header-logo' }) : null,
          h('span', { className: 'svs-header-name' },
            h('span', { className: 'svs-header-sub' }, 'Samenwerking Voetbalverenigingen'),
            h('span', { className: 'svs-header-town' }, 'Soest'))),
        h('nav', { className: 'svs-header-nav', 'aria-label': 'Hoofdmenu' },
          items.map(function (it, i) {
            return h('a', { key: i, href: it.href, className: cx('svs-navlink', it.active && 'is-active'), 'aria-current': it.active ? 'page' : undefined }, it.label);
          })),
        p.cta ? h(Button, { href: p.cta.href, variant: 'primary', size: 'sm' }, p.cta.label) : null));
  }

  function SiteFooter(p) {
    return h('footer', { className: 'svs-footer' },
      h('div', { className: 'svs-footer-inner' },
        h('div', { className: 'svs-footer-brand' },
          p.logoSrc ? h('img', { src: p.logoSrc, alt: 'Samenwerking Voetbalverenigingen Soest', className: 'svs-footer-logo' }) : null,
          p.note ? h('p', { className: 'svs-footer-note' }, p.note) : null),
        h('div', { className: 'svs-footer-clubs' },
          h('p', { className: 'svs-label' }, 'Een samenwerking van'),
          h('div', { className: 'svs-footer-clublist' },
            (p.clubs || []).map(function (c, i) {
              return h('a', { key: i, href: c.href, className: 'svs-footer-club' },
                c.logoSrc ? h('img', { src: c.logoSrc, alt: '' }) : null, h('span', null, c.name));
            })))),
      h('div', { className: 'svs-footer-band', 'aria-hidden': 'true' }));
  }

  var api = { Button: Button, Badge: Badge, SectionHeading: SectionHeading, Hero: Hero, NewsCard: NewsCard, MatchCard: MatchCard, SiteHeader: SiteHeader, SiteFooter: SiteFooter };
  window.SVS = Object.assign(window.SVS || {}, api);
})();

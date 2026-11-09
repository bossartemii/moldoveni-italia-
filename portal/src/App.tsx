import { useMemo, useState } from 'react'

type Lang = 'ro' | 'it' | 'ru'
const copy = {
  ro: {
    eyebrow: 'O comunitate. Două țări. Nenumărate povești.',
    title: 'Departe de casă.\nAproape unii de alții.',
    intro: 'Locul unde moldovenii din Italia se întâlnesc, se ajută și găsesc oportunități. Fără zgomot inutil. Doar oameni și lucruri concrete.',
    join: 'Descoperă comunitatea', market: 'Vezi anunțurile', members: 'Moldoveni conectați', cities: 'Orașe reprezentate', categories: 'Tot ce ai nevoie, într-un singur loc',
    community: 'Comunitatea', communityText: 'Discuții organizate pe orașe și subiecte. Întrebări, recomandări și ajutor real.', openCommunity: 'Intră în comunitate',
    marketTitle: 'Anunțuri și oportunități', marketText: 'Locuri de muncă, chirii, mașini și servicii — de la oameni din comunitate.', allAds: 'Toate anunțurile',
    latest: 'Din comunitate', latestText: 'Subiecte care contează pentru cei de aici.', coming: 'În pregătire',
    footer: 'Construit pentru comunitate. Cu respect pentru fiecare poveste.'
  },
  it: {
    eyebrow: 'Una comunità. Due Paesi. Infinite storie.',
    title: 'Lontani da casa.\nVicini tra noi.',
    intro: 'Il luogo dove i moldavi in Italia si incontrano, si aiutano e trovano opportunità. Meno rumore. Più persone e cose concrete.',
    join: 'Scopri la comunità', market: 'Vedi gli annunci', members: 'Moldavi connessi', cities: 'Città rappresentate', categories: 'Quello che serve, in un unico posto',
    community: 'La comunità', communityText: 'Conversazioni organizzate per città e argomenti. Domande, consigli e aiuto concreto.', openCommunity: 'Entra nella comunità',
    marketTitle: 'Annunci e opportunità', marketText: 'Lavoro, affitti, auto e servizi — dalle persone della comunità.', allAds: 'Tutti gli annunci',
    latest: 'Dalla comunità', latestText: 'Argomenti importanti per chi vive qui.', coming: 'In preparazione',
    footer: 'Costruito per la comunità. Con rispetto per ogni storia.'
  },
  ru: {
    eyebrow: 'Одно сообщество. Две страны. Тысячи историй.',
    title: 'Вдали от дома.\nРядом друг с другом.',
    intro: 'Место, где молдаване в Италии знакомятся, помогают друг другу и находят возможности. Меньше шума — больше дела.',
    join: 'Открыть сообщество', market: 'Смотреть объявления', members: 'Участников', cities: 'Представленных городов', categories: 'Всё необходимое в одном месте',
    community: 'Сообщество', communityText: 'Обсуждения по городам и темам. Вопросы, советы и реальная помощь.', openCommunity: 'Войти в сообщество',
    marketTitle: 'Объявления и возможности', marketText: 'Работа, жильё, автомобили и услуги от участников сообщества.', allAds: 'Все объявления',
    latest: 'Из сообщества', latestText: 'Темы, важные для тех, кто здесь живёт.', coming: 'Скоро',
    footer: 'Создано для сообщества. С уважением к каждой истории.'
  }
} as const

const categories = [
  { icon: '💼', ro: 'Locuri de muncă', it: 'Lavoro', ru: 'Работа', count: 'Job' },
  { icon: '🏠', ro: 'Chirii și case', it: 'Casa e affitti', ru: 'Жильё', count: 'Casa' },
  { icon: '🚗', ro: 'Auto și transport', it: 'Auto e trasporti', ru: 'Авто и транспорт', count: 'Auto' },
  { icon: '🛠️', ro: 'Servicii', it: 'Servizi', ru: 'Услуги', count: 'Pro' },
  { icon: '🛍️', ro: 'Vânzări', it: 'Mercatino', ru: 'Продажа', count: 'Market' },
  { icon: '🤝', ro: 'Ajutor reciproc', it: 'Aiuto reciproco', ru: 'Взаимопомощь', count: 'Help' },
]
const ads = [
  { icon: '💼', tag: 'LAVORO', title: 'Căutăm personal pentru echipă', place: 'Modena · Emilia-Romagna', meta: 'Publicat de comunitate' },
  { icon: '🏠', tag: 'IMOBILIARE', title: 'Cameră disponibilă pentru închiriere', place: 'Bologna · Emilia-Romagna', meta: 'Anunț demonstrativ' },
  { icon: '🚗', tag: 'AUTO', title: 'Mașină second-hand — detalii în anunț', place: 'Verona · Veneto', meta: 'Anunț demonstrativ' },
]
const topics = [
  { icon: '📄', title: 'Documente și acte în Italia', desc: 'Permesso, rezidență, INPS și întrebări practice', replies: 'Discuții utile' },
  { icon: '🇲🇩', title: 'Viața între două țări', desc: 'Experiențe, drumuri, familie și comunitate', replies: 'Povești reale' },
  { icon: '📍', title: 'Moldoveni în Emilia-Romagna', desc: 'Recomandări și întâlniri locale', replies: 'Pe regiuni' },
]

export default function App() {
  const [lang, setLang] = useState<Lang>('ro')
  const [query, setQuery] = useState('')
  const t = copy[lang]
  const filtered = useMemo(() => ads.filter(a => (a.title + a.place + a.tag).toLowerCase().includes(query.toLowerCase())), [query])
  const label = (c: typeof categories[number]) => lang === 'it' ? c.it : lang === 'ru' ? c.ru : c.ro

  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#" aria-label="Moldoveni Italia home"><span className="brand-mark">M</span><span>MOLDOVENI<span className="brand-accent">.ITALIA</span></span></a>
      <nav className="desktop-nav"><a href="#community">{t.community}</a><a href="#market">{t.marketTitle}</a><a href="#topics">{t.latest}</a></nav>
      <div className="header-actions">
        <div className="language-switch" aria-label="Select language">{(['ro','it','ru'] as Lang[]).map(l => <button key={l} className={lang===l?'active':''} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div>
        <a className="login-link" href="#community">Accedi <span>↗</span></a>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" />{t.eyebrow}</div>
          <h1>{t.title.split('\n').map((line,i)=><span key={line}>{line}{i===0&&<br/>}</span>)}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#community">{t.join}<span>↗</span></a><a className="button button-ghost" href="#market">{t.market}</a></div>
          <div className="hero-proof"><div className="avatar-stack"><i>🇲🇩</i><i>🇮🇹</i><i>🤝</i></div><span>Oameni din Italia și Moldova, într-un singur loc.</span></div>
        </div>
        <div className="hero-art" aria-label="Illustration of Moldova and Italy connected">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="map-label label-md"><b>MD</b><span>MOLDOVA</span></div>
          <div className="map-label label-it"><b>IT</b><span>ITALIA</span></div>
          <div className="connection-line" />
          <div className="center-emblem"><span>MD</span><strong>×</strong><span>IT</span></div>
          <div className="floating-note note-top">✦ Comunitate</div><div className="floating-note note-bottom">♡ Ajutor reciproc</div>
          <div className="hero-stamp">ÎMPREUNĂ<br/><strong>ORIUNDE</strong></div>
        </div>
        <div className="hero-bottom"><span>01 / COMUNITATE</span><span>ITALIA ↔ MOLDOVA</span><span>DINAMICĂ. DESCHISĂ. REALĂ.</span></div>
      </section>

      <section className="category-section section-wrap">
        <div className="section-heading"><div><span className="kicker">EXPLOREAZĂ</span><h2>{t.categories}</h2></div><span className="heading-side">ALEGE CE TE INTERESEAZĂ <b>↓</b></span></div>
        <div className="category-grid">{categories.map(c=><a className="category-card" href="#market" key={c.count}><span className="category-icon">{c.icon}</span><span>{label(c)}</span><b>↗</b></a>)}</div>
      </section>

      <section id="community" className="community-section">
        <div className="section-wrap community-layout">
          <div className="community-copy"><span className="kicker kicker-light">MAI MULT DECÂT UN CHAT</span><h2>{t.community}<br/><em>care te apropie.</em></h2><p>{t.communityText}</p><a className="button button-light" href="#topics">{t.openCommunity}<span>↗</span></a><div className="community-foot"><span>01 — DISCUTĂ</span><span>02 — DESCOPERĂ</span><span>03 — AJUTĂ</span></div></div>
          <div className="topic-panel"><div className="panel-head"><span>SUBIECTE POPULARE</span><span className="panel-status"><i/> PREVIEW</span></div>{topics.map((x,i)=><a className="topic-row" href="#topics" key={x.title}><span className="topic-number">0{i+1}</span><span className="topic-icon">{x.icon}</span><span className="topic-text"><b>{x.title}</b><small>{x.desc}</small></span><span className="topic-arrow">↗</span></a>)}<div className="panel-bottom">STRUCTURĂ INSPIRATĂ DE DISCUȚII PE SUBIECTE <span>→</span></div></div>
        </div>
      </section>

      <section id="market" className="market-section section-wrap">
        <div className="section-heading"><div><span className="kicker">OPORTUNITĂȚI REALE</span><h2>{t.marketTitle}</h2><p className="section-description">{t.marketText}</p></div><a className="text-link" href="#market">{t.allAds} ↗</a></div>
        <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Caută locuri de muncă, chirii, servicii..." /><kbd>↵</kbd></label>
        <div className="listing-grid">{filtered.map((a,i)=><article className="listing-card" key={a.title}><div className="listing-visual"><span>{a.icon}</span><small>{a.tag}</small><b>0{i+1}</b></div><div className="listing-info"><span className="listing-meta">{a.meta}</span><h3>{a.title}</h3><p>⌖ {a.place}</p><a href="#market">Detalii <span>↗</span></a></div></article>)}</div>
        {filtered.length===0&&<p className="empty-state">Nu am găsit rezultate. Încearcă alt termen.</p>}
        <p className="demo-note">Previzualizare de produs — anunțurile sunt date demonstrative, nu oferte reale.</p>
      </section>

      <section id="topics" className="join-section section-wrap"><div><span className="kicker">LOCUL TĂU E AICI</span><h2>Nu trebuie să fii<br/><em>singur departe de casă.</em></h2></div><div className="join-right"><p>Construim un loc util, sigur și viu pentru moldovenii de pretutindeni. Comunitatea începe cu oamenii care aleg să participe.</p><a className="button button-primary" href="https://github.com/bossartemii/moldoveni-italia-" target="_blank" rel="noreferrer">Urmărește proiectul pe GitHub ↗</a></div></section>
    </main>
    <footer className="footer"><a className="brand brand-footer" href="#"><span className="brand-mark">M</span><span>MOLDOVENI<span className="brand-accent">.ITALIA</span></span></a><p>{t.footer}</p><span>© 2026 MOLDOVENI ITALIA · MADE WITH ♡</span></footer>
    <div className="mobile-dock"><a href="#community">◉<small>Comunitate</small></a><a href="#market">⌕<small>Anunțuri</small></a><a href="#topics">◎<small>Subiecte</small></a><button onClick={()=>setLang(lang==='ro'?'it':lang==='it'?'ru':'ro')}>文<small>{lang.toUpperCase()}</small></button></div>
  </div>
}
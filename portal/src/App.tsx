import { useMemo, useState } from 'react'

type Lang = 'ro' | 'it' | 'ru'
const copy = {
  ro: {
    navCommunity:'Comunitate', navMarket:'Anunțuri', navTopics:'Discuții', login:'Intră',
    eyebrow:'O comunitate. Două țări. Nenumărate povești.', title:'Departe de casă.\\nAproape unii de alții.',
    intro:'Locul unde moldovenii din Italia se întâlnesc, se ajută și găsesc oportunități. Fără zgomot inutil. Doar oameni și lucruri concrete.',
    join:'Descoperă comunitatea', market:'Vezi anunțurile', proof:'Oameni din Italia și Moldova, într-un singur loc.',
    explore:'EXPLOREAZĂ', categoriesTitle:'Tot ce ai nevoie, într-un singur loc', choose:'ALEGE CE TE INTERESEAZĂ',
    categories:['Locuri de muncă','Chirii și case','Auto și transport','Servicii','Vânzări','Ajutor reciproc'],
    communityKicker:'MAI MULT DECÂT UN CHAT', community:'Comunitatea', communityEm:'care te apropie.',
    communityText:'Discuții organizate pe orașe și subiecte. Întrebări, recomandări și ajutor real.', openCommunity:'Descoperă discuțiile',
    communitySteps:['01 — DISCUTĂ','02 — DESCOPERĂ','03 — AJUTĂ'], popular:'SUBIECTE DE INTERES', preview:'PREVIEW',
    topics:[['Documente și acte în Italia','Permesso, rezidență, INPS și întrebări practice'],['Viața între două țări','Experiențe, drumuri, familie și comunitate'],['Moldoveni în Emilia-Romagna','Recomandări și întâlniri locale']],
    topicFoot:'DISCUȚII ORGANIZATE PE SUBIECTE',
    marketKicker:'OPORTUNITĂȚI REALE', marketTitle:'Anunțuri și oportunități',
    marketText:'Locuri de muncă, chirii, mașini și servicii — de la oameni din comunitate.', allAds:'Toate anunțurile',
    search:'Caută locuri de muncă, chirii, servicii...', details:'Detalii', empty:'Nu am găsit rezultate. Încearcă alt termen.',
    demo:'Previzualizare de produs — anunțurile sunt demonstrative, nu oferte reale.',
    adTitles:['Căutăm personal pentru echipă','Cameră disponibilă pentru închiriere','Mașină second-hand — detalii în anunț'],
    adPlaces:['Modena · Emilia-Romagna','Bologna · Emilia-Romagna','Verona · Veneto'],
    adTags:['LOCURI DE MUNCĂ','IMOBILIARE','AUTO'], adMeta:'Anunț demonstrativ',
    joinKicker:'LOCUL TĂU E AICI', joinTitle:'Nu trebuie să fii', joinEm:'singur departe de casă.',
    joinText:'Construim un loc util, sigur și viu pentru moldovenii de pretutindeni. Comunitatea începe cu oamenii care aleg să participe.',
    github:'Urmărește proiectul pe GitHub', footer:'Construit pentru comunitate. Cu respect pentru fiecare poveste.',
    footerLegal:'© 2026 MOLDOVENI ITALIA · FĂCUT CU ♡', dockCommunity:'Comunitate', dockMarket:'Anunțuri', dockTopics:'Discuții',
    catTags:['Job','Casa','Auto','Servicii','Vânzări','Ajutor']
  },
  it: {
    navCommunity:'Comunità', navMarket:'Annunci', navTopics:'Discussioni', login:'Accedi',
    eyebrow:'Una comunità. Due Paesi. Infinite storie.', title:'Lontani da casa.\\nVicini tra noi.',
    intro:'Il luogo dove i moldavi in Italia si incontrano, si aiutano e trovano opportunità. Meno rumore. Più persone e cose concrete.',
    join:'Scopri la comunità', market:'Vedi gli annunci', proof:'Persone in Italia e Moldova, in un unico posto.',
    explore:'ESPLORA', categoriesTitle:'Quello che serve, in un unico posto', choose:'SCEGLI COSA TI INTERESSA',
    categories:['Offerte di lavoro','Case e affitti','Auto e trasporti','Servizi','Mercatino','Aiuto reciproco'],
    communityKicker:'PIÙ DI UNA CHAT', community:'Una comunità', communityEm:'che ti avvicina.',
    communityText:'Conversazioni organizzate per città e argomenti. Domande, consigli e aiuto concreto.', openCommunity:'Scopri le discussioni',
    communitySteps:['01 — PARTECIPA','02 — SCOPRI','03 — AIUTA'], popular:'ARGOMENTI POPOLARI', preview:'ANTEPRIMA',
    topics:[['Documenti e pratiche in Italia','Permesso, residenza, INPS e domande pratiche'],['Vivere tra due Paesi','Esperienze, viaggi, famiglia e comunità'],['Moldavi in Emilia-Romagna','Consigli e incontri locali']],
    topicFoot:'DISCUSSIONI ORGANIZZATE PER ARGOMENTO',
    marketKicker:'OPPORTUNITÀ CONCRETE', marketTitle:'Annunci e opportunità',
    marketText:'Lavoro, affitti, auto e servizi — dalle persone della comunità.', allAds:'Tutti gli annunci',
    search:'Cerca lavoro, affitti, servizi...', details:'Dettagli', empty:'Nessun risultato. Prova un altro termine.',
    demo:'Anteprima del prodotto — gli annunci sono dimostrativi, non offerte reali.',
    adTitles:['Cerchiamo personale per il nostro team','Camera disponibile in affitto','Auto usata — dettagli nell’annuncio'],
    adPlaces:['Modena · Emilia-Romagna','Bologna · Emilia-Romagna','Verona · Veneto'],
    adTags:['LAVORO','IMMOBILI','AUTO'], adMeta:'Annuncio dimostrativo',
    joinKicker:'IL TUO POSTO È QUI', joinTitle:'Non devi sentirti', joinEm:'solo lontano da casa.',
    joinText:'Stiamo costruendo uno spazio utile, sicuro e vivo per i moldavi ovunque si trovino. La comunità comincia da chi sceglie di partecipare.',
    github:'Segui il progetto su GitHub', footer:'Costruito per la comunità. Con rispetto per ogni storia.',
    footerLegal:'© 2026 MOLDOVENI ITALIA · FATTO CON ♡', dockCommunity:'Comunità', dockMarket:'Annunci', dockTopics:'Discussioni',
    catTags:['Lavoro','Casa','Auto','Servizi','Mercatino','Aiuto']
  },
  ru: {
    navCommunity:'Сообщество', navMarket:'Объявления', navTopics:'Обсуждения', login:'Войти',
    eyebrow:'Одно сообщество. Две страны. Тысячи историй.', title:'Вдали от дома.\\nРядом друг с другом.',
    intro:'Место, где молдаване в Италии знакомятся, помогают друг другу и находят возможности. Меньше шума — больше дела.',
    join:'Открыть сообщество', market:'Смотреть объявления', proof:'Люди из Италии и Молдовы в одном месте.',
    explore:'ОБЗОР', categoriesTitle:'Всё необходимое в одном месте', choose:'ВЫБЕРИТЕ ИНТЕРЕСУЮЩЕЕ',
    categories:['Работа','Жильё и аренда','Авто и транспорт','Услуги','Купля и продажа','Взаимопомощь'],
    communityKicker:'БОЛЬШЕ, ЧЕМ ЧАТ', community:'Сообщество', communityEm:'которое сближает.',
    communityText:'Обсуждения по городам и темам. Вопросы, советы и реальная помощь.', openCommunity:'Открыть обсуждения',
    communitySteps:['01 — ОБЩАЙСЯ','02 — УЗНАВАЙ','03 — ПОМОГАЙ'], popular:'ПОПУЛЯРНЫЕ ТЕМЫ', preview:'ПРЕДПРОСМОТР',
    topics:[['Документы и дела в Италии','ВНЖ, прописка, INPS и практические вопросы'],['Жизнь между двумя странами','Опыт, поездки, семья и сообщество'],['Молдаване в Эмилии-Романье','Советы и местные встречи']],
    topicFoot:'ОБСУЖДЕНИЯ ПО ТЕМАМ',
    marketKicker:'РЕАЛЬНЫЕ ВОЗМОЖНОСТИ', marketTitle:'Объявления и возможности',
    marketText:'Работа, аренда, автомобили и услуги от участников сообщества.', allAds:'Все объявления',
    search:'Поиск работы, жилья, услуг...', details:'Подробнее', empty:'Ничего не найдено. Попробуйте другой запрос.',
    demo:'Демонстрация продукта — объявления примерные, это не реальные предложения.',
    adTitles:['Ищем сотрудников в команду','Сдаётся комната','Подержанный автомобиль — подробности в объявлении'],
    adPlaces:['Модена · Эмилия-Романья','Болонья · Эмилия-Романья','Верона · Венето'],
    adTags:['РАБОТА','НЕДВИЖИМОСТЬ','АВТО'], adMeta:'Демонстрационное объявление',
    joinKicker:'ТВОЁ МЕСТО ЗДЕСЬ', joinTitle:'Не обязательно быть', joinEm:'одному вдали от дома.',
    joinText:'Мы создаём полезное, безопасное и живое пространство для молдаван по всему миру. Сообщество начинается с тех, кто хочет участвовать.',
    github:'Следить за проектом на GitHub', footer:'Создано для сообщества. С уважением к каждой истории.',
    footerLegal:'© 2026 MOLDOVENI ITALIA · СДЕЛАНО С ♡', dockCommunity:'Сообщество', dockMarket:'Объявления', dockTopics:'Темы',
    catTags:['Работа','Жильё','Авто','Услуги','Продажа','Помощь']
  }
} as const

const categoryIcons = ['💼','🏠','🚗','🛠️','🛍️','🤝']
const adIcons = ['💼','🏠','🚗']
const topicIcons = ['📄','🇲🇩','📍']

export default function App() {
  const [lang, setLang] = useState<Lang>('ro')
  const [query, setQuery] = useState('')
  const t = copy[lang]
  const ads = useMemo(() => t.adTitles.map((title,i) => ({title,place:t.adPlaces[i],tag:t.adTags[i],icon:adIcons[i]})), [t])
  const filtered = ads.filter(a => (a.title + a.place + a.tag).toLowerCase().includes(query.toLowerCase()))

  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#" aria-label="Moldoveni Italia home"><span className="brand-mark">M</span><span>MOLDOVENI<span className="brand-accent">.ITALIA</span></span></a>
      <nav className="desktop-nav"><a href="#community">{t.navCommunity}</a><a href="#market">{t.navMarket}</a><a href="#topics">{t.navTopics}</a></nav>
      <div className="header-actions">
        <div className="language-switch" aria-label="Select language">{(['ro','it','ru'] as Lang[]).map(l => <button key={l} className={lang===l?'active':''} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div>
        <a className="login-link" href="#community">{t.login} <span>↗</span></a>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" />{t.eyebrow}</div>
          <h1>{t.title.split('\\n').map((line,i)=><span key={line}>{line}{i===0&&<br/>}</span>)}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#community">{t.join}<span>↗</span></a><a className="button button-ghost" href="#market">{t.market}</a></div>
          <div className="hero-proof"><div className="avatar-stack"><i>🇲🇩</i><i>🇮🇹</i><i>🤝</i></div><span>{t.proof}</span></div>
        </div>
        <div className="hero-art" aria-label="Moldova and Italy connected">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="map-label label-md"><b>MD</b><span>MOLDOVA</span></div><div className="map-label label-it"><b>IT</b><span>ITALIA</span></div>
          <div className="connection-line" /><div className="center-emblem"><span>MD</span><strong>×</strong><span>IT</span></div>
          <div className="floating-note note-top">✦ {t.navCommunity}</div><div className="floating-note note-bottom">♡ {t.openCommunity}</div>
          <div className="hero-stamp">ÎMPREUNĂ<br/><strong>ORIUNDE</strong></div>
        </div>
        <div className="hero-bottom"><span>01 / COMMUNITY</span><span>ITALIA ↔ MOLDOVA</span><span>OPEN. LOCAL. CONNECTED.</span></div>
      </section>
      <section className="category-section section-wrap">
        <div className="section-heading"><div><span className="kicker">{t.explore}</span><h2>{t.categoriesTitle}</h2></div><span className="heading-side">{t.choose} <b>↓</b></span></div>
        <div className="category-grid">{t.categories.map((c,i)=><a className="category-card" href="#market" key={c}><span className="category-icon">{categoryIcons[i]}</span><span>{c}</span><b>↗</b></a>)}</div>
      </section>
      <section id="community" className="community-section">
        <div className="section-wrap community-layout">
          <div className="community-copy"><span className="kicker kicker-light">{t.communityKicker}</span><h2>{t.community}<br/><em>{t.communityEm}</em></h2><p>{t.communityText}</p><a className="button button-light" href="#topics">{t.openCommunity}<span>↗</span></a><div className="community-foot">{t.communitySteps.map(x=><span key={x}>{x}</span>)}</div></div>
          <div className="topic-panel"><div className="panel-head"><span>{t.popular}</span><span className="panel-status"><i/> {t.preview}</span></div>{t.topics.map((x,i)=><a className="topic-row" href="#topics" key={x[0]}><span className="topic-number">0{i+1}</span><span className="topic-icon">{topicIcons[i]}</span><span className="topic-text"><b>{x[0]}</b><small>{x[1]}</small></span><span className="topic-arrow">↗</span></a>)}<div className="panel-bottom">{t.topicFoot} <span>→</span></div></div>
        </div>
      </section>
      <section id="market" className="market-section section-wrap">
        <div className="section-heading"><div><span className="kicker">{t.marketKicker}</span><h2>{t.marketTitle}</h2><p className="section-description">{t.marketText}</p></div><a className="text-link" href="#market">{t.allAds} ↗</a></div>
        <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.search}/><kbd>↵</kbd></label>
        <div className="listing-grid">{filtered.map((a,i)=><article className="listing-card" key={a.title}><div className="listing-visual"><span>{a.icon}</span><small>{a.tag}</small><b>0{i+1}</b></div><div className="listing-info"><span className="listing-meta">{t.adMeta}</span><h3>{a.title}</h3><p>⌖ {a.place}</p><a href="#market">{t.details} <span>↗</span></a></div></article>)}</div>
        {filtered.length===0&&<p className="empty-state">{t.empty}</p>}<p className="demo-note">{t.demo}</p>
      </section>
      <section id="topics" className="join-section section-wrap"><div><span className="kicker">{t.joinKicker}</span><h2>{t.joinTitle}<br/><em>{t.joinEm}</em></h2></div><div className="join-right"><p>{t.joinText}</p><a className="button button-primary" href="https://github.com/bossartemii/moldoveni-italia-" target="_blank" rel="noreferrer">{t.github} ↗</a></div></section>
    </main>
    <footer className="footer"><a className="brand brand-footer" href="#"><span className="brand-mark">M</span><span>MOLDOVENI<span className="brand-accent">.ITALIA</span></span></a><p>{t.footer}</p><span>{t.footerLegal}</span></footer>
    <div className="mobile-dock"><a href="#community">◉<small>{t.dockCommunity}</small></a><a href="#market">⌕<small>{t.dockMarket}</small></a><a href="#topics">◎<small>{t.dockTopics}</small></a><button onClick={()=>setLang(lang==='ro'?'it':lang==='it'?'ru':'ro')}>文<small>{lang.toUpperCase()}</small></button></div>
  </div>
}

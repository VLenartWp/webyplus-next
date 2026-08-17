import { getHomeContent } from "@/lib/wordpress";

export default async function Home() {
  const content = await getHomeContent();

  return (
    <main>
      <header className="nav shell">
        <a className="logo" href="#top" aria-label="Domů">D.</a>
        <a className="menu" href="#contact">Kontakt <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>
          {content.heroLines.map((line, index) => (
            <span className={index === 2 ? "accent" : ""} key={line}>{line}</span>
          ))}
        </h1>
        <div className="orb" aria-hidden="true" />
        <p className="scroll-note">Scroll to explore ↓</p>
      </section>

      <section className="intro shell">
        <p>{content.intro}</p>
      </section>

      <section className="services shell">
        <p className="section-label">Solutions we provide</p>
        <div className="service-list">
          {content.services.map((service, index) => (
            <div className="service" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service}</h2>
              <span>↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="process shell">
        <p className="section-label">How we work</p>
        <div className="process-grid">
          {content.process.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta shell" id="contact">
        <p>{content.cta}</p>
        <a href="mailto:hello@example.com">Napište nám ↗</a>
      </section>

      <footer className="footer shell">
        {content.locations.map((location) => (
          <div key={location.city}><h3>{location.city}</h3><p>{location.address}</p></div>
        ))}
        <p className="copyright">© {new Date().getFullYear()} Studio</p>
      </footer>
    </main>
  );
}

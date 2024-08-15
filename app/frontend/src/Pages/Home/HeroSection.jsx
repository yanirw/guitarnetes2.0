export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Yanir Winnik</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">DevOps</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I bring expertise in designing and maintaining robust infrastructure solutions.
            <br /> My work revolves around leveraging cutting-edge technologies to optimize workflows,
            ensuring reliable and scalable deployments.
          </p>
        </div>
        <div className="hero--section-buttons">
          <button className="btn btn-primary">Get In Touch</button>
          <a href="/yanircv.pdf" download className="btn btn-secondary">Download CV</a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
function Home() {
  return (
    <div className="text-center">
      <img
        src="/ProjectPortfolio/Banner.png"
        className="img-fluid"
        alt="Profile picture"
      />
      <p className="text-center fs-1 fw-bold">ABOUT ME</p>
      <p className="fs-5">
        I'm Claudia and this is my project portfolio website! &#x1F60A; <br />
        I am a passionate Full-Stack Developer with experience in React, Java,
        and database management.
        <br />
        Check out my projects below or reach out if you’d like to collaborate.
        &#x1F680;
      </p>
      <button type="button" className="btn btn-light btn-lg">
        <a className="nav-link" aria-current="page" href="/projects">
          <b>MY PROJECTS</b>
        </a>
      </button>
      <br />
      <br />
      <hr />
      <p className="text-center fs-1 fw-bold">SKILLS & TECH STACK</p>
      <p className="fs-5">
        <b>🎨 Frontend:</b> React
        <br />
        <b>⚙️ Backend:</b> Java, Spring Boot
        <br />
        <b>🛢️ Databases:</b> PostgreSQL, MongoDB
      </p>
      <hr />
    </div>
  );
}

export default Home;

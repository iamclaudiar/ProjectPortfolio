function Menu() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/webdeveloper_portfolio">
            <img
              src="/webdeveloper_portfolio/LOGO.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            &nbsp; CodeByClaudia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/webdeveloper_portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                  href="/webdeveloper_portfolio"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/webdeveloper_portfolio/#/blog"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/webdeveloper_portfolio/#/blog"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/webdeveloper_portfolio/#/projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/webdeveloper_portfolio/#/projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/webdeveloper_portfolio/#/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/webdeveloper_portfolio/#/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

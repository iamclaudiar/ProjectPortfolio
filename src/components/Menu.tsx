function Menu() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/ProjectPortfolio">
            <img
              src="/LOGO.png"
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
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/ProjectPortfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                  href="/ProjectPortfolio"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/ProjectPortfolio/blog"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/ProjectPortfolio/blog"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={
                    location.pathname === "/ProjectPortfolio/projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/ProjectPortfolio/projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/ProjectPortfolio/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/ProjectPortfolio/contact"
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

function Projects() {
  return (
    <div
      className="bg-body-tertiary text-white min-vh-100"
      data-bs-theme="dark"
    >
      <p className="text-center fs-1 fw-bold">PROJECTS</p>
      <p className="text-start fs-3">
        &nbsp;&nbsp;<b>Full Stack Web application</b>
        <a
          className="nav-link"
          href="https://github.com/iamclaudiar/FriendsBirthdays-FullStackApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="bi bi-github" style={{ fontSize: "1rem" }}>
            &nbsp;Frinds Bitrhdays Full Stack App
          </p>
        </a>
        <p className="text-start fs-5">
          <b>Project Description - Birthday Reminder 🎉</b>
          <br />
          This web application helps you store and manage your friends'
          birthdays easily, ensuring you never miss a special moment! 🎂
          <br />✔ Powerful Backend: Built with Java Spring Boot, providing a
          fast and scalable system for handling data.
          <br />✔ Modern Interface: Developed with React, offering an intuitive
          and user-friendly experience.
          <br />✔ SQL Database: Ensures structured and secure data storage for
          quick and reliable access.
          <br />
          This app is perfect for anyone looking to keep track of friends'
          birthdays in a simple and efficient way! 🚀
        </p>
      </p>
    </div>
  );
}

export default Projects;

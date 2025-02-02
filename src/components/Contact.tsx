function Contact() {
  return (
    <div
      className="bg-body-tertiary text-white min-vh-100"
      data-bs-theme="dark"
    >
      <p className="text-center fs-1 fw-bold">CONTACT</p>
      <hr />
      <p className="text-center fs-5">
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/claudia-radion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}>
            &nbsp;My LinkedIn Profile
          </p>
        </a>
      </p>
      <hr />
      <p className="text-center fs-5">
        <a
          className="nav-link"
          href="https://github.com/iamclaudiar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="bi bi-github" style={{ fontSize: "1.5rem" }}>
            &nbsp;My GitHub
          </p>
        </a>
      </p>
      <hr />
      {/* <p className="text-start fs-4">
        <b>Leave a message</b>
      </p>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="FormControlEmail"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            id="FormControlTextarea"
            placeholder="Write your message here."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-light">
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default Contact;

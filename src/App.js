import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>My Static Website</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home">
        <h2>Welcome</h2>
        <p>This is a simple static React website.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>We build modern web and cloud applications.</p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <ul>
          <li>Frontend Development</li>
          <li>Backend APIs</li>
          <li>Cloud & DevOps</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: example@email.com</p>
      </section>

      <footer>
        <p>© 2026 My Static Website</p>
      </footer>
    </div>
  );
}

export default App;
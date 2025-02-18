import React from "react";

const About = () => {
  return (
    <div className="bg-light text-dark min-vh-100 py-4" style={{ marginTop: "60px" }}>
      {/* Header Section */}
      <header className="w-100 bg-dark text-white py-5 text-center rounded shadow">
        <h1 className="display-4 fw-bold">About Blogs</h1>
        <p className="lead mt-2">Writing | Knowledge | Community</p>
      </header>

      {/* Introduction Section */}
      <section className="mt-5 text-center">
        <h2 className="h2 fw-semibold">About Our Blogging Platform</h2>
        <p className="mt-3 mx-auto w-75">
          Welcome to our blogging platform, your go-to space for insightful
          articles, creative writing, and knowledge sharing. Whether you are
          passionate about technology, lifestyle, travel, or personal
          experiences, we provide a space for bloggers to express and engage
          with a community of like-minded readers.
        </p>
      </section>

       {/* Our Mission & Vision */}
       <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">
              <h3>Our Mission</h3>
              <p>
                To create insightful and engaging content that empowers and
                educates people on different aspects of life.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">
              <h3>Our Vision</h3>
              <p>
                To become a leading platform for knowledge-sharing and
                inspiration for readers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section with Images */}
      <section className="mt-5">
        <h2 className="h2 fw-semibold text-center">What We Cover</h2>
        <div className="row mt-4 g-4 justify-content-center">
          {[
            {
              title: "Tech & Innovation",
              img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Explore the latest trends in technology, coding, and AI innovations.",
            },
            {
              title: "Lifestyle & Wellness",
              img: "https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
              desc: "Find tips on health, mindfulness, and maintaining a balanced life.",
            },
            {
              title: "Travel & Experiences",
              img: "https://www.tourmyindia.com/blog//wp-content/uploads/2018/06/Travel-Experiences.jpg",
              desc: "Read about exciting travel destinations and personal journey stories.",
            },
            {
              title: "Personal Growth & Writing",
              img: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Enhance your writing skills and discover self-improvement strategies.",
            },
          ].map((topic, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card shadow-sm h-100">
                <img
                  src={topic.img}
                  className="card-img-top"
                  alt={topic.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title fw-bold">{topic.title}</h5>
                  <p className="card-text flex-grow-1">{topic.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center text-md-start">
              <h2 className="h2 fw-semibold">Join Our Blogging Community</h2>
              <p className="mt-3 h5 fw-light">
                Stay updated with insightful blogs and share your thoughts with
                passionate writers.
                <span style={{ color: "red", fontWeight: 500 }}>
                  {" "}
                  Subscribe{" "}
                </span>
                now!
              </p>
            </div>
            <div className="col-md-6">
              <form className="d-flex flex-column flex-md-row justify-content-center">
                <input
                  type="email"
                  className="form-control w-100 w-md-75 me-md-2 mb-2 mb-md-0"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="mt-5 py-5 bg-dark text-white text-center">
        <div className="container">
          <h4 className="fw-bold">Get in Touch</h4>
          <p className="mt-2">
            Have questions or want to contribute? Reach out!
          </p>
          <p className="mt-3">
            <a
              href="mailto:contact@blogsplatform.com"
              className="text-warning fw-semibold text-decoration-none"
            >
              contact@blogsplatform.com
            </a>
          </p>
          <p className="mt-4 small text-secondary">
            © 2025 Blogging Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;

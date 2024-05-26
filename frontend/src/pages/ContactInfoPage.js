import React from "react";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Information - Insights</title>
      </Helmet>
      <h1>Contact Information</h1>
      <div className="contact-card">
        <h2>Thapelo SS Ncube</h2>
        <p>Full Stack Developer</p>
        <p>Email: tsamkelo96@gmail.com</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Thapelo-ST">github.com/Thapelo_ST</a>
        </p>
      </div>
      <div className="contact-card">
        <h2>Demakatso May</h2>
        <p>Backend Developer</p>
        <p>Email: demakatsomay@gmail.com</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/demakatso"
          >
            github.com/demakatso
          </a>
        </p>
      </div>
      <style jsx>{`
        .contact-card {
          background-color: #82a0bc;
          border: 1px solid #ddd;
          padding: 16px;
          margin: 16px 0;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h2 {
          margin-top: 0;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="about">
      <h1> About Page for the Blog Platform </h1>
      <h2>
        <u>About Our Blog Platform</u>
      </h2>
      <p>
        Welcome to our Blog Platform, a modern and user-friendly space where you
        can create, edit, and share your thoughts with the world. Our platform
        is built using the latest technologies to ensure a smooth and efficient
        experience for our users.
      </p>
      <h2>Tech Stack</h2>
      <h3>Frontend:</h3>
      <p>
        Our backend is powered by Node.js, providing a robust and
        high-performance server environment. Node.js, coupled with Express,
        handles our server-side logic and API endpoints.
      </p>
      <h3>Backend:</h3>
      <p>
        We use React for a dynamic and responsive user interface. React's
        component-based architecture allows us to build complex UIs with ease
        and ensures that our platform remains scalable and maintainable.
      </p>
      <h3>Database:</h3>
      <p>
        We store our blog data in MongoDB, a NoSQL database known for its
        flexibility and scalability. MongoDB allows us to handle large volumes
        of data and perform complex queries efficiently.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>
          User Authentication: Secure login and registration system to protect
          user data.
        </li>
        <li>
          Blog Post Management: Users can create, edit, and delete their blog
          posts effortlessly.
        </li>
        <li>
          Post Storage: All blog posts are stored securely in MongoDB, ensuring
          data integrity and availability.
        </li>
        <li>
          Responsive Design: Our platform is fully responsive, providing an
          optimal viewing experience on all devices.
        </li>
        <li>
          Markdown Editor: (Bonus) Users can format their blog posts using a
          powerful markdown editor, enhancing readability and presentation.
        </li>
        <li>
          Image Uploads: (Bonus) Users can upload header images to make their
          blog posts more visually appealing.
        </li>
      </ul>
      <h2>Development Tools and Dependencies</h2>
      <p>
        Our development environment is configured with essential tools and
        libraries to streamline our workflow
      </p>
      <ul>
        <li>bcryptjs: For hashing passwords and securing user data.</li>
        <li>cookie-parser: To parse cookies for managing user sessions.</li>
        <li>
          cors: To enable Cross-Origin Resource Sharing, allowing our frontend
          to communicate with the backend seamlessly.
        </li>
        <li>
          express: A minimal and flexible Node.js web application framework for
          building our server-side logic.
        </li>
        <li>
          jsonwebtoken: To implement JSON Web Tokens (JWT) for secure user
          authentication.
        </li>
        <li>
          mongoose: An ODM (Object Data Modeling) library for MongoDB, providing
          a straightforward way to manage data schemas.
        </li>
        <li>
          multer: For handling file uploads, such as header images for blog
          posts.
        </li>
        <li>
          nodemon: A utility that automatically restarts our server during
          development whenever file changes are detected.
        </li>
      </ul>
      <h2>Acknowledgments</h2>
      <p>
        This platform was built with contributions from various resources,
        including instructional videos from YouTube that helped guide the
        development process. We utilized open-source libraries and tools from
        the YARN website, which are listed above as dependencies. 
      </p>
      <p>
        Thank you forvisiting our platform. We hope you enjoy using it as much as we enjoyed
        building it!
      </p>
    </div>
  );
}

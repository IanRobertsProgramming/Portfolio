import "../styles/services.css";

export default function Services() {
  return (
    <section id="services">
      <span className="serviceTitle">What I do</span>
      <span className="serviceDesc"></span>
      <div className="serviceBars">
        <div className="serviceBar">
          <img src="" alt="" className="serviceBarImg" />
          <div className="serviceBarText">
            <h2>Full-Stack Development</h2>
            <p>
              I build complete web applications, handling both the frontend and
              backend to create seamless user experiences. Using JavaScript,
              React.js, Node.js, Express.js, and MongoDB, I develop dynamic and
              responsive applications that integrate smoothly across all layers.
            </p>
          </div>
        </div>
        <div className="serviceBar">
          <img src="" alt="" className="serviceBarImg" />
          <div className="serviceBarText">
            <h2>Backend Development & Database Design</h2>
            <p>
              I specialize in designing scalable, efficient backend systems and
              databases that power applications behind the scenes. With
              expertise in C#, Java, Python, MongoDB, and Oracle PL/SQL, I focus
              on writing clean API endpoints, optimizing database performance,
              and ensuring data integrity. Whether working with relational
              databases (Oracle PL/SQL, SQL-based systems) or NoSQL solutions
              like MongoDB, I structure data models for performance and
              flexibility.
            </p>
          </div>
        </div>
        <div className="serviceBar">
          <img src="" alt="" className="serviceBarImg" />
          <div className="serviceBarText">
            <h2>Software Architecture & Agile Development</h2>
            <p>
              I follow industry best practices in software design, using
              object-oriented programming, design patterns, and Agile
              methodologies to build maintainable, well-structured applications.
              I also work with tools like Git, Jira, and collaborative
              development workflows to streamline the development process.
            </p>
          </div>
        </div>
        <div className="serviceBar">
          <img src="" alt="" className="serviceBarImg" />
          <div className="serviceBarText">
            <h2>Testing & Debugging</h2>
            <p>
              I ensure software quality and reliability by using test-driven
              development (TDD) principles, debugging efficiently, and writing
              comprehensive test cases. My approach helps catch issues early,
              improving software stability and performance.
            </p>
          </div>
        </div>
        <div className="serviceBar">
          <img src="" alt="" className="serviceBarImg" />
          <div className="serviceBarText">
            <h2>Technical Documentation & Collaboration</h2>
            <p>
              I bridge the gap between technical and non-technical teams by
              writing clear and effective Software Requirements Specification
              (SRS) documents, API documentation, and system design reports. My
              background in teaching and customer service enhances my ability to
              explain complex technical concepts in an accessible way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

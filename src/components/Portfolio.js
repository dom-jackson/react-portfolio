import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is my first project',
      liveLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      description: 'This is my second project',
      liveLink: 'https://example.com/project2',
      githubLink: 'https://github.com/example/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={`images/${project.image}`} alt={project.title} />
            <p>{project.description}</p>
            <div className="links">
              <a href={project.liveLink}>Live Link</a>
              <a href={project.githubLink}>GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        Download my resume{' '}
        <a href="/path/to/resume.pdf" download>
          here
        </a>
        .
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
    </section>
  );
};

export default Resume;

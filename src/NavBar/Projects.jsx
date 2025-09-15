import React from 'react'
import '../assets/projects.css'
import { Icon } from '@iconify/react/dist/iconify.js';
const projects = [
  {
    title: 'A Blog Site ',
    desc: 'A full-featured blog application built with Django that supports user authentication, role-based permissions, and rich content management.',
    image: '/Blog-site.png',
    gitlink: 'https://github.com/LokeshShrestha/Blog-System.git',
    techstack: 'Django, SQLite, HTML, CSS, TinyMCE'
  },
  {
    title: 'Ecommerce Platform ',
    desc: 'A comprehensive ecommerce platform developed using Django and React, featuring product listings, shopping cart functionality, and secure payment processing (Stripe).',
    image: '/E-commerce.png',
    gitlink: 'https://github.com/LokeshShrestha/E-Commerce.git',
    techstack: 'Django, HTML, CSS, Stripe,'
  },
  {
    title: 'Quick Reserve',
    desc:'QuickReserve is a design-oriented web project focused on creating visually appealing and user-friendly interfaces. ',
    image:'/Quick-Reserve.png',
    gitlink:'https://github.com/LokeshShrestha/Quick-Reserve.git',
    techstack: 'HTML, CSS'
  },
  {
    title:'Smart-Water-Management-System ',
    desc:'An IoT-based water management system that monitors and controls water usage in real-time, utilizing sensors and cloud technology to optimize water distribution and reduce waste.',
    image:'/tinker_cad.png',
    gitlink:'https://github.com/LokeshShrestha/Smart-Water-Management-System',
    techstack: 'C++, Arduino'
  },
  {
    title:"Hospital Management System ",
    desc:"This project is a partial implementation of a Hospital Management System written in Python. It provides basic functionalities for managing patients, doctors, and administrative tasks.",
    image:'/Hospital.png',
    gitlink:'https://github.com/LokeshShrestha/Hospital-Management-Python-',
    techstack: 'Python, CLI'
  }
];

const Projects = () => {
  return (
    <div>
      <h2 className="projects-title">Projects</h2>
      <h3 className="projects-subtitle">Explore my web development projects, including full stack platforms, frontend showcases, and IoT solutions.

</h3>
      <div className="projects-list">
        
        {projects.map((proj, idx) => (
          <a className="card projects-center" href={proj.gitlink} key={idx}>
            {proj.image && <img src={proj.image} alt={proj.title} className="project-image" />}
            <a href={proj.gitlink} className="primaryBtn hidden" target='_blank'>View Code <Icon icon="mdi:github"/></a>
            
            <span className="card-title">{proj.title}</span>
            <p className="card-desc">{proj.desc}</p>
            {proj.techstack && (
              <div className="techstack-list">
                {proj.techstack.split(',').filter(Boolean).map((tech, i) => (
                  <span className="techstack-item" key={i}>{tech.trim()}</span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects
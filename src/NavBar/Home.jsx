import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import '../assets/home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  let skills = [
    {'name':'Django',
      'level':'Advanced',
      'logo' :'simple-icons:django'
    },
    {'name':'React JS',
      'level':'Intermediate',
      'logo' :'akar-icons:react-fill'
    },
    {'name':'PostgreSQL',
      'level':'Intermediate',
      'logo':'simple-icons:postgresql'
    },
    {'name':'HTML',
      'level':'Advanced',
      'logo':'icon-park-solid:html-five'
    },
    {'name':'CSS',
      'level':'Advanced',
      'logo':'flowbite:css-solid'
    },
    {'name':'JavaScript',
      'level':'Advanced',
      'logo':'akar-icons:javascript-fill'
    },
    {'name':'Python',
      'level':'Advanced',
      'logo':'akar-icons:python-fill'
    },
    {'name':'Git/GitHub',
      'level':'Intermediate',
      'logo':'mdi:github'
    },
    {'name':'REST API',
      'level':'Intermediate',
      'logo':'devicon-plain:djangorest-wordmark',
      'fontSize': '6rem'
    }
  ];
  return (
    <div>
      <div className='Both-algn-home'>
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQHdJOlIsLF1Dg/profile-displayphoto-shrink_800_800/B4DZX737blHwAc-/0/1743687498228?e=1759968000&v=beta&t=hKdXnie3KGtnvUyILYRiPGrxhPl8YLu8-JB32IkOWu8" className='img-prof'/>
        <div>
        <h2 className='inline-block'>Hello,</h2> <h3 className='inline-block'>I am</h3>
        
        <h1 className='Primary-color'>Lokesh Shrestha</h1>
        <h2>Full Stack Developer</h2>
        </div>
        
      </div>
      <div className='home-intro'>
        <p>I'm a passionate developer. Explore my work and get to know me.</p>
        <div className='home-buttons'>
          <Link to="/projects" className='primaryBtn'>View My Projects</Link>
          <Link to="/contact" className='primaryBtn'>Contact Me</Link>
        </div>
      </div>
    <div className='About-me-section'>
      <h2 className='fade-in'>About Me</h2>
      <div className="card about-center">
        <p>
          A dedicated technology professional with a deep passion for AI, software development, and continuous learning. Proficient in <b>Django</b> and <b>React</b>, I am committed to exploring emerging technologies and creating innovative solutions. With a strong curiosity and a growth-driven mindset, I actively seek opportunities to take on new challenges and expand my expertise in the dynamic field of technology.
        </p>
      </div>
      <h2 className='fade-in'>Skills</h2>
      <div className="card about-center">
        <div className="about-skills">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <span className='skill-icon'><Icon icon={skill.logo} style={{fontSize:skill.fontSize}}/></span>
              <div className='textBox'>
                <span className="skill-name head">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </div>
        );
}

export default Home
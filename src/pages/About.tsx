import { motion } from 'framer-motion';
import '../styles/About.css';
import profilePhoto from '../assets/loc_headshot.jpg';
import SkillCategory from '../components/SkillCategory';
import { POSITION_TITLE } from '../utils/constants';

import { useLocation } from 'react-router-dom';
import GetInTouch from '../components/GetInTouch';

const About = () => {
  const { pathname } = useLocation();
  return (
    <div className="about-container">
      <motion.div 
        key={pathname}
        className="about-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
        <motion.h1 
          className="about-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          >
          About Me
        </motion.h1>
        <motion.div 
          className="title-underline"
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
          />
      </motion.div>
      
      <div className="about-content">
        <motion.div 
          className="about-image-container"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          <div className="about-image-placeholder">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          <h2>{POSITION_TITLE}</h2>
          <p>
            I'm a passionate backend cloud engineer with expertise in building robust and scalable server-side applications. 
            With a strong foundation in computer science and years of experience in the industry, I specialize in creating 
            efficient, maintainable, and high-performance backend systems.
          </p>
          <p>
            My journey in software engineering began with a deep curiosity about how systems work behind the scenes. 
            This curiosity led me to focus on backend development, where I've had the opportunity to work on various 
            challenging projects that have honed my skills in designing and implementing complex systems.
          </p>
          <p>
            I'm constantly learning and staying updated with the latest technologies and best practices in the field. 
            I believe in writing clean, well-documented code and following software development principles that ensure 
            long-term maintainability and scalability.
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <SkillCategory category="Languages" skills={['Python', 'TypeScript', 'JavaScript', 'C#']} />
          <SkillCategory category="Infrastructure" skills={['AWS SAM', 'Serverless Framework', 'Serverless Stack', 'Terraform']} />
          <SkillCategory category="APIs & Frameworks" skills={['AWS API Gateway', 'FastAPI', 'Flask', 'Django']} />
          <SkillCategory category="Databases" skills={['AWS DynamoDB', 'MongoDB', 'NoSQL', 'SQL']} />
        </div>
      </motion.div>
      <GetInTouch />
    </div>
  );
};

export default About;
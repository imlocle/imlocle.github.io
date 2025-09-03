import { motion } from 'framer-motion';
import '../styles/About.css';
import profilePhoto from '../assets/loc_headshot.jpg';

const About = () => {
  return (
    <div className="about-container">
      <motion.div 
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
          <h2>Backend Software Engineer</h2>
          <p>
            I'm a passionate backend software engineer with expertise in building robust and scalable server-side applications. 
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
          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skills-list">
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >TypeScript</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >Python</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >JavaScript</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >C#</motion.li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Infrastructure</h3>
            <ul className="skills-list">
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >AWS SAM</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >Serverless Framework</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >Serverless Stack</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >Terraform</motion.li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>APIs & Frameworks</h3>
            <ul className="skills-list">
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >AWS API Gateway</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >FastAPI</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >Flask</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >Django</motion.li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Databases</h3>
            <ul className="skills-list">
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >AWS DynamoDB</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >MongoDB</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >NoSQL</motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >SQL</motion.li>
            </ul>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default About;
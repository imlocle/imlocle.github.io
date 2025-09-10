import { motion } from 'framer-motion';
import '../styles/Home.css';
import { FaServer, FaAws, FaCode } from 'react-icons/fa';
import { SiTerraform, SiServerless, SiAwslambda } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';
import raxLogo from '../assets/rax-logo-2020.svg';
import neptuneLogo from '../assets/neptune-logo2.png';
import mdsLogo from '../assets/mds-logo.png';
import wayviaLogo from '../assets/wayvia-logo.svg';
import { POSITION_TITLE } from '../utils/constants';
import GetInTouch from '../components/GetInTouch';
// import Testimonials from '../components/Testimonials';

const Home = () => {
  const { pathname } = useLocation();
  return (
    <div className="home-container">
      <div className='hero-container'>
        <motion.div 
          key={pathname}
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          >
          <motion.h1 
            className="hero-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            >
            Hi, I'm <span className="highlight">Loc Le</span>
          </motion.h1>

          <motion.h2 
            className="position-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            >
            {POSITION_TITLE}
          </motion.h2>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            >
            Building robust and scalable solutions
          </motion.p>
          
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            >
            <Link to="/contact" className="primary-button">Get In Touch</Link>
            <Link to="/work" className="secondary-button">View My Work</Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ y: 10 }}
          >
          <p>Scroll Down</p>
          <div className="arrow-down"></div>
        </motion.div>
      </div>
      
      <motion.section 
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        >
        <h2 className="section-title">What I Do</h2>
        
        <div className="skills-grid">
          <motion.div 
            className="skill-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon"><FaServer /></div>
            <h3>Backend Development</h3>
            <p>Building robust server-side applications and RESTful/GraphQL APIs</p>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon"><FaAws /></div>
            <h3>AWS Cloud Engineering</h3>
            <p>Architecting scalable cloud solutions on Amazon Web Services</p>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon"><SiTerraform /></div>
            <h3>Infrastructure as Code</h3>
            <p>Automating infrastructure provisioning with Terraform and CloudFormation</p>
          </motion.div>

          <motion.div 
            className="skill-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon"><SiAwslambda /></div>
            <h3>Serverless Architecture</h3>
            <p>Developing event-driven applications with AWS Lambda functions</p>
          </motion.div>

          <motion.div 
            className="skill-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon"><SiServerless /></div>
            <h3>Serverless Framework</h3>
            <p>Streamlining deployment and management of serverless applications</p>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon"><FaCode /></div>
            <h3>API Development</h3>
            <p>Creating efficient and secure endpoints for client-server communication</p>
          </motion.div>
        </div>
      </motion.section>

      {/* <Testimonials /> */}

      <motion.section 
        className="companies-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">Who I've Worked With</h2>
        
        <div className="companies-grid">
          <Link to="https://www.theneptuneapp.com/" target="_blank" rel="noopener noreferrer">
            <motion.div 
            className="company-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5}}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <img src={neptuneLogo} alt="The Neptune App" />
          </motion.div>
          </Link>
          <Link to="https://www.rackspace.com/" target="_blank" rel="noopener noreferrer">
          <motion.div 
            className="company-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2  }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
              <img src={raxLogo} alt="Rackspace Technology" />
          </motion.div>
          </Link>
          <Link to="https://www.methoddatascience.com/" target="_blank" rel="noopener noreferrer">
          <motion.div 
            className="company-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <img src={mdsLogo} alt="Method Data Science" />
          </motion.div>
          </Link>
          <Link to="https://www.wayvia.com/" target="_blank" rel="noopener noreferrer">
          <motion.div 
            className="company-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <img src={wayviaLogo} alt="Wayvia: Formerly PriceSpider" />
          </motion.div>
          </Link>
        </div>
        <GetInTouch />
      </motion.section>
    </div>
  );
};

export default Home;
import { motion } from 'framer-motion';
import '../styles/Home.css';
import { FaServer, FaAws, FaRobot, FaDatabase } from 'react-icons/fa';
import { SiTerraform, SiAwslambda } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';
import raxLogo from '../assets/rax-logo-2020.svg';
import neptuneLogo from '../assets/neptune-logo2.png';
import mdsLogo from '../assets/mds-logo.png';
import wayviaLogo from '../assets/wayvia-logo.svg';
import { POSITION_TITLE } from '../utils/constants';
import GetInTouch from '../components/GetInTouch';
import SkillCard from '../components/SkillCard';
import CompanyCard from '../components/CompanyCard';
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
          <SkillCard
            icon={FaAws}
            title="AWS Cloud Engineering"
            description="Architecting secure and scalable cloud solutions using AWS services"
          />
          <SkillCard
            icon={FaRobot}
            title="AI & Machine Learning"
            description="Creating AI-powered chatbots and NLP solutions with AWS Bedrock"
          />
          <SkillCard
            icon={FaServer}
            title="Backend Development"
            description="Designing and building scalable server-side applications with Node.js and Python"
          />
          <SkillCard
            icon={SiTerraform}
            title="Infrastructure as Code"
            description="Automating cloud infrastructure with Terraform and AWS CloudFormation"
          />
          <SkillCard
            icon={SiAwslambda}
            title="Serverless Architecture"
            description="Developing event-driven applications using AWS Lambda and API Gateway"
          />
          <SkillCard
            icon={FaDatabase}
            title="Data Engineering"
            description="Building data pipelines and analytics systems for actionable insights"
          />
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
          <CompanyCard link="https://www.theneptuneapp.com/" imgLogo={neptuneLogo} alt="The Neptune App" />
          <CompanyCard link="https://www.rackspace.com/" imgLogo={raxLogo} alt="Rackspace Technology" />
          <CompanyCard link="https://www.methoddatascience.com/" imgLogo={mdsLogo} alt="Method Data Science" />
          <CompanyCard link="https://www.wayvia.com/" imgLogo={wayviaLogo} alt="Wayvia" />
        </div>
        <GetInTouch />
      </motion.section>
    </div>
  );
};

export default Home;
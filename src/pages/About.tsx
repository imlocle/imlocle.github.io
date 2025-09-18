import { motion } from "framer-motion";
import "../styles/About.css";
import profilePhoto from "../assets/loc_headshot.jpg";
import SkillCategory from "../components/SkillCategory";
import { POSITION_TITLE } from "../utils/constants";

import { useLocation } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";

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
          animate={{ width: "80px" }}
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
            I'm a backend cloud engineer based in Las Vegas, NV, specializing in
            building reliable and efficient server-side systems on AWS. I focus
            on creating high-performance, maintainable solutions that scale as
            applications grow.
          </p>
          <p>
            Beyond backend development, I explore AI projects and how they can
            be applied to real-world problems. I'm also a sim racing enthusiast,
            where I combine my love for technology and motorsports with projects
            that integrate racing data and cloud engineering.
          </p>
          <p>
            I'm fluent in Vietnamese and bring a global perspective from
            studying abroad in Vietnam and teaching in Japan. These experiences
            have shaped my adaptability and ability to collaborate across
            cultures and time zones.
          </p>
          <p>
            I believe in writing clean, well-documented code, staying curious
            about emerging technologies, and continually learning to grow as an
            engineer.
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
          <SkillCategory
            category="Languages"
            skills={["Python", "TypeScript", "JavaScript", "C#"]}
          />
          <SkillCategory
            category="AI & Machine Learning"
            skills={["AWS Bedrock", "LLMs", "AI Chatbots", "AI Agents"]}
          />
          <SkillCategory
            category="Infrastructure"
            skills={[
              "AWS CloudFormation",
              "Serverless Framework",
              "Serverless Stack",
              "Terraform",
            ]}
          />
          <SkillCategory
            category="APIs & Frameworks"
            skills={["AWS API Gateway", "FastAPI", "Flask", ".NET"]}
          />
          <SkillCategory
            category="Databases"
            skills={["AWS DynamoDB", "MongoDB", "NoSQL", "SQL"]}
          />
        </div>
      </motion.div>
      <GetInTouch />
    </div>
  );
};

export default About;

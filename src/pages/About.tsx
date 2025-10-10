import { motion } from 'framer-motion';
import '../styles/About.css';
import profilePhoto from '../assets/loc_headshot.jpg';
import SkillCategory from '../components/SkillCategory';
import { POSITION_TITLE, SKILLS } from '../utils/constants';
import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import Cta from '../components/Cta';

const About = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="About Me" />

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
            My journey into technology began in Japan, while I was teaching
            English. My brother suggested coding as a balance of logic and
            creativity, and it clicked instantly. I've always been a problem
            solver—whether through dance (Poppin', Lockin', Hip-Hop, even
            impersonating Michael Jackson), filmmaking after college, or my
            teenage dream of becoming a detective. Though my parents discouraged
            law enforcement due to their wartime experiences as Vietnamese
            immigrants, I found a love for uncovering hidden truths in a
            different way—through History, which I studied at UC Santa Cruz.
          </p>
          <p>
            My first programming language was Python, and one of my earliest
            projects was a small app that used Yelp's API to track restaurants I
            had tried or wanted to try. That curiosity led me to Coding Dojo,
            where I learned Python, JavaScript, and Ruby in three months. It was
            there that I realized: technology is an endless learning process,
            and I'd never grow bored.
          </p>
          <p>
            My career started at PriceSpider in Technical Operations, where I
            learned C# on the job since it wasn't part of my bootcamp
            background. Around the same time, I was a teaching assistant for UC
            Irvine's Extension program, working with Beau Walker to help launch
            Method Data Science. Balancing both roles sharpened my adaptability
            and built a strong foundation in data.
          </p>
          <p>
            Later, at Rackspace, I had a mentor who guided me into cloud
            engineering and taught me through patience and analogy-driven
            explanations—an approach that matched my learning style perfectly. I
            discovered that I learn best by reverse engineering systems,
            breaking them down, and then building them back up. That mindset
            continues to guide how I design, build, and troubleshoot today.
          </p>
          <p>
            These days, my focus is backend engineering, cloud systems, and
            AI/automation projects. I love working on tools that overlap with my
            hobbies, like sim racing, but I'm also driven by the dream of
            building something that creates a positive impact in the world.
          </p>
          <p>
            Beyond work, I'm curious and adventurous. I've studied abroad in
            Vietnam, taught and bartended in Japan, and traveled through Cuba,
            France, the Netherlands, and Switzerland. I'm fluent in Vietnamese,
            conversational in Japanese, and love immersing myself in new
            cultures. To balance my technical side, I practice mindfulness and
            meditation—habits rooted in my Buddhist upbringing that help me stay
            grounded, creative, and always eager to learn.
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
          {SKILLS.map(category => (
            <SkillCategory
              key={category.title}
              category={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </motion.div>
      <Cta />
    </div>
  );
};

export default About;

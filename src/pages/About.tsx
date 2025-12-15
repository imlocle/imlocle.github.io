import { motion } from "framer-motion";
import "../styles/About.css";
import profilePhoto from "../assets/loc_headshot.jpg";
import SkillCategory from "../components/SkillCategory";
import { POSITION_TITLE, SKILLS } from "../utils/constants";
import { useLocation } from "react-router-dom";
import Title from "../components/page/Title";
import CtaSection from "../components/section/CtaSection";

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
            My journey into technology began in <strong>Japan</strong>, while I
            was teaching English. My brother suggested coding as a{" "}
            <strong>balance of logic and creativity</strong>, and it clicked
            instantly. I've always been a <strong>problem solver</strong>
            —whether through dance (Poppin', Lockin', Hip-Hop, even
            impersonating Michael Jackson), filmmaking after college, or my
            teenage dream of becoming a detective.
          </p>
          <p>
            Although my parents discouraged law enforcement due to their wartime
            experiences as Vietnamese immigrants, that curiosity never
            disappeared. Instead, it evolved into what I now call an{" "}
            <strong>
              <em>“Academic Detective”</em>
            </strong>
            —someone driven to uncover hidden patterns, question assumptions,
            and piece together complex narratives. This mindset ultimately led
            me to study <strong>History at UC Santa Cruz</strong>, where I
            learned how to investigate, analyze, and synthesize information with
            rigor and curiosity.
          </p>
          <p>
            My first programming language was <strong>Python</strong>, and one
            of my earliest projects was a small app that used Yelp's API to
            track restaurants I had tried or wanted to try. That curiosity led
            me to <strong>Coding Dojo</strong>, where I learned{" "}
            <strong>Python, JavaScript, and Ruby</strong> in three months. It
            was there that I realized: technology is an endless learning
            process, and I'd never grow bored.
          </p>
          <p>
            My career started at <strong>PriceSpider</strong> in Technical
            Operations, where I learned <strong>C#</strong> on the job since it
            wasn't part of my bootcamp background. Around the same time, I was a
            teaching assistant for{" "}
            <strong>UC Irvine's Extension Program</strong>, working with{" "}
            <strong>Beau Walker</strong> to help launch
            <strong>Method Data Science</strong>. Balancing both roles sharpened
            my adaptability and built a strong foundation in data.
          </p>
          <p>
            Later, at <strong>Rackspace</strong>, I had a mentor who guided me
            into <strong>cloud engineering</strong> and taught me through
            patience and <strong>analogy-driven explanations</strong>—an
            approach that matched my learning style perfectly. I discovered that
            I learn best by{" "}
            <strong>
              reverse engineering systems, breaking them down, and then building
              them back up
            </strong>
            . That mindset continues to guide how I design, build, and
            troubleshoot today.
          </p>
          <p>
            These days, my focus is{" "}
            <strong>
              backend engineering, cloud systems, and AI/automation
            </strong>{" "}
            projects. I love working on tools that overlap with my hobbies, like{" "}
            <strong>sim racing</strong>, but I'm also driven by the dream of
            building something that creates a positive impact in the world.
          </p>
          <p>
            Beyond work, I'm curious and adventurous.{" "}
            <strong>
              I've studied abroad in Vietnam, taught and bartended in Japan, and
              traveled through Cuba, France, the Netherlands, and Switzerland
            </strong>
            . I'm fluent in Vietnamese, conversational in Japanese, and love
            immersing myself in new cultures. To balance my technical side, I
            practice <strong>mindfulness and meditation</strong>—habits rooted
            in my Buddhist upbringing that help me stay{" "}
            <strong>grounded, creative, and always eager to learn</strong>.
          </p>
        </motion.div>
      </div>
      <CtaSection />
    </div>
  );
};

export default About;

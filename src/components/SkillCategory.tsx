import { motion } from "framer-motion";

const SkillCategory = ({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="skill-category">
        <h3>{category}</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SkillCategory;

import { motion } from 'framer-motion';

const SkillCategory = ({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) => {
  return (
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
  );
};

export default SkillCategory;

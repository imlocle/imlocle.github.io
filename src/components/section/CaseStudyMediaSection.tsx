import { motion } from "framer-motion";
import "@styles/pages/CaseStudyMedia.css";

type MediaItem = {
  title: string;
  description: string;
  image: string;
};

const MEDIA: MediaItem[] = [
  {
    title: "Backend Architecture",
    description:
      "Serverless AWS backend with layered services, Cognito auth, DynamoDB, queues, and environment isolation.",
    image: "/case-studies/neptune/architecture.png",
  },
  {
    title: "Content Moderation Flow",
    description: "Automated content moderation system using AWS Rekognition.",
    image: "/case-studies/neptune/content-moderation-flow.png",
  },
  {
    title: "Events Analytics Pipeline",
    description:
      "Custom ETL pipeline moving DynamoDB events → Parquet → Athena for low-cost SQL analytics.",
    image: "/case-studies/neptune/etl-flow.png",
  },
];

const CaseStudyMediaSection = () => {
  return (
    <section className="case-media-section">
      <div className="case-media-grid">
        {MEDIA.map((item, i) => (
          <motion.div
            key={item.title}
            className="case-media-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="case-media-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="case-media-image">
              <img src={item.image} alt={item.title} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyMediaSection;

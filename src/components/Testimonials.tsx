import { useState, useEffect, useRef } from "react";
import "../styles/Testimonials.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Product Manager",
    text: "Loc is an exceptional developer who always goes above and beyond.",
    image: "/assets/testimonial1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "CTO",
    text: "Working with Loc was a fantastic experience. Highly recommend!",
    image: "/assets/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "UX Designer",
    text: "The projects were delivered on time and exceeded expectations.",
    image: "/assets/testimonial3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "CEO",
    text: "Loc brings professionalism, skill, and creativity to every project.",
    image: "/assets/testimonial4.jpg",
  },
  {
    id: 5,
    name: "Sarah Lee",
    role: "Engineer",
    text: "Truly a pleasure to work with. Consistently high quality work.",
    image: "/assets/testimonial5.jpg",
  },
];

const Testimonials = () => {
  // const visibleCount = 3; // show 3 at a time
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const scrollToIndex = (newIndex: number) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.children[0] as HTMLElement;
    const cardWidth = card.clientWidth + 24; // 24px gap
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const nextIndex = (index + 1) % total;
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (index - 1 + total) % total;
    setIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // auto-slide
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.section
      className="testimonials-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title">What People Say</h2>

      <div className="testimonials-slider">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="testimonials-wrapper" ref={sliderRef}>
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <img src={t.image} alt={t.name} className="testimonial-image" />
              <p className="testimonial-text">"{t.text}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <span className="testimonial-role">{t.role}</span>
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </motion.section>
  );
};

export default Testimonials;

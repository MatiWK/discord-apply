import { useState } from "react";

interface cardProps {
    title: string,
    paragraph: string
}

const Card = ({
    title,
    paragraph
}: cardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    const cardStyle = isHovered
    ? { ...styles.card, ...styles.cardHover }
    : styles.card;

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

const styles = {
    card: {
      border: '1px solid #555',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '400px',
      backgroundColor: '#222',
      color: '#eee',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.5)',
    },
    title: {
      fontSize: '1.5em',
      margin: '0 0 8px 0',
      color: '#fff',
    },
    paragraph: {
      fontSize: '1em',
      margin: '0',
      color: '#bbb',
    },
  };

export default Card;

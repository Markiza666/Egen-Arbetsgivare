import styles from './Testimonial.module.scss';
import type { TestimonialProps } from '../../../types';

/**
 * Testimonial Component
 * Displays a customer success story with a styled blockquote.
 */
const Testimonial: React.FC<TestimonialProps> = ({ quote, author, subline }) => {
  return (
    <div className={styles.testimonialContainer}>
      <blockquote className={styles.blockquote}>
        <p>"{quote}"</p>
        <footer>
          <cite className={styles.author}>- {author}</cite>
          <span className={styles.subline}>{subline}</span>
        </footer>
      </blockquote>
    </div>
  );
};

export default Testimonial;

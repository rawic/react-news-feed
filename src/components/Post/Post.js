import { forwardRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PreloadImage from 'react-preload-image';
import styles from './Post.module.css';

const Post = ({ date, thumb, title, url }, ref) => (
  <article className={styles.post} ref={ref}>
    <a
      href={url}
      className={styles.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <PreloadImage
        className={styles.image}
        src={thumb}
        duration="1s"
        ease="ease 0.5s"
        lazy
      />

      <h2 className={styles.title}>{title}</h2>
      <span className={styles.date}>{date}</span>
    </a>
  </article>
);

Post.propTypes = {
  date: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default forwardRef(Post);

// eslint-disable-next-line import/no-extraneous-dependencies
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import PreloadImage from 'react-preload-image';
import styles from './Post.module.css';

const Post = forwardRef(({ date, thumb, title, url }, ref) => (
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

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.date}>{date}</span>
      </div>
    </a>
  </article>
));

Post.propTypes = {
  date: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Post;

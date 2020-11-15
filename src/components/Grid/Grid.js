/* eslint-disable react/jsx-props-no-spreading */
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './Grid.module.css';

import Post from '../Post/Post';

const Grid = ({ posts, lastPostElementRef }) => (
  <TransitionGroup className={styles.gridContainer}>
    {posts.map((post, index) => {
      const singlePost =
        posts.length === index + 1 ? (
          <Post key={post.title} ref={lastPostElementRef} {...post} />
        ) : (
          <Post key={post.title} {...post} />
        );

      return (
        <CSSTransition
          classNames="fade"
          key={post.title}
          timeout={{
            appear: 5000,
            enter: 100,
          }}
        >
          {singlePost}
        </CSSTransition>
      );
    })}
  </TransitionGroup>
);

Grid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  lastPostElementRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Grid.defaultProps = {
  lastPostElementRef: null,
};

export default Grid;

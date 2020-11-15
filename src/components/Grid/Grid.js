import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Grid.module.css';
import Post from '../Post/Post';

const Grid = ({ posts, lastPostElementRef }) => (
  <TransitionGroup className={styles.gridContainer}>
    {posts.map((post, index) => {
      const singlePost =
        posts.length === index + 1 ? (
          <Post ref={lastPostElementRef} key={post.title} {...post} />
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

export default Grid;

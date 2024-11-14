import PropTypes from 'prop-types';
import BlogPost from '../BlogPost/BlogPost';
import style from './BlogList.module.css';

function BlogList({ posts }) {
  return (
    <div className={style.blogList}>
      {posts.map(post => (
        <div className={style.blogList__item} key={post.id}>
          <BlogPost
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
          />
        </div>
      ))}
    </div>
  );
}

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      readTime: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BlogList;

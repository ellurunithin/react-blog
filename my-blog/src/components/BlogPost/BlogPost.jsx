import PropTypes from 'prop-types';
import style from './BlogPost.module.css';

function BlogPost({ title, content, author, date, readTime }) {
  return (
    <article className={style.blogPost}>
      <div className={style.blogPost__header}>
        <h2 className={style.blogPost__title}>{title}</h2>
        <div className={style.blogPost__meta}>
          <span className={style.blogPost__author}>By {author}</span>
          <time className={style.blogPost__date}>{date}</time>
          <span className={style.blogPost__readTime}>{readTime} min read</span>
        </div>
      </div>
      
      <div className={style.blogPost__content}>
        {content}
      </div>
    </article>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default BlogPost;

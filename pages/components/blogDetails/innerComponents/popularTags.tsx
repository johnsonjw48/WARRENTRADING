import React from 'react';
const BlogPopularTags: React.FC = () => {
  return (
    <div className="widget-box-2 widget-tags-box mb-45">
      <h4 className="fw-semibold mb-30"><span className="line"></span>Popular Tags</h4>
      {/*  end heading */}
      <ul className="tag-list">
        <li><a href="#" className="tag">Popular</a></li>
        <li><a href="#" className="tag">Design</a></li>
        <li><a href="#" className="tag">UX</a></li>
        <li><a href="#" className="tag">UI</a></li>
        <li><a href="#" className="tag">Icon</a></li>
        <li><a href="#" className="tag">Business</a></li>
        <li><a href="#" className="tag">Kit</a></li>
        <li><a href="#" className="tag">Tech</a></li>
        <li><a href="#" className="tag">Develop</a></li>
      </ul>
      {/*  end list */}
    </div>
  )
}

BlogPopularTags.displayName = "Blog Popular Tags";
export default BlogPopularTags;
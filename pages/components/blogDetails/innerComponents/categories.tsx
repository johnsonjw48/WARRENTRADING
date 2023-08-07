import React from 'react';
const BlogCategories: React.FC = () => {
  return (
    <div className="widget-box-2 widget-cateogry-box mb-45">
      <h4 className="fw-semibold mb-30"><span className="line"></span>Categories</h4>
      {/*  end heading */}
      <div className="categories">
        <a href="#">Business <span>45</span></a>
        <a href="#">Consultant <span>25</span></a>
        <a href="#">Creative <span>75</span></a>
        <a href="#">UI/UX <span>55</span></a>
        <a href="#">Technology <span>55</span></a>
      </div>
      {/*  end categories */}
    </div>
  )
}

BlogCategories.displayName = "Blog Categories";
export default BlogCategories;
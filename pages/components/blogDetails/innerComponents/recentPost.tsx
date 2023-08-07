import React from 'react';
import { imagePath } from '../../../../custom.config';
const BlogRecentPosts: React.FC = () => {
  return (
    <div className="widget-box-2 widget-post-box mb-45">
      <h4 className="fw-semibold mb-30"><span className="line"></span>Recent Post</h4>
      {/*  end heading */}
      <div className="media">
        <figure className="me-15">
          <img src={imagePath+"blog/post-thumb-80-1.jpg"} className="img-fluid" alt="" />
        </figure>
        {/*  end figure */}
        <div className="media-body">
          <h6 className="mb-2">
            <a href="javascript:void(0)">Lorem ipsum dolor sit cing elit, sed do.</a>
          </h6>
          <small><i className="uil-calendar-alt me-1 text-danger align-middle"></i>24th March 2019</small>
        </div>
        {/*  end media-body */}
      </div>
      {/*  end media */}
      <div className="media">
        <figure className="me-15">
          <img src={imagePath+"blog/post-thumb-80-2.jpg"} className="img-fluid" alt="" />
        </figure>
        {/*  end figure */}
        <div className="media-body">
          <h6 className="mb-2">
            <a href="javascript:void(0)">Lorem ipsum dolor sit cing elit, sed do.</a>
          </h6>
          <small><i className="uil-calendar-alt me-1 text-danger align-middle"></i> 25th March 2019</small>
        </div>
        {/*  end media-body */}
      </div>
      {/*  end media */}
      <div className="media">
        <figure className="me-15">
          <img src={imagePath+"blog/post-thumb-80-3.jpg"} className="img-fluid" alt="" />
        </figure>
        {/*  end figure */}
        <div className="media-body">
          <h6 className="mb-2">
            <a href="javascript:void(0)">Lorem ipsum dolor sit cing elit, sed do.</a>
          </h6>
          <small><i className="uil-calendar-alt me-1 text-danger align-middle"></i>24th March 2019</small>
        </div>
        {/*  end media-body */}
      </div>
      {/*  end media */}
    </div>
  )
}

BlogRecentPosts.displayName = "Blog Recent Posts";
export default BlogRecentPosts;
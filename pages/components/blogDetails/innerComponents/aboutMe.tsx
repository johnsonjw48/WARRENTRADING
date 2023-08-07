import React from 'react';
import { imagePath } from '../../../../custom.config';
const BlogAboutMe: React.FC = () => {
  return (
    <div className="widget-box-2 mb-45">
      <h4 className="fw-semibold mb-30"><span className="line"></span>A propos de moi</h4>
      {/*  end heading */}
      <div className="content-box text-center">
        <figure className="mb-15">
          <img src='https://james-johnson.fr/assets/images/about-me/moi.jpg' className="img-fluid rounded-circle" alt="" />
        </figure>
        {/*  end figure */}
        <h5 className="fw-bold mb-15">James JOHNSON</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore.</p>
        <div className="social-icons justify-content-center">
          <a href="#"><i className="uil-facebook-f"></i></a>
          <a href="#"><i className="uil-twitter-alt"></i></a>
          <a href="#"><i className="uil-behance-alt"></i></a>
          <a href="#"><i className="uil-linkedin-alt"></i></a>
          <a href="#"><i className="uil-youtube"></i></a>
        </div>
      </div>
      {/*  end content-box */}
    </div>
  )
}

BlogAboutMe.displayName = "Blog About Me";
export default BlogAboutMe;
import React from 'react';
const BlogSocialLinks: React.FC = () => {
  return (
    <div className="widget-box-2 widget-social-link-box mb-45">
      <h4 className="fw-semibold mb-30"><span className="line"></span>Social Links</h4>
      {/*  end heading */}
      <div className="social-icons">
        <a href="#" className="uil uil-facebook-f"></a>
        <a href="#" className="uil uil-twitter-alt"></a>
        <a href="#" className="uil uil-dribbble"></a>
        <a href="#" className="uil uil-linkedin-alt"></a>
        <a href="#" className="uil uil-instagram"></a>
      </div>
      {/*  end social-icon */}
    </div>
  )
}

BlogSocialLinks.displayName = "Blog Social Links";
export default BlogSocialLinks;
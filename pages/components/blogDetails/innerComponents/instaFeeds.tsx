import React from 'react';
import { imagePath } from '../../../../custom.config';
const BlogInstaFeeds: React.FC = () => {
  return (
    <div className="widget-box-2 widget-insta-box mb-45">
    <h4 className="fw-semibold mb-30"><span className="line"></span>Instagram Feeds</h4>
    {/*  end heading */}
    <ul>
      <li><img src={imagePath+"insta/insta-thumb-80-1.jpg"} alt="" /></li>
      <li><img src={imagePath+"insta/insta-thumb-80-2.jpg"} alt="" /></li>
      <li><img src={imagePath+"insta/insta-thumb-80-3.jpg"} alt="" /></li>
      <li><img src={imagePath+"insta/insta-thumb-80-4.jpg"} alt="" /></li>
      <li><img src={imagePath+"insta/insta-thumb-80-5.jpg"} alt="" /></li>
      <li><img src={imagePath+"insta/insta-thumb-80-6.jpg"} alt="" /></li>
      <li><img src={imagePath+"insta/insta-thumb-80-7.jpg"} alt="" /></li>
      <li><img src={imagePath+"insta/insta-thumb-80-8.jpg"} alt="" /></li>
    </ul>
    {/*  end list */}
  </div>
  )
}

BlogInstaFeeds.displayName = "Blog Instagram Feeds";
export default BlogInstaFeeds;
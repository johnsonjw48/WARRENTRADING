import React from 'react';
import BlogAboutMe from './innerComponents/aboutMe';
import BlogCategories from './innerComponents/categories';
import BlogInstaFeeds from './innerComponents/instaFeeds';
import BlogPopularTags from './innerComponents/popularTags';
import BlogRecentPosts from './innerComponents/recentPost';
import BlogSocialLinks from './innerComponents/socialLinks';
import BlogTwitterFeeds from './innerComponents/twitterFeeds';
const BlogRightSidebar: React.FC = () => {
  return (
    <>
      <BlogAboutMe />
      {/*  end widget */}

      <BlogRecentPosts />
      {/*  end widget */}

      <BlogCategories />
      {/*  end widget */}

      <BlogPopularTags />
      {/*  end widget */}

      <BlogSocialLinks />
      {/*  end widget */}

      <BlogInstaFeeds />
      {/*  end widget */}
      
      <BlogTwitterFeeds/>
      {/*  end widget */}
    </>
  )
}

BlogRightSidebar.displayName = "Blog Right Sidebar";
export default BlogRightSidebar;
import NextLink from "next/link";
import React from "react";
import { IBlog } from "../../../typescript/interfaces/blog.interface";
import { imagePath } from "../../../custom.config";

const NewsBox: React.FC<IBlog> = ({ image, title, authorImg, authorName }) => {
  return (
    <div className="single-blog mb-30">
      <div className="blog-image border-radius-2x overflow-hidden">
        <NextLink href="/blog-detail" passHref>
          <a>
            <img src={imagePath + image} alt="news" />
          </a>
        </NextLink>
      </div>
      <div className="blog-content">
        <h5 className="blog-title">
          <NextLink href="/blog-detail" passHref>
            <a>
              {title}
            </a>
          </NextLink>
        </h5>
        <div className="blog-author">
          <img src={imagePath + authorImg} className="me-15" alt="author" />
          <div className="author-content">
            <h6 className="mb-0">Posted by</h6>
            <p className="mb-0">{authorName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

NewsBox.displayName = "News Box"
export default NewsBox;
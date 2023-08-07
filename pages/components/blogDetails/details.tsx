import React from 'react';
import { Alert, Button, Form, Row, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import HTMLParser, { domToReact } from "html-react-parser";
import { imagePath, liveURL } from '../../../custom.config';
import { Blogs } from '../../../typescript/data/blog';
import { IBlog } from '../../../typescript/interfaces/blog.interface';
import NewsBox from '../news/newsBox';
interface IFormData {
  email: string;
  fullname: string;
  message: string;
  subject: string;
}
const BlogDetailContent: React.FC = () => {
  const [message, setMessage] = React.useState<ReturnType<typeof domToReact> | null>(null);
  // form validation rules 
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('Full Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    subject: Yup.string()
      .required('Subject is required'),
    message: Yup.string()
      .required('Message is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = async (data: IFormData, e: React.BaseSyntheticEvent<any> | undefined) => {
    const res = await fetch((process.env.NODE_ENV === 'development' ? '' : liveURL) + '/php/contact.php', {
      body: new FormData((e?.target as HTMLFormElement)),
      method: 'POST'
    })
    const result: string = await res.text()
    if (result) {
      setMessage(HTMLParser(result));
      reset();
    }
    return false;
  }
  return (
    <div className="blog-details-wrapper">
      <div className="blog-content mb-30">
        <a href="#" className="text-primary text-uppercase">Trading</a>
        <h2 className="my-15">Maîtriser Ichimoku : Le Guide Ultime pour Optimiser vos Investissements</h2>
        <ul className="blog-post-meta mb-15">
          <li>
            <i className="uil-calendar-alt me-1 text-primary"></i>
            <span>23rd May 2024</span>
          </li>
          <li>
            <i className="uil-comment me-1 text-primary"></i>
            <span>35 Comments</span>
          </li>
          <li>
            <i className="uil-eye me-1 text-primary"></i> By
            <span>232 Views</span>
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore.</p>
        <figure className="my-30">
          <img src={imagePath + "blog/800-450-1.jpg"} className="img-fluid" alt="" />
        </figure>
        {/* end post img */}
        <div className="item">
          <h3 className="fw-semibold h5">We Develop A New Features</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore.</p>
        </div>
        {/* end item */}
        <div className="item">
          <h3 className="fw-semibold h5">Use a type-centric approach</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore.</p>
        </div>
        {/* end item */}
        <div className="item">
          <h3 className="fw-semibold h5">Give animation a shot</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore.</p>
        </div>
        {/* end item */}
        <blockquote>
          <span className="fs-14 mb-2">By <a href="#" className="text-default">Hetmayer</a></span>
          <h4 className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</h4>
          <figure className="my-30">
            <img src={imagePath + "blog/author-thumb-150.jpg"} className="img-fluid opacity-3" alt="" />
          </figure>
        </blockquote>
        {/* end blockquote */}
        <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore.</p>
        <Row className="align-items-center">
          <Col lg={6} className="mb-30">
            <figure>
              <img src={imagePath + "450-300.jpg"} className="img-fluid" alt="" />
            </figure>
            {/* end img */}
          </Col>
          {/* end col-6 */}
          <Col lg={6} className="mb-15">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit
              esse cillum dolore.</p>
          </Col>
          {/* end col-6 */}
        </Row>
        {/* end row */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore.</p>
      </div>
      {/* end blog-content */}
      <div className="share-post-tag">
        <Row>
          <Col md={6}>
            <div className="post-tag">
              <h5 className="fw-semibold mb-15">Releted Tags</h5>
              <ul className="tag-list">
                <li><a href="#" className="tag">Popular</a></li>
                <li><a href="#" className="tag">Design</a></li>
                <li><a href="#" className="tag">UX</a></li>
              </ul>
              {/* end tag list */}
            </div>
          </Col>
          {/* end col-6 */}
          <Col md={6} className="text-md-end">
            <h5 className="fw-semibold">Social Share</h5>
            <div className="social-icons justify-content-md-end">
              <a href="#"><i className="uil-facebook-f fs-5"></i></a>
              <a href="#"><i className="uil-twitter-alt fs-5"></i></a>
              <a href="#"><i className="uil-behance-alt fs-5"></i></a>
              <a href="#"><i className="uil-linkedin-alt fs-5"></i></a>
              <a href="#"><i className="uil-youtube fs-4"></i></a>
            </div>
            {/* end social-icons */}
          </Col>
          {/* end col-6 */}
        </Row>
        {/* end row */}
      </div>
      {/* end share-post-tag */}
      <div className="post-nav">
        <Row>
          <Col md={6}>
            <div className="prev-nev">
              <span className="fs-14">Prev Post</span>
              <h5 className="fw-semibold mb-0">Tips On Minimalist</h5>
            </div>
            {/* end prev-nav */}
          </Col>
          {/* end col-6 */}
          <Col md={6} className="text-md-end">
            <div className="next-nav">
              <span className="fs-14">Next Post</span>
              <h5 className="fw-semibold mb-0">Less Is More</h5>
            </div>
            {/* end next-nav */}
          </Col>
          {/* end col-6 */}
        </Row>
        {/* end row */}
      </div>
      {/* end post nav */}
      <div className="related-posts mb-45">
        <h5 className="fw-semibold mb-30">Related Post</h5>
        <Swiper slidesPerView={1}
          spaceBetween={0} breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }} className="related-post-slider">
          {
            Blogs.map((item: IBlog, idx: number) => (
              <SwiperSlide key={idx}>
                <NewsBox {...item} key={idx} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* end swiper-container */}
      </div>
      {/* end related post */}
      <div className="author-box mb-45">
        <figure className="author-img me-15">
          <img src={imagePath + "blog/author-thumb-350-200.jpg"} className="img-fluid" alt="" />
        </figure>
        {/* end author-img */}
        <div className="author-text">
          <span className="fs-14">Writtern By</span>
          <h5 className="fw-semibold">John Doe</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is tempor
            incididunt.</p>
        </div>
        {/* end author-text */}
      </div>
      {/* end author-box */}
      <div className="comment-area mb-45">
        <h5 className="fw-semibold mb-30">03 Comments</h5>
        <div className="media">
          <figure className="me-15">
            <img src={imagePath + "author-1.jpg"} className="img-fluid" alt="" />
          </figure>
          {/* end img */}
          <div className="media-body">
            <div className="comment-header">
              <div className="comment-author-info">
                <h6 className="mb-0">Rosalina Kelian</h6>
                <span className="text-primary">19th May 2018</span>
              </div>
              <a href="#" className="reply-btn">
                <i className="uil-share"></i>
                Reply
              </a>
            </div>
            {/* end comment-header */}
            <div className="comment-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            {/* end comment-text */}
          </div>
          {/* end media-body */}
        </div>
        {/* end media */}
        <div className="media">
          <figure className="me-15">
            <img src={imagePath + "author-2.jpg"} className="img-fluid" alt="" />
          </figure>
          {/* end img */}
          <div className="media-body">
            <div className="comment-header">
              <div className="comment-author-info">
                <h6 className="mb-0">Rosalina Kelian</h6>
                <span className="text-primary">19th May 2018</span>
              </div>
              <a href="#" className="reply-btn">
                <i className="uil-share"></i>
                Reply
              </a>
            </div>
            {/* end comment-header */}
            <div className="comment-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="media">
                <figure className="me-15">
                  <img src={imagePath + "author-3.jpg"} className="img-fluid" alt="" />
                </figure>
                {/* end img */}
                <div className="media-body">
                  <div className="comment-header">
                    <div className="comment-author-info">
                      <h6 className="mb-0">Rosalina Kelian</h6>
                      <span className="text-primary">19th May 2018</span>
                    </div>
                    <a href="#" className="reply-btn">
                      <i className="uil-share"></i>
                      Reply
                    </a>
                  </div>
                  {/* end comment-header */}
                  <div className="comment-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  {/* end comment-text */}
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end comment-text */}
          </div>
          {/* end media-body */}
        </div>
        {/* end media */}
      </div>
      {/* end comment-area */}
      <div className="comment-form-area">
        <h5 className="fw-semibold mb-30">Post Comment</h5>
        <div className="comment-form">
          <Form  id="comment-form">
            {
              message && <Alert variant="success">
                {message}
              </Alert>
            }
            <Form.Group className={`form-group mb-30 position-relative ${errors.message ? 'invalid-field' : ''}`}>
              <textarea cols={30} {...register('message')} name="message" rows={10} className="form-control pe-30" placeholder="Type your comment"></textarea>
              <i className="uil uil-clipboard icon"></i>
            </Form.Group>
            <Form.Group className={`form-group mb-30 position-relative ${errors.fullname ? 'invalid-field' : ''}`}>
              <input type="text" {...register('fullname')} name="fullname" className="form-control pe-30" placeholder="Your full name" />
              <i className="uil uil-user icon"></i>
            </Form.Group>
            <Form.Group className={`form-group mb-30 position-relative ${errors.email ? 'invalid-field' : ''}`}>
              <input type="text" {...register('email')} name="email" className="form-control pe-30" placeholder="Your email here" />
              <i className="uil uil-envelope icon"></i>
              {
                errors?.email?.type === 'email' ? <div className="validation-error">{errors.email.message}</div> : <></>
              }
            </Form.Group>
            <Form.Group className={`form-group mb-30 position-relative ${errors.subject ? 'invalid-field' : ''}`}>
              <input type="text" {...register('subject')} name="subject" className="form-control pe-30" placeholder="Your Subject" />
              <i className="uil uil-file icon"></i>
            </Form.Group>
            <div className="clearfix">
              <Button variant="primary" type="submit">
                Submit Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

BlogDetailContent.displayName = "Blog Details Content";
export default BlogDetailContent;
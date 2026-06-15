import React from "react";

const App = () => {
  return (
    <>
      <div>
        {/* START PRELOADER */}
        <div className="preloaders">
          <span className="loader" />
        </div>
        {/* END PRELOADER */}
        {/* START NAVBAR */}
        <div id="navigation" className="navbar-light bg-faded site-navigation">
          <div className="container-fluid">
            <div className="row">
              <div className="col-20 align-self-center">
                <div className="site-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.png" />
                  </a>
                </div>
              </div>
              {/*- END Col */}
              <div className="col-60 d-flex">
                <nav id="main-menu">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home 01</a>
                        </li>
                        <li>
                          <a href="index2.html">Home 02</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="course.html">Course</a>
                      <ul>
                        <li>
                          <a href="course.html">Course</a>
                        </li>
                        <li>
                          <a href="course_details.html">Course Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="instructor.html">Instructor</a>
                        </li>
                        <li>
                          <a href="ins_details.html">Instructor Details</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Plan</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq Page</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog_single.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*- END Col */}
              <div className="col-20 d-none d-xl-block text-end align-self-center">
                <a href="#" className="header-btn">
                  Sign In
                </a>
                <a href="contact.html" className="btn_one">
                  Sign Up
                </a>
              </div>
              {/*- END Col */}
              <ul className="mobile_menu">
                <li>
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home 01</a>
                    </li>
                    <li>
                      <a href="index2.html">Home 02</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#">Course</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="course.html">Course</a>
                    </li>
                    <li>
                      <a href="course_details.html">Course Deails</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="instructor.html">Instructor</a>
                    </li>
                    <li>
                      <a href="ins_details.html">Instructor Details</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq Page</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog_single.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </div>
        {/* END NAVBAR */}
        {/* START HOME */}
        <section
          className="home_bg hb_height"
          style={{
            backgroundImage: "url(assets/img/bg/home-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="hero-text ht_top">
                  <h1>
                    <span>Smart Study</span> Where Knowledge Meets the Web
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    consectetur adipiscing elit tempor ut labore
                  </p>
                </div>
                <div className="home_sb">
                  <form action="#" className="banner_subs">
                    <input
                      type="text"
                      className="form-control home_si"
                      placeholder="Search your course here"
                      required="required"
                    />
                    <button type="button" className="subscribe__btn">
                      Search <i className="fa fa-paper-plane-o" />
                    </button>
                  </form>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="hero-text-img">
                  <img
                    src="assets/img/home-img2.png"
                    className="img-fluid"
                  
                  />
                  <div className="home_ps">
                    <span className="ti-user" />
                    <h2>4500+</h2>
                    <p>Active student</p>
                  </div>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END  HOME */}
        {/* START COUNTER */}
        <section className="count_area counter_feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter">
                  <span className="ti-folder sc_one" />
                  <h2 className="counter-num">134</h2>
                  <p>Our Online Course</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter">
                  <span className="ti-medall sc_two" />
                  <h2 className="counter-num">299</h2>
                  <p>Academic Programs</p>
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter">
                  <span className="ti-id-badge sc_three" />
                  <h2 className="counter-num">684</h2>
                  <p>Certified Students</p>
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter">
                  <span className="ti-user sc_four" />
                  <h2 className="counter-num">941</h2>
                  <p>Enrolled Students</p>
                </div>
              </div>
              {/* END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END COUNTER */}
        {/* START CATEGORY */}
        <section
          className="top_cat__area section-padding"
          style={{
            backgroundImage: "url(assets/img/bg/shape-1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>Start your journey With us</h2>
              <p>
                We offer a brand new approach to the most basic learning
                paradigms. Choose from a wide range of learning options and gain
                new skills! Our school is know.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div className="single_tp">
                  <span className="sc_one">01</span>
                  <h3>
                    Expert <br />
                    Teacher
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit ut labore.
                  </p>
                </div>
              </div>
              {/* END COL */}
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="single_tp">
                  <span className="sc_two">02</span>
                  <h3>
                    Quality <br />
                    Education
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit ut labore.
                  </p>
                </div>
              </div>
              {/* END COL */}
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-wow-offset={0}
              >
                <div className="single_tp">
                  <span className="sc_three">03</span>
                  <h3>
                    Remote <br />
                    Learning
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit ut labore.
                  </p>
                </div>
              </div>
              {/* END COL */}
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-wow-offset={0}
              >
                <div className="single_tp">
                  <span className="sc_four">04</span>
                  <h3>
                    Life Time <br />
                    Support
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit ut labore.
                  </p>
                </div>
              </div>
              {/* END COL */}
            </div>
            {/* END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END CATEGORY */}
        {/* START ABOUT US */}
        <section className="ab_area section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div className="ab_img">
                  <img
                    src="assets/img/about1.png"
                    className="img-fluid"
                  />
                </div>
              </div>
              {/*- END COL */}
              <div
                className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="ab_content">
                  <h2>We Are Providing The Online Course In Global World</h2>
                  <p>
                    We offer a brand new approach to the most basic learning
                    paradigms. Choose from a wide range of learning options and
                    gain new skills! Our school is know.
                  </p>
                  <p>
                    We offer a brand new approach to the most basic learning
                    paradigms. Choose from a wide range of learning options and
                    gain new skills! Our school is know.
                  </p>
                  <ul>
                    <li>
                      <span className="ti-check" /> Get access to <b>12,000+</b>{" "}
                      of our top courses
                    </li>
                    <li>
                      <span className="ti-check" /> Popular topic to learn now
                      in our online courses for student
                    </li>
                    <li>
                      <span className="ti-check" /> Find the right instructor
                      for you
                    </li>
                  </ul>
                  <a className="btn_one" href="course.html">
                    View All Courses <i className="ti-arrow-top-right" />
                  </a>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END ABOUT US */}
        {/* START CATEGORY */}
        <section
          className="top_cat__area section-padding"
          style={{
            backgroundImage: "url(assets/img/bg/section-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>Find out by popular Categories</h2>
              <p>
                We offer a brand new approach to the most basic learning
                paradigms. Choose from a wide range of learning options and gain
                new skills! Our school is know.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-12 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="cat_list">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="assets/img/e1.png" />{" "}
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e2.png" />{" "}
                        UI/UX Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e3.png" /> 3D
                        Visual Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e4.png" />{" "}
                        Content Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e5.png" />{" "}
                        Photography
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e6.png"/>{" "}
                        Photo Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e7.png"/> Art
                        &amp; Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e8.png"/>{" "}
                        Finance &amp; Banking
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e9.png"/>{" "}
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e2.png" />{" "}
                        Interior Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e3.png" /> 3D
                        Visual Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/e7.png"/> Art
                        &amp; Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END CATEGORY */}
        {/* START COURSE */}
        <section className="home_course section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-6 col-xs-12">
                <div className="section-title">
                  <h2>
                    Join with more than <b>80,000+ </b> <br />
                    Courses &amp; Learning creators.
                  </h2>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="cour_btn">
                  <a href="course.html" className="btn_one">
                    View all Courses <i className="ti-arrow-top-right" />
                  </a>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_course">
                  <div className="single_c_img">
                    <img
                      src="assets/img/course/1.png"
                      className="img-fluid"
                    />
                    <span>Education</span>
                  </div>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <h4>
                    <a href="course.html">
                      Complete User fundamentals beginners to advanced
                    </a>
                  </h4>
                  <p>
                    <span className="ti-book"> </span> 12 Course
                  </p>
                  <p>
                    <span className="ti-alarm-clock"> </span>2 Hrs 32 Min
                  </p>
                  <div className="price">Course Fee - 99$</div>
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_course">
                  <div className="single_c_img">
                    <img
                      src="assets/img/course/2.png"
                      className="img-fluid"
                    />
                    <span>UI/UX</span>
                  </div>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <h4>
                    <a href="course.html">
                      Advanced Android 12 &amp; Kotlin Development Course
                    </a>
                  </h4>
                  <p>
                    <span className="ti-book"> </span> 41 Course
                  </p>
                  <p>
                    <span className="ti-alarm-clock"> </span>3 Hrs 32 Min
                  </p>
                  <div className="price">Course Fee - 49$</div>
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_course">
                  <div className="single_c_img">
                    <img
                      src="assets/img/course/3.png"
                      className="img-flui"
                    />
                    <span>Lifestyle</span>
                  </div>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <h4>
                    <a href="course.html">
                      Complete HTML, CSS and Javascript Course
                    </a>
                  </h4>
                  <p>
                    <span className="ti-book"> </span> 32 Course
                  </p>
                  <p>
                    <span className="ti-alarm-clock"> </span>2 Hrs 32 Min
                  </p>
                  <div className="price">Course Fee - Free</div>
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_course">
                  <div className="single_c_img">
                    <img
                      src="assets/img/course/4.png"
                      className="img-fluid"
                    />
                    <span>Science</span>
                  </div>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <h4>
                    <a href="course.html">
                      IOS and Swift Complete iOS Application Development
                    </a>
                  </h4>
                  <p>
                    <span className="ti-book"> </span> 19 Course
                  </p>
                  <p>
                    <span className="ti-alarm-clock"> </span>2 Hrs 32 Min
                  </p>
                  <div className="price">Course Fee - 59$</div>
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_course">
                  <div className="single_c_img">
                    <img
                      src="assets/img/course/5.png"
                      className="img-fluid"
                    />
                    <span>Modern</span>
                  </div>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <h4>
                    <a href="course.html">
                      Learn graphics design with a best IT Trainer
                    </a>
                  </h4>
                  <p>
                    <span className="ti-book"> </span> 22 Course
                  </p>
                  <p>
                    <span className="ti-alarm-clock"> </span>2 Hrs 32 Min
                  </p>
                  <div className="price">Course Fee - 79$</div>
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_course">
                  <div className="single_c_img">
                    <img
                      src="assets/img/course/6.png"
                      className="img-fluid"
                    />
                    <span>Marketing</span>
                  </div>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <h4>
                    <a href="course.html">
                      Complete data science for your next business
                    </a>
                  </h4>
                  <p>
                    <span className="ti-book"> </span> 11 Course
                  </p>
                  <p>
                    <span className="ti-alarm-clock"> </span>2 Hrs 32 Min
                  </p>
                  <div className="price">Course Fee - 39$</div>
                </div>
              </div>
              {/* END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END COURSE */}
        {/* START COMPANY PARTNER LOGO  */}
        <div className="partner-logo section-padding">
          <div className="container">
            <div className="row part_bg">
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="partner_title">
                  <h3>
                    Helping <span>86,000+</span> global companies take the
                    gloves off{" "}
                  </h3>
                </div>
              </div>
              {/* END COL  */}
              <div className="col-lg-8 col-sm-8 col-xs-12 text-center">
                <div className="partner">
                  <a href="#">
                    <img src="assets/img/clients/1.png"/>
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/2.png" />
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/3.png"/>
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/4.png"/>
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/5.png"/>
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/2.png"/>
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/1.png"/>
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/3.png"/>
                  </a>
                  <a href="#">
                    <img src="assets/img/clients/4.png"/>
                  </a>
                </div>
              </div>
              {/* END COL  */}
            </div>
            {/*END  ROW  */}
          </div>
          {/* END CONTAINER  */}
        </div>
        {/* END COMPANY PARTNER LOGO */}
        {/* START VIDEO */}
        <section className="vid_area section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 vp_top wow fadeInUDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div
                  className="video-area"
                  style={{
                    backgroundImage: "url(assets/img/bg/video.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=RXv_uIN6e-Y"
                    className="magnific_popup video-button"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END VIDEO */}
        {/* START TEAM */}
        <section className="team_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h2>Meet our Instructors</h2>
              <p>
                We offer a brand new approach to the most basic learning
                paradigms. Choose from a wide range of learning options and gain
                new skills! Our school is know.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="our-team">
                  <div className="team-content">
                    <a href="#">
                      <img src="assets/img/team/team1.jpg" alt />
                    </a>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-x" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-prof">
                    <h3>Bilkis Vabi</h3>
                    <span>Web designer</span>
                  </div>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {" "}
                      <u>04 Course</u>
                    </span>
                    <span className="ti-user">
                      {" "}
                      <u>27 Student</u>
                    </span>
                  </div>
                </div>
              </div>
              {/*- END COL */}
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="our-team">
                  <div className="team-content">
                    <a href="#">
                      <img src="assets/img/team/team2.jpg" alt />
                    </a>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-x" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-prof">
                    <h3>Mood Wasim</h3>
                    <span>TemplateMonster company</span>
                  </div>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {" "}
                      <u>06 Course</u>
                    </span>
                    <span className="ti-user">
                      {" "}
                      <u>41 Student</u>
                    </span>
                  </div>
                </div>
              </div>
              {/*- END COL */}
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="our-team">
                  <div className="team-content">
                    <a href="#">
                      <img src="assets/img/team/team3.jpg" alt />
                    </a>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-x" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-prof">
                    <h3>Shyinn tim</h3>
                    <span>Codecanyou</span>
                  </div>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {" "}
                      <u>13 Course</u>
                    </span>
                    <span className="ti-user">
                      {" "}
                      <u>31 Student</u>
                    </span>
                  </div>
                </div>
              </div>
              {/*- END COL */}
              <div
                className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="our-team">
                  <div className="team-content">
                    <a href="#">
                      <img src="assets/img/team/team4.jpg" alt />
                    </a>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-x" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-prof">
                    <h3>Shorif shorifa</h3>
                    <span>Tsc chottor</span>
                  </div>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {" "}
                      <u>07 Course</u>
                    </span>
                    <span className="ti-user">
                      {" "}
                      <u>24 Student</u>
                    </span>
                  </div>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END TEAM */}
        {/* START PROMO */}
        <section className="ab_area section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="ab_content">
                  <h2>Why Choose Us For Your Online Education Courses</h2>
                  <p>
                    We offer a brand new approach to the most basic learning
                    paradigms. Choose from a wide range of learning options and
                    gain new skills! Our school is know.
                  </p>
                  <p>
                    We offer a brand new approach to the most basic learning
                    paradigms. Choose from a wide range of learning options and
                    gain new skills! Our school is know.
                  </p>
                  <ul>
                    <li>
                      <span className="ti-check" /> Get access to <b>12,000+</b>{" "}
                      of our top courses
                    </li>
                    <li>
                      <span className="ti-check" /> Popular topic to learn now
                      in our online courses for student
                    </li>
                    <li>
                      <span className="ti-check" /> Find the right instructor
                      for you
                    </li>
                  </ul>
                  <a className="btn_one" href="course.html">
                    View All Courses <i className="ti-arrow-top-right" />
                  </a>
                </div>
              </div>
              {/*- END COL */}
              <div
                className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div className="ab_img">
                  <img
                    src="assets/img/about3.png"
                    className="img-fluid"
                    alt="image"
                  />
                  <div className="home_ps2">
                    <span className="ti-book" />
                    <h2>3300+</h2>
                    <p>Online Course</p>
                  </div>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END PROMO */}
        {/* START TESTIMONIALS */}
        <section className="testi_area section-padding">
          <div className="container">
            <div className="section-title">
              <h2>
                What Student’s Say To Do <br />
                Their Online Course
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="ab_img">
                  <img
                    src="assets/img/review.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
              {/* END COL */}
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div id="testimonial-slider" className="owl-carousel">
                  <div className="testimonial">
                    <img src="assets/img/quote.png" alt />
                    <div className="testimonial_content">
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <p>
                        Aqestic optio amet a ququam saepe aliquid voluate dicta
                        fuga dolor saerror sed earum a magni soluta quam minus
                        dolor dolor sed earum a magni soluta autem dolor error
                        error sit quam minus sint rem a rerum dolobus veritatis
                        delectus.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <img src="assets/img/testimonial/1.png" alt />
                      <h4>Ajmain Adil</h4>
                      <p>Groton Inc</p>
                    </div>
                  </div>
                  {/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <img src="assets/img/quote.png" alt />
                    <div className="testimonial_content">
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <p>
                        Aqestic optio amet a ququam saepe aliquid voluate dicta
                        fuga dolor saerror sed earum a magni soluta quam minus
                        dolor dolor sed earum a magni soluta autem dolor error
                        error sit quam minus sint rem a rerum dolobus veritatis
                        delectus.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <img src="assets/img/testimonial/2.png" alt />
                      <h4>Sharukh Khan</h4>
                      <p>Red Chili Inc</p>
                    </div>
                  </div>
                  {/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <img src="assets/img/quote.png" alt />
                    <div className="testimonial_content">
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <p>
                        Aqestic optio amet a ququam saepe aliquid voluate dicta
                        fuga dolor saerror sed earum a magni soluta quam minus
                        dolor dolor sed earum a magni soluta autem dolor error
                        error sit quam minus sint rem a rerum dolobus veritatis
                        delectus.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <img src="assets/img/testimonial/3.png" alt />
                      <h4>Anushka sharma</h4>
                      <p>Naika Company</p>
                    </div>
                  </div>
                  {/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <img src="assets/img/quote.png" alt />
                    <div className="testimonial_content">
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <p>
                        Aqestic optio amet a ququam saepe aliquid voluate dicta
                        fuga dolor saerror sed earum a magni soluta quam minus
                        dolor dolor sed earum a magni soluta autem dolor error
                        error sit quam minus sint rem a rerum dolobus veritatis
                        delectus.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <img src="assets/img/testimonial/4.png" alt />
                      <h4>Ajmain Adil</h4>
                      <p>Groton Inc</p>
                    </div>
                  </div>
                  {/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <img src="assets/img/quote.png" alt />
                    <div className="testimonial_content">
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <i className="ti-star" />
                      <p>
                        Aqestic optio amet a ququam saepe aliquid voluate dicta
                        fuga dolor saerror sed earum a magni soluta quam minus
                        dolor dolor sed earum a magni soluta autem dolor error
                        error sit quam minus sint rem a rerum dolobus veritatis
                        delectus.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <img src="assets/img/testimonial/5.png" alt />
                      <h4>Ajmain Adil</h4>
                      <p>Groton Inc</p>
                    </div>
                  </div>
                  {/* END TESTIMONIAL */}
                </div>
                {/* END TESTIMONIAL SLIDER */}
              </div>
              {/* END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END TESTINUNIALS */}
        {/* START BLOG */}
        <section id="blog" className="blog_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h2>Latest Blog &amp; news</h2>
              <p>
                We offer a brand new approach to the most basic learning
                paradigms. Choose from a wide range of learning options and gain
                new skills! Our school is know.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="single_blog">
                  <img
                    src="assets/img/blog/1.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <div className="content_box">
                    <span>
                      May 10, 2024 | <a href="blog.html">Education</a>
                    </span>
                    <h2>
                      <a href="blog.html">
                        Professional Mobile Painting and Sculpting
                      </a>
                    </h2>
                    <a className="btn_one" href="blog.html">
                      Read More <i className="ti-arrow-top-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* END COL*/}
              <div
                className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="single_blog">
                  <img
                    src="assets/img/blog/2.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <div className="content_box">
                    <span>
                      May 16, 2024 | <a href="blog.html">Education</a>
                    </span>
                    <h2>
                      <a href="blog.html">
                        Professional Ceramic Moulding for Beginner
                      </a>
                    </h2>
                    <a className="btn_one" href="blog.html">
                      Read More <i className="ti-arrow-top-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* END COL*/}
              <div
                className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="single_blog">
                  <img
                    src="assets/img/blog/3.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <div className="content_box">
                    <span>
                      May 18, 2024 | <a href="blog.html">Programing</a>
                    </span>
                    <h2>
                      <a href="blog.html">
                        Education Is About Create Leaders For Tomorrow{" "}
                      </a>
                    </h2>
                    <a className="btn_one" href="blog.html">
                      Read More <i className="ti-arrow-top-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* END COL*/}
            </div>
            {/* / END ROW */}
          </div>
          {/* END CONTAINER  */}
        </section>
        {/* END BLOG */}
        {/* START FOOTER */}
        <div className="footer section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <a href="index.html">
                    <img src="assets/img/logo.png" alt />
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vitae risus nec dui venenatis dignissim.
                  </p>
                  <div className="social_profile">
                    <ul>
                      <li>
                        <a className="f_facebook" href="#">
                          <i className="fa-solid fa-x" />
                        </a>
                      </li>
                      <li>
                        <a className="f_twitter" href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a className="f_instagram" href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a className="f_linkedin" href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>About Eduleb</h4>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Instructor Registration</a>
                    </li>
                    <li>
                      <a href="#">Become A Teacher</a>
                    </li>
                    <li>
                      <a href="#">All Instrustors</a>
                    </li>
                    <li>
                      <a href="#">Asked Question</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Popular Courese</h4>
                  <ul>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Arts &amp; design</a>
                    </li>
                    <li>
                      <a href="#">Visual Design</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                    <li>
                      <a href="#">Code Inspection</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Contact Info</h4>
                  <div className="sf_contact">
                    <span className="ti-map" />
                    <p>2570 Quadra Street Victoria Road, New York, Canada</p>
                  </div>
                  <div className="sf_contact">
                    <span className="ti-mobile" />
                    <p>+88 457 845 695</p>
                  </div>
                  <div className="sf_contact">
                    <span className="ti-mobile" />
                    <p>
                      <a href="tel:+88457845695">Contact Whatsapp</a>
                    </p>
                  </div>
                  <div className="sf_contact">
                    <span className="ti-email" />
                    <p>example@yourmail.com</p>
                  </div>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Download App</h4>
                  <p>Download our app from app store and goole play store.</p>
                  <a href="index.html">
                    <img
                      src="assets/img/google-play.jpg"
                      className="foot_img"
                      alt
                    />
                  </a>
                  <a href="index.html">
                    <img
                      src="assets/img/app-store.jpg"
                      className="foot_img"
                      alt
                    />
                  </a>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </div>
        {/* END FOOTER */}
        {/* START FOOTER COPYRIGHT */}
        <div className="foot_copy">
          <div className="footer_copyright">
            <p>
              © 2024. All Rights Reserved by{" "}
              <a href="https://bestwpware.com/">Bestwpware</a> • Distributed by{" "}
              <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
        </div>
        {/* END FOOTER COPYRIGHT */}
      </div>
    </>
  );
};

export default App;

import React from "react";
import Style from "./Blog.module.css";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import postImg from "./img/1.jpeg";
import { Button } from "antd";

const Blog = () => {
  return (
    <div className={Style.BlogWrap}>
      <div className={Style.BlogTitleWrap}>
        <h1 className={Style.BlogTitle}>Latest news</h1>
        <h4 className={Style.BlogitleText}>
          Wanna be updated with our news or interested in visiting our events,
          just read our blog
        </h4>
      </div>
      <Row gutter={24}>
        <Col xs={24} md={12}>
          <div className={Style.BlogItemWrap}>
            <div className={Style.BlogItemTop}>
              <Image
                objectFit="contain"
                src={postImg}
                layout="fill"
                alt="Sample post with Image"
              ></Image>
            </div>
            <div className={Style.BlogItemBottom}>
              <Link href="/">
                <h1 className={Style.BlogItemTitle}>Sample post with Image</h1>
              </Link>
              <p className={Style.BlogItemText}>
                This is necessary because the Next client-side router is quite
                light and doesn’t know about the structure of your whole route.
                This scales quite well since you don’t hold complicated routing
                structures in browser memory, as in other routing systems.
              </p>
              <p className={Style.BlogItemDate}>JUNE 17, 2018</p>
              <Button
                className={`${Style.BlogReadMoreButton} custom-ant-btn`}
                size={"large"}
                type="primary"
              >
                Read more
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={Style.BlogItemWrap}>
            <div className={Style.BlogItemTop}>
              <Image
                objectFit="contain"
                src={postImg}
                layout="fill"
                alt="Sample post with Image"
              ></Image>
            </div>
            <div className={Style.BlogItemBottom}>
              <Link href="/footer">
                <h1 className={Style.BlogItemTitle}>Sample post with Image</h1>
              </Link>
              <p className={Style.BlogItemText}>
                Those techniques have helped me a lot over the years working
                with React applications. They are relatively simple but help you
                to decouple your application from underlying libraries, make
                your system easy to change, and have type safety. I hope you
                find them useful as well. For any questions or comments, you can
                ping me on Twitter.
              </p>
              <p className={Style.BlogItemDate}>JUNE 17, 2018</p>
              <Button
                className={`${Style.BlogReadMoreButton} custom-ant-btn`}
                size={"large"}
                type="primary"
              >
                Read more
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={Style.BlogItemWrap}>
            <div className={Style.BlogItemTop}>
              <Image
                objectFit="contain"
                src={postImg}
                layout="fill"
                alt="Sample post with Image"
              ></Image>
            </div>
            <div className={Style.BlogItemBottom}>
              <Link href="/">
                <h1 className={Style.BlogItemTitle}>Sample post with Image</h1>
              </Link>
              <p className={Style.BlogItemText}>
                Debugging Next applications can be difficult, especially when
                users experience issues that are difficult to reproduce. If
                you’re interested in monitoring and tracking state,
                automatically surfacing JavaScript errors, and tracking slow
                network requests and component load time, try LogRocket.
              </p>
              <p className={Style.BlogItemDate}>JUNE 17, 2018</p>
              <Button
                className={`${Style.BlogReadMoreButton} custom-ant-btn`}
                size={"large"}
                type="primary"
              >
                Read more
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={Style.BlogItemWrap}>
            <div className={Style.BlogItemTop}>
              <Image
                objectFit="contain"
                src={postImg}
                layout="fill"
                alt="Sample post with Image"
              ></Image>
            </div>
            <div className={Style.BlogItemBottom}>
              <Link href="/">
                <h1 className={Style.BlogItemTitle}>Sample post with Image</h1>
              </Link>
              <p className={Style.BlogItemText}>
                LogRocket is like a DVR for web apps, recording literally
                everything that happens on your Next app. Instead of guessing
                why problems happen, you can aggregate and report on what state
                your application was in when an issue occurred. LogRocket also
                monitors your performance, reporting with metrics like client
                CPU load, client memory usage, and more.
              </p>
              <p className={Style.BlogItemDate}>JUNE 17, 2018</p>
              <Button
                className={`${Style.BlogReadMoreButton} custom-ant-btn`}
                size={"large"}
                type="primary"
              >
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;

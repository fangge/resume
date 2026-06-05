import React from "react";

import "../index/styles/index.scss";
import huyaLogo from "@img/huya.png";
import yyLogo from "@img/yy.jpg";
// import lofterLogo from "@img/lofter.png";
import neteaseLogo from "@img/netease.png";
import gdut from "@img/gdut.png";

const App: React.FC = () => {
  return (
    <section className="resume">
      <section className="resume-top">
        <p className="last-modified">Last Updated: June 2026</p>
      </section>

      <main className="content">
        {/* <!--Basic Info--> */}
        <header className="content-hd">
          <section className="title">
            <div className="name">
              <h1>Yang Fang</h1>
            </div>
            <div className="job">
              <h2>Frontend Developer</h2>
            </div>
          </section>
          <section className="info">
            <ul>
              <li>Male</li>
              <li>Experience: 12 Years</li>
              <li>Location: Guangzhou</li>
            </ul>
          </section>
          <section className="contact">
            <ul>
              <li>
                <a href="https://www.mrfangge.com/" target="_blank">
                  <span className="contact-link">mrfangge.com</span>
                  <span className="iconfont">
                    <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                      <path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:fangge-sun@163.com">
                  <span className="contact-link">fangge-sun@163.com</span>
                  <span className="iconfont">
                    <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                      <path d="M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span className="contact-link">+86-13450368506</span>
                  <span className="iconfont">
                    <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                      <path d="M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z"></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </header>

        <div className="content-bd">
          <div className="content">
            <section className="practice">
              <header className="section-hd">
                <span className="section-title-l"></span>
                <h2 className="section-title">Professional Summary</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                <div className="item">
                  <div className="item-bd">
                    <div className="section-content">
                      <p>
                        Senior Frontend Engineer with 12 years of experience, specializing in mobile H5 development, engineering architecture, component library development, and AI-driven productivity enhancement. Led the frontend architecture design and development for Huya's core business lines including DIY Platform, Payment, Authentication, and Interstitial Pages. Developed 3 core team npm packages and built a repository of 50+ reusable business components covering 90%+ of revenue activity scenarios. Proficient in leveraging LLMs and AI-assisted development tools to implement AI-powered assistants and Prompt Engineering systems, significantly improving team development efficiency. Strong cross-team collaboration skills with continuous research and practice in cutting-edge frontend technologies (AI Agents, Edge Intelligence).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="content no-margin">
            <section className="practice no-margin">
              <header className="section-hd">
                <span className="section-title-l"></span>
                <h2 className="section-title">Education</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <svg
                        t="1648574697098"
                        className="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2467"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M945.4 383.3l-399-204.6c-23.7-12.1-51.9-12.1-75.5 0.2L77.2 383.4c-9.8 5.1-15.8 15.1-15.8 26.1 0 11 6.1 21 15.8 26.1l37.5 19.5v193.5c-14.8 8.3-25 24-25 42.2 0 26.8 21.7 48.5 48.5 48.5s48.5-21.7 48.5-48.5c0-18.2-10.1-33.9-25-42.2v-169l104.5 54.3V746c0 25.7 16.5 48.2 41 56L432 841.7c25.6 8.1 52 12.2 78.3 12.2 25.3 0 50.6-3.7 75.2-11.2l134.1-40.8c24.8-7.6 41.6-30.1 41.7-56l0.8-216.2 183.3-94c9.9-5.1 16-15.1 16-26.1-0.1-11.2-6.2-21.2-16-26.3zM714.2 745.7c0 5.2-3.4 9.7-8.3 11.2l-134.1 40.8c-41.2 12.5-84.6 12.2-125.7-0.8l-124.7-39.6c-4.9-1.6-8.2-6.1-8.2-11.2v-188L470.9 640c11.9 6.2 24.9 9.3 37.9 9.3 12.9 0 25.8-3 37.6-9.1l168.5-86.4-0.7 191.9zM525 598.4c-10.1 5.2-22.2 5.2-32.3-0.1L129 409.4l363.6-188.8c10.1-5.3 22.2-5.3 32.3-0.1l368.4 188.9-368.3 189z"
                          p-id="2468"
                        ></path>
                      </svg>
                      Guangdong University of Technology - Computer Science and Technology - B.S.
                    </h3>
                    <span className="item-time">2009.09 - 2013.06</span>
                    <a className="link-icon">
                      <img src={gdut} className="logo" />
                    </a>
                  </header>
                </div>
              </div>
            </section>
          </div>
          <div className="content">
            <section className="practice">
              <header className="section-hd">
                <span className="section-title-l"></span>
                <h2 className="section-title">Work Experience</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                {/* <!--Work Experience--> */}
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <svg
                        t="1648487658565"
                        className="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5686"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M956.624449 922.846357h-29.442936V592.832598c0-17.701887-8.850944-41.545246-29.984829-50.396189l-267.334627-174.851297V93.747751l-2.890104-6.141471C614.869642 57.802081 588.316811 42.809667 555.622508 48.770506L136.376786 173.586876c-23.843359 8.850944-41.545246 32.694302-41.545246 59.427765v689.831716H64.84671c-18.243782 0-29.98483 14.992415-29.98483 29.98483 0 18.243782 12.102311 29.98483 29.98483 29.98483h891.777739c18.243782 0 29.98483-12.102311 29.98483-29.98483-0.180632-18.243782-12.282942-29.98483-29.98483-29.98483z m-89.231964-333.265126v333.265126H629.862057V435.683189l237.530428 153.898042zM153.536779 233.014641l415.994355-124.81637v814.648086H153.536779V233.014641z"
                          p-id="5687"
                        ></path>
                        <path
                          d="M450.856236 325.136708H272.753572c-18.243782 0-29.98483 11.741048-29.98483 29.98483 0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-11.741048 29.984829-29.98483 0-18.424413-12.282942-29.98483-29.984829-29.98483zM450.856236 503.058741H272.753572c-18.243782 0-29.98483 12.102311-29.98483 29.984829v0.361263c0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-12.102311 29.984829-29.98483v-0.180631-0.180632c0-18.243782-12.282942-29.98483-29.984829-29.984829zM450.856236 681.703299H272.753572c-18.243782 0-29.98483 11.741048-29.98483 29.984829v0.361263c0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-11.741048 29.984829-29.98483v-0.180631-0.180632c0-18.243782-12.282942-29.98483-29.984829-29.984829zM688.747927 712.049391c0 18.243782 12.102311 29.98483 29.98483 29.98483h59.427765c18.243782 0 29.98483-11.741048 29.98483-29.98483v-0.180631-0.180632c0-18.243782-12.102311-29.98483-29.98483-29.984829h-59.427765c-18.243782 0-29.98483 11.741048-29.98483 29.984829v0.361263z"
                          p-id="5688"
                        ></path>
                      </svg>
                      <strong>Huya Technology (Guangzhou)</strong>
                    </h3>
                    <span className="item-time">Dec 2016 - Present</span>
                    <a className="link-icon">
                      <img src={huyaLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      Responsible for frontend development and architecture maintenance of Huya's core esports and revenue business lines (DIY Platform, Payment, Authentication) as well as AI-powered applications. Leading team engineering infrastructure and component library development, supporting rapid deployment of hundreds of events annually.
                    </p>
                    <ul className="section-content">
                      <li><i>DIY Platform Core Development</i>: Leading the overall frontend architecture iteration of the DIY Platform, building mobile-standardized development templates based on React 18 + pnpm v10 + Node v22+, unifying the team's tech stack and development standards; designing global JS/CSS build system (Gulp) and Tiger deployment process to ensure stable online resource updates.</li>
                      <li><i>Component Library &amp; npm Ecosystem</i>: Developed 3 core team npm packages (@diy-npm/diyrealprizeCollect for address collection, @diy-npm/diybindGame for game binding, @diy-npm/utils utility library), accumulated 50+ reusable business components across 12 categories including friend referral, task lottery, points redemption, badges, leaderboards, and custom tournaments. Component reuse rate reached 80%, reducing single event development cycle by 50%.</li>
                      <li><i>DIY Platform AI Assistant</i>: Implemented AI capabilities based on Dify platform for component Q&amp;A, configuration recommendations, and troubleshooting.</li>
                      <li><i>Core Business Support</i>: Development and maintenance of Huya's full-scenario real-name authentication system (streaming authentication, coaching certification, withdrawal verification, off-app mall verification), third-party payment system, 4 core business interstitial pages, and @huyafed/openapp SDK for launching Huya app, supporting stable operation of 10+ core business lines.</li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <svg
                        t="1648487658565"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5686"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M956.624449 922.846357h-29.442936V592.832598c0-17.701887-8.850944-41.545246-29.984829-50.396189l-267.334627-174.851297V93.747751l-2.890104-6.141471C614.869642 57.802081 588.316811 42.809667 555.622508 48.770506L136.376786 173.586876c-23.843359 8.850944-41.545246 32.694302-41.545246 59.427765v689.831716H64.84671c-18.243782 0-29.98483 14.992415-29.98483 29.98483 0 18.243782 12.102311 29.98483 29.98483 29.98483h891.777739c18.243782 0 29.98483-12.102311 29.98483-29.98483-0.180632-18.243782-12.282942-29.98483-29.98483-29.98483z m-89.231964-333.265126v333.265126H629.862057V435.683189l237.530428 153.898042zM153.536779 233.014641l415.994355-124.81637v814.648086H153.536779V233.014641z"
                          p-id="5687"
                        ></path>
                        <path
                          d="M450.856236 325.136708H272.753572c-18.243782 0-29.98483 11.741048-29.98483 29.98483 0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-11.741048 29.984829-29.98483 0-18.424413-12.282942-29.98483-29.984829-29.98483zM450.856236 503.058741H272.753572c-18.243782 0-29.98483 12.102311-29.98483 29.984829v0.361263c0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-12.102311 29.984829-29.98483v-0.180631-0.180632c0-18.243782-12.282942-29.98483-29.984829-29.984829zM450.856236 681.703299H272.753572c-18.243782 0-29.98483 11.741048-29.98483 29.984829v0.361263c0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-11.741048 29.984829-29.98483v-0.180631-0.180632c0-18.243782-12.282942-29.98483-29.984829-29.984829zM688.747927 712.049391c0 18.243782 12.102311 29.98483 29.98483 29.98483h59.427765c18.243782 0 29.98483-11.741048 29.98483-29.98483v-0.180631-0.180632c0-18.243782-12.102311-29.98483-29.98483-29.984829h-59.427765c-18.243782 0-29.98483 11.741048-29.98483 29.984829v0.361263z"
                          p-id="5688"
                        ></path>
                      </svg>
                      YY Inc. (Guangzhou)
                    </h3>
                    <span className="item-time">Jun 2014 - Dec 2016</span>
                    <a className="link-icon">
                      <img src={yyLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      Responsible for frontend development of <i>Duowan</i> and <i>Huya Video</i>
                      businesses at the Website Center, including:
                    </p>
                    <ul className="section-content">
                      <li>Led the frontend redesign of Duowan website and mobile site</li>
                      <li>Developed game collaboration landing pages for Duowan-related games</li>
                      <li>Led the frontend redesign of Huya Video website and mobile site</li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <svg
                        t="1648487658565"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5686"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M956.624449 922.846357h-29.442936V592.832598c0-17.701887-8.850944-41.545246-29.984829-50.396189l-267.334627-174.851297V93.747751l-2.890104-6.141471C614.869642 57.802081 588.316811 42.809667 555.622508 48.770506L136.376786 173.586876c-23.843359 8.850944-41.545246 32.694302-41.545246 59.427765v689.831716H64.84671c-18.243782 0-29.98483 14.992415-29.98483 29.98483 0 18.243782 12.102311 29.98483 29.98483 29.98483h891.777739c18.243782 0 29.98483-12.102311 29.98483-29.98483-0.180632-18.243782-12.282942-29.98483-29.98483-29.98483z m-89.231964-333.265126v333.265126H629.862057V435.683189l237.530428 153.898042zM153.536779 233.014641l415.994355-124.81637v814.648086H153.536779V233.014641z"
                          p-id="5687"
                        ></path>
                        <path
                          d="M450.856236 325.136708H272.753572c-18.243782 0-29.98483 11.741048-29.98483 29.98483 0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-11.741048 29.984829-29.98483 0-18.424413-12.282942-29.98483-29.984829-29.98483zM450.856236 503.058741H272.753572c-18.243782 0-29.98483 12.102311-29.98483 29.984829v0.361263c0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-12.102311 29.984829-29.98483v-0.180631-0.180632c0-18.243782-12.282942-29.98483-29.984829-29.984829zM450.856236 681.703299H272.753572c-18.243782 0-29.98483 11.741048-29.98483 29.984829v0.361263c0 18.243782 12.102311 29.98483 29.98483 29.98483h178.102664c18.243782 0 29.98483-11.741048 29.984829-29.98483v-0.180631-0.180632c0-18.243782-12.282942-29.98483-29.984829-29.984829zM688.747927 712.049391c0 18.243782 12.102311 29.98483 29.98483 29.98483h59.427765c18.243782 0 29.98483-11.741048 29.98483-29.98483v-0.180631-0.180632c0-18.243782-12.102311-29.98483-29.98483-29.984829h-59.427765c-18.243782 0-29.98483 11.741048-29.98483 29.984829v0.361263z"
                          p-id="5688"
                        ></path>
                      </svg>
                      NetEase Games
                    </h3>
                    <span className="item-time">Jul 2013 - Jun 2014</span>
                    <a className="link-icon">
                      <img src={neteaseLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      Participated in frontend development for <i>game official websites and event campaign pages</i>
                      at the Website Center, including:
                    </p>
                    <ul className="section-content">
                      <li>Responsible for developing official website pages for "Tianxia 3" and "Fantasy Westward Journey 2"</li>
                      <li>Developed event campaign pages across various game categories</li>
                      <li>
                        Responsible for frontend development of the campaign publishing system, led the basic architecture of the entire system, and promoted rapid deployment of the publishing platform
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div >

          <div className="content">
            <section className="project">
              <header className="section-hd">
                <span className="section-title-l"></span>
                <h2 className="section-title">Key Projects</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <svg
                        t="1648486800414"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2251"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M512 672l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933334 8.533333 14.933333 2.133333 34.133333-12.8 42.666666l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 541.866667c-14.933333-8.533333-21.333333-27.733333-12.8-42.666667s27.733333-23.466667 42.666667-14.933333L512 672z m0 0"
                          fill="#2c2c2c"
                          p-id="2252"
                        ></path>
                        <path
                          d="M512 868.266667l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933333 8.533333 14.933333 2.133333 34.133333-12.8 42.666667l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 738.133333c-14.933333-8.533333-21.333333-27.733333-12.8-42.666666s27.733333-23.466667 42.666667-14.933334L512 868.266667zM104.533333 343.466667c-12.8-4.266667-19.2-14.933333-19.2-27.733334 0-12.8 6.4-23.466667 19.2-29.866666l394.666667-196.266667c8.533333-4.266667 19.2-4.266667 29.866667 0l394.666666 196.266667c10.666667 6.4 19.2 17.066667 19.2 29.866666 0 12.8-6.4 23.466667-19.2 29.866667l-394.666666 196.266667c-8.533333 4.266667-19.2 4.266667-29.866667 0L104.533333 343.466667zM512 475.733333l320-160-320-160-320 160 320 160z m0 0"
                          fill="#2c2c2c"
                          p-id="2253"
                        ></path>
                      </svg>
                      Huya DIY Platform: Frontend Engineering &amp; Component Architecture
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: React, Ant Design</p>
                    <ul className="section-content">
                      <li>Built mobile-standardized development templates for DIY Platform, unified code conventions and build processes, improving new employee onboarding efficiency by 30%</li>
                      <li>
                        Designed and implemented 3 core npm packages encapsulating common address collection, game binding logic, and utility functions, reused across 10+ team projects
                      </li>
                      <li>
                        Accumulated 50+ reusable business components covering 90%+ of revenue activity scenarios, supporting nearly 1,000 rapid event deployments
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
              <hr />
              <div className="section-bd">
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <svg
                        t="1648486800414"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2251"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M512 672l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933334 8.533333 14.933333 2.133333 34.133333-12.8 42.666666l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 541.866667c-14.933333-8.533333-21.333333-27.733333-12.8-42.666667s27.733333-23.446667 42.666667-14.933333L512 672z m0 0"
                          fill="#2c2c2c"
                          p-id="2252"
                        ></path>
                        <path
                          d="M512 868.266667l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933333 8.533333 14.933333 2.133333 34.133333-12.8 42.666667l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 738.133333c-14.933333-8.533333-21.333333-27.733333-12.8-42.666666s27.733333-23.446667 42.666667-14.933334L512 868.266667zM104.533333 343.466667c-12.8-4.266667-19.2-14.933333-19.2-27.733334 0-12.8 6.4-23.466667 19.2-29.866666l394.666667-196.266667c8.533333-4.266667 19.2-4.266667 29.866667 0l394.666666 196.266667c10.666667 6.4 19.2 17.066667 19.2 29.866666 0 12.8-6.4 23.466667-19.2 29.866667l-394.666666 196.266667c-8.533333 4.266667-19.2 4.266667-29.866667 0L104.533333 343.466667zM512 475.733333l320-160-320-160-320 160 320 160z m0 0"
                          fill="#2c2c2c"
                          p-id="2253"
                        ></path>
                      </svg>
                      DIY Platform AI Assistant
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: React, Dify Platform, SSE Streaming, react-mentions, XMarkdown</p>
                    <ul className="section-content">
                      <li><i>Based on Dify LLM Platform</i>: Built an intelligent component Q&amp;A system enabling <i>AI empowerment</i> for the operational builder platform</li>
                      <li><i>SSE Streaming</i>: Real-time reception of LLM streaming responses via `fetch API + ReadableStream`, optimizing user wait experience</li>
                      <li><i>Multimodal Interaction</i>: Supports text + image multimodal input; users can upload screenshots for troubleshooting, improving communication efficiency</li>
                      <li><i>Smart @mention System</i>: Custom `@componentName` and `#configItem` triggers, real-time retrieval of page component information passed to AI context</li>
                      <li><i>Conversation Management</i>: Multi-turn conversation context maintenance via conversation_id, integrated like/dislike feedback mechanism for continuous model optimization</li>
                      <li><i>Prompt Engineering</i>: Structured prompt template design (environment, device, category, input), guiding AI to output standardized JSON configuration recommendations</li>
                      <li><i>UX Optimization</i>: Draggable floating entry, Markdown real-time rendering, loading state management, auto-scroll, and other interaction details</li>
                    </ul>
                  </div>
                </div>
              </div><hr />
              <div className="section-bd">
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <svg
                        t="1648486800414"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2251"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M512 672l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933334 8.533333 14.933333 2.133333 34.133333-12.8 42.666666l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 541.866667c-14.933333-8.533333-21.333333-27.733333-12.8-42.666667s27.733333-23.446667 42.666667-14.933333L512 672z m0 0"
                          fill="#2c2c2c"
                          p-id="2252"
                        ></path>
                        <path
                          d="M512 868.266667l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933333 8.533333 14.933333 2.133333 34.133333-12.8 42.666667l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 738.133333c-14.933333-8.533333-21.333333-27.733333-12.8-42.666666s27.733333-23.446667 42.666667-14.933334L512 868.266667zM104.533333 343.466667c-12.8-4.266667-19.2-14.933333-19.2-27.733334 0-12.8 6.4-23.466667 19.2-29.866666l394.666667-196.266667c8.533333-4.266667 19.2-4.266667 29.866667 0l394.666666 196.266667c10.666667 6.4 19.2 17.066667 19.2 29.866666 0 12.8-6.4 23.466667-19.2 29.866667l-394.666666 196.266667c-8.533333 4.266667-19.2 4.266667-29.866667 0L104.533333 343.466667zM512 475.733333l320-160-320-160-320 160 320 160z m0 0"
                          fill="#2c2c2c"
                          p-id="2253"
                        ></path>
                      </svg>
                      Huya Payment &amp; Interstitial Page System
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: React, Gulp, npm, Cross-platform Communication</p>
                    <ul className="section-content">
                      <li>Responsible for development and maintenance of Huya Payment Web client and third-party payment npm package @huyafed/thirdpay, supporting core payment scenarios such as sticker purchases and commission withdrawals</li>
                      <li>Developed and maintained 4 core business interstitial pages (binding page, partner redirect page, business relay page, etc.), unifying cross-business navigation logic</li>
                      <li>Self-developed @huyafed/openapp SDK for launching Huya app, resolving cross-browser compatibility issues with 99%+ mobile device coverage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div >
      </main >
    </section >
  );
};

export { App };

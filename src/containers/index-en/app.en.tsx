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
        <p className="last-modified">Last updated June 2026</p>
      </section>

      <main className="content">
        {/* <!--Basic Info--> */}
        <header className="content-hd">
          <section className="title">
            <div className="name">
              <h1>Fang Yang</h1>
            </div>
            <div className="job">
              <h2>Senior Front-End Developer</h2>
            </div>
          </section>
          <section className="info">
            <ul>
              <li>Location: Guangzhou, China</li>
            </ul>
          </section>
          <section className="contact">
            <ul>
              <li>
                <a href="https://github.com/fangge" target="_blank">
                  <span className="contact-link">github.com/fangge</span>
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
                  <span className="contact-link">+86 134-5036-8506</span>
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
                <h2 className="section-title">Profile</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                <div className="item">
                  <div className="item-bd">
                    <div className="section-content">
                      <p>
                        Senior Front-End Engineer with 12 years of experience specializing in mobile H5 development, engineering system architecture, and AI-driven productivity. Led frontend architecture for Huya's core business lines — DIY platform, payment systems, authentication, and middleware — delivering 3 core npm packages and 50+ reusable components that cover 90%+ of revenue-generating scenarios and cut per-activity development time by 50%. Built an AI-powered intelligent assistant on the Dify LLM platform with a structured Prompt Engineering framework. Active practitioner of AI Agent and on-device intelligence technologies, with strong cross-team collaboration and complex problem-solving skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </section>
          </div>

          <div className="content">
            <section className="practice">
              <header className="section-hd">
                <span className="section-title-l"></span>
                <h2 className="section-title">Skills</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                <div className="item">
                  <div className="item-bd">
                    <ul className="section-content">
                      <li><strong>Frontend:</strong> React 18+, TypeScript, Ant Design</li>
                      <li><strong>Engineering:</strong> pnpm v10+, Gulp, Node.js v22+</li>
                      <li><strong>AI / LLM:</strong> Dify platform, Prompt Engineering, SSE streaming, multi-modal interaction, AI Agent</li>
                      <li><strong>Cross-Platform & SDK:</strong> Mobile H5, app-launch SDK</li>
                      <li><strong>Componentization & npm:</strong> 3 core npm packages, 50+ reusable components across 12 categories</li>
                    </ul>
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
                      Guangdong University of Technology — B.S. Computer Science &amp; Technology
                    </h3>
                    <span className="item-time">Sep 2009 – Jun 2013</span>
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
                {/* <!--Experience: Work--> */}
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
                      <strong>Huya Inc. (广州虎牙科技)</strong>
                    </h3>
                    <span className="item-time">Dec 2016 – Jun 2026</span>
                    <a className="link-icon">
                      <img src={huyaLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      Responsible for frontend development and architecture of Huya's core revenue businesses including DIY platform, payments, authentication, and AI-powered applications. Lead team engineering initiatives and component library development, supporting hundreds of live-streaming events annually.
                    </p>
                    <ul className="section-content">
                      <li><i>DIY Platform Core Development</i>: Leading overall frontend architecture iteration of our internal low-code DIY platform. Built a mobile-first standardized dev template based on React 18 + pnpm v10 + Node.js 22+, unified team tech stack and coding conventions; designed global JS/CSS build pipeline (Gulp) and Tiger deployment workflow to ensure stable production updates.</li>
                      <li><i>Component Library &amp; npm Ecosystem</i>: Developed 3 core team npm packages (@diy-npm/diyrealprizeCollect for address collection, @diy-npm/diybindGame for game binding, @diy-npm/utils for shared utilities). Accumulated 50+ reusable business components across 12 categories (friend invites, lucky draws, points redemption, badges, leaderboards, tournaments, etc.), achieving 80% reuse rate and reducing per-activity development cycle by 50%.</li>
                      <li><i>AI Assistant for DIY Platform</i>: Led the implementation of an AI-powered intelligent assistant based on the Dify LLM platform, delivering component Q&amp;A, configuration recommendations, and troubleshooting. Integrated SSE streaming and multi-modal interaction (text + image), covering daily operations workflows and significantly reducing manual support overhead.</li>
                      <li><i>Core Business Infrastructure</i>: Responsible for full-scenario real-name identity verification (streamer auth, coaching auth, withdrawal auth, external shopping), third-party payment system, 4 core middleware pages for cross-business navigation, and @huyafed/openapp SDK for launching the Huya app from external browsers — supporting 10+ core business lines.</li>
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
                      YY Inc. (广州欢聚时代)
                    </h3>
                    <span className="item-time">Jun 2014 – Dec 2016</span>
                    <a className="link-icon">
                      <img src={yyLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      Responsible for frontend development of <i>Duowan (多玩网)</i> gaming portal and <i>Huya Video</i> at the Website Center:
                    </p>
                    <ul className="section-content">
                      <li>Led end-to-end frontend redesign of Duowan web portal and mobile site, implementing responsive design across mainstream devices with significant page load performance optimization</li>
                      <li>Developed 30+ game collaboration campaign landing pages</li>
                      <li>Led full-stack frontend redesign of Huya Video web portal and mobile site, optimizing video playback experience and first-screen load time</li>
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
                      NetEase Games (网易游戏)
                    </h3>
                    <span className="item-time">Jul 2013 – Jun 2014</span>
                    <a className="link-icon">
                      <img src={neteaseLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      Participated in <i>game official websites and campaign event landing pages</i> at the Website Center:
                    </p>
                    <ul className="section-content">
                      <li>Led frontend architecture and core module development for official websites of flagship titles (<em>Tianxia 3</em> and <em>Fantasy Westward Journey 2</em>)</li>
                      <li>Developed 20+ marketing campaign landing pages across multiple game genres</li>
                      <li>
                        Architected and built the campaign publishing system's frontend from scratch, driving rapid adoption across the department and reducing campaign launch cycle by 50%
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
                          d="M512 868.266667l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933333 8.533333 14.933333 2.133333 34.133333-12.8 42.666667l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 738.133333c-14.933333-8.533333-21.333333-27.733333-12.8-42.666666s27.733333-23.446667 42.666667-14.933334L512 868.266667zM104.533333 343.466667c-12.8-4.266667-19.2-14.933333-19.2-27.733334 0-12.8 6.4-23.466667 19.2-29.866666l394.666667-196.266667c8.533333-4.266667 19.2-4.266667 29.866667 0l394.666666 196.266667c10.666667 6.4 19.2 17.066667 19.2 29.866666 0 12.8-6.4 23.466667-19.2 29.866667l-394.666666 196.266667c-8.533333 4.266667-19.2 4.266667-29.866667 0L104.533333 343.466667zM512 475.733333l320-160-320-160-320 160 320 160z m0 0"
                          fill="#2c2c2c"
                          p-id="2253"
                        ></path>
                      </svg>
                      DIY Platform — Frontend Engineering &amp; Componentization
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: React, Ant Design</p>
                    <ul className="section-content">
                      <li>Built a mobile-first standardized development template for the DIY platform, unified code standards and build pipelines, improving new employee onboarding efficiency by 30%</li>
                      <li>
                        Designed and implemented 3 core npm packages encapsulating common prize collection, game binding logic, and utility functions — reused by 10+ projects across the company
                      </li>
                      <li>
                        Accumulated 50+ general-purpose business components covering 90%+ of revenue-generating activity scenarios, supporting nearly 1,000 events to launch rapidly over time
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
                      AI-Powered Intelligent Assistant for DIY Platform
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: React, Dify LLM Platform, SSE Streaming, react-mentions, XMarkdown</p>
                    <ul className="section-content">
                      <li><i>Dify LLM Platform Integration</i>: Built a component-based intelligent Q&amp;A system enabling <i>AI empowerment</i> for operations teams using the DIY builder</li>
                      <li><i>SSE Streaming</i>: Real-time reception of LLM streaming responses via Fetch API + ReadableStream, significantly optimizing user wait-time experience</li>
                      <li><i>Multi-modal Interaction</i>: Supports text + image multi-modal input; users can upload screenshots for issue troubleshooting, improving communication efficiency</li>
                      <li><i>Intelligent @mention System</i>: Custom `@componentName` and `#configOption` triggers that dynamically fetch page component info and pass structured context to the AI</li>
                      <li><i>Conversation Management</i>: Multi-turn dialogue context maintained via conversation_id, integrated thumbs-up/down feedback mechanism for continuous model optimization</li>
                      <li><i>Prompt Engineering</i>: Designed structured prompt templates (environment, device, category, input) to guide AI output of standardized JSON configuration recommendations</li>
                      <li><i>User Experience Optimization</i>: Draggable floating entry point, real-time Markdown rendering, loading state management, auto-scroll, and other interaction details</li>
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
                      Payment System &amp; Middleware Infrastructure
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: React, Gulp, npm, Cross-platform Communication</p>
                    <ul className="section-content">
                      <li>Responsible for Huya Payment Web-side and third-party payment npm package (@huyafed/thirdpay) development and maintenance, supporting core payment scenarios like emoji sticker purchases and commission withdrawals</li>
                      <li>Developed and maintained 4 core business middleware pages (binding middleware, partner launch middleware, business routing middleware, etc.) unifying cross-business navigation logic</li>
                      <li>Built @huyafed/openapp deep-linking SDK to resolve cross-browser app-launch compatibility issues, achieving 99%+ coverage across mobile devices</li>
                    </ul>
                  </div>
                </div>
              </div>



                          </section>
          </div>
          <div className="content">
            <section className="project">
              <header className="section-hd">
                <span className="section-title-l"></span>
                <h2 className="section-title">Vibe Coding Projects</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                <div className="item">
                  <header className="item-hd">
                    <h3 className="item-name">
                      <a href="https://littletreecheckin.mrfangge.com/" target="_blank">
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
                          d="M512 868.266667l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933333 8.533333 14.933333 2.133333 34.133333-12.8 42.666667l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 738.133333c-14.933333-8.533333-21.333333-27.733333-12.8-42.666666s27.733333-23.446667 42.666667-14.933334L512 868.266667zM104.533333 343.466667c-12.8-4.266667-19.2-14.933333-19.2-27.733334 0-12.8 6.4-23.466667 19.2-29.866666l394.666667-196.266667c8.533333-4.266667 19.2-4.266667 29.866667 0l394.666666 196.266667c10.666667 6.4 19.2 17.066667 19.2 29.866666 0 12.8-6.4 23.466667-19.2 29.866667l-394.666666 196.266667c-8.533333 4.266667-19.2 4.266667-29.866667 0L104.533333 343.466667zM512 475.733333l320-160-320-160-320 160 320 160z m0 0"
                          fill="#2c2c2c"
                          p-id="2253"
                        ></path>
                      </svg>
                      Achievement Jungle — Vibe Coding Full-Stack Solo Build
                      </a>
                    </h3>
                  </header>

                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: React 19, TypeScript, Vite 6, TailwindCSS v4, React Router v7, Node.js, Express, Supabase, Vercel, PWA</p>
                    <p className="item-subtitle">URL: <a href="https://littletreecheckin.mrfangge.com/" target="_blank">https://littletreecheckin.mrfangge.com/</a></p>
                    <ul className="section-content">
                      <li>Independently built a full-stack gamified children&apos;s habit-tracking PWA from scratch, featuring forest visualization, daily check-in with parent approval, achievement medals, fruit store, shared task competition, and 10+ core modules</li>
                      <li>Frontend built with React 19 + TypeScript + Vite 6 + TailwindCSS v4 + motion/react, route-level code-splitting via React Router v7 with lazy loading, responsive layout across mobile/desktop, and dark mode</li>
                      <li>Backend powered by Node.js + Express 4 + TypeScript, Supabase (PostgreSQL) for data persistence and Auth, deployed on Vercel Serverless Functions</li>
                      <li>PWA with offline caching and install-to-homescreen support across Android Chrome, iOS Safari, and desktop — running in production with real users</li>
                    </ul>
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
                          d="M512 672l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933334 8.533333 14.933333 2.133333 34.133333-12.8 42.666666l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 541.866667c-14.933333-8.533333-21.333333-27.733333-12.8-42.666667s27.733333-23.466667 42.666667-14.933333L512 672z m0 0"
                          fill="#2c2c2c"
                          p-id="2252"
                        ></path>
                        <path
                          d="M512 868.266667l379.733333-189.866667c17.066667-6.4 34.133333 0 42.666667 14.933333 8.533333 14.933333 2.133333 34.133333-12.8 42.666667l-394.666667 196.266667c-8.533333 4.266667-19.2 4.266667-29.866666 0L104.533333 738.133333c-14.933333-8.533333-21.333333-27.733333-12.8-42.666666s27.733333-23.446667 42.666667-14.933334L512 868.266667zM104.533333 343.466667c-12.8-4.266667-19.2-14.933333-19.2-27.733334 0-12.8 6.4-23.466667 19.2-29.866666l394.666667-196.266667c8.533333-4.266667 19.2-4.266667 29.866667 0l394.666666 196.266667c10.666667 6.4 19.2 17.066667 19.2 29.866666 0 12.8-6.4 23.466667-19.2 29.866667l-394.666666 196.266667c-8.533333 4.266667-19.2 4.266667-29.866667 0L104.533333 343.466667zM512 475.733333l320-160-320-160-320 160 320 160z m0 0"
                          fill="#2c2c2c"
                          p-id="2253"
                        ></path>
                      </svg>
                      Children&apos;s Growth Record — Vibe Coding Cross-Platform Desktop App
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">Tech Stack: Electron 25, React 18, Vite 4, TypeScript 5, Ant Design 5, electron-store, electron-builder</p>
                    <p className="item-subtitle">URL：<a href="https://github.com/fangge/children-rewards-collect" target="_blank">https://github.com/fangge/children-rewards-collect</a></p>
                    <ul className="section-content">
                      <li>Independently built a cross-platform desktop app with Electron for macOS/Windows, designed for managing children&apos;s award records and certificate display</li>
                      <li>Frontend powered by React 18 + Vite 4 + TypeScript 5 + Ant Design 5, featuring child profile management, certificate categorization with image upload, and a timeline visualization wall</li>
                      <li>Local data persistence via electron-store with JSON import/export and merge support, plus custom image storage paths organized by award date</li>
                      <li>Engineering standards include ESLint + Prettier, Git Hooks for commit validation, electron-builder for installer packaging, and pnpm for dependency management</li>
                    </ul>
                  </div>
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

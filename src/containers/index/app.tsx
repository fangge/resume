import React from "react";

import "./styles/index.scss";
import huyaLogo from "@img/huya.png";
import yyLogo from "@img/yy.jpg";
import lofterLogo from "@img/lofter.png";
import neteaseLogo from "@img/netease.png";
import gdut from "@img/gdut.png";

const App: React.FC = () => {
  return (
    <section className="resume">
      <section className="resume-top">
        <p className="last-modified">最后更新于2022年4月</p>
      </section>

      <main className="content">
        {/* <!--基本信息--> */}
        <header className="content-hd">
          <section className="title">
            <div className="name">
              <h1>方阳</h1>
            </div>
            <div className="job">
              <h2>前端开发工程师</h2>
            </div>
          </section>
          <section className="info">
            <ul>
              <li>男 / 年龄：31岁（1990年.6月）</li>
              <li>工作经验：8年</li>
              <li>目前所在地：广州</li>
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
                  <span className="contact-link">13450368506</span>
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
                <h2 className="section-title">个人简介</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                <div className="item">
                  <div className="item-bd">
                    <ul className="section-content">
                      <li>
                        熟悉<i>HTML5/CSS3</i>，能<i>快速还原</i>
                        设计稿，并做好浏览器兼容设计
                      </li>
                      <li>
                        熟练掌握<i>JQuery</i>，熟系<i>React和Vue</i>技术栈，具备
                        <i>跨终端</i>（PC+Mobile）开发能力
                      </li>
                      <li>
                        了解<i>Webpack</i>
                        自动化构建工具，能根据业务开发对应的脚手架
                      </li>
                      <li>
                        具备良好的<i>团队协作</i>精神，能利用自身技术能力
                        <i>提升团队整体研发效率</i>，<i>提高团队影响力</i>
                      </li>
                      <li>
                        对前端技术有<i>持续的热情</i>，个性乐观开朗，逻辑性强，
                        <i>善于和各种背景的人合作</i>
                      </li>
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
                <h2 className="section-title">教育经历</h2>
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
                      广东工业大学 计算机科学与技术 本科
                    </h3>
                    <span className="item-time">2009.9-2013.6</span>
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
                <h2 className="section-title">工作经历</h2>
                <span className="section-title-r"></span>
              </header>
              <div className="section-bd">
                {/* <!--经历:工作--> */}
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
                      广州虎牙科技有限公司
                    </h3>
                    <span className="item-time">2016.12 至今</span>
                    <a className="link-icon">
                      <img src={huyaLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      于网站技术中心主要负责<i>赛事运营移动端</i>
                      业务的前端开发，包括：
                    </p>
                    <ul className="section-content">
                      <li>主要负责赛事运营活动的移动端组件及页面开发</li>
                      <li>赛事运营活动专题页生成系统框架的开发与维护</li>
                      <li>小鹿陪玩技能认证页</li>
                      <li>虎牙助手app及虎牙观众端app内的主播实名认证页</li>
                      <li>虎牙直播web站虎牙支付页面</li>
                    </ul>
                  </div>
                </div>
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
                      广州欢聚时代信息科技有限公司
                    </h3>
                    <span className="item-time">2014.06 至 2016.12</span>
                    <a className="link-icon">
                      <img src={yyLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      于网站中心负责<i>多玩网</i>与<i>虎牙视频</i>
                      业务的前端开发，包括：
                    </p>
                    <ul className="section-content">
                      <li>主导多玩网web站和移动站前端改版开发</li>
                      <li>多玩相关游戏合作专题页面开发</li>
                      <li>主导虎牙视频站web站和移动站的前端改版开发</li>
                    </ul>
                  </div>
                </div>
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
                      网易游戏
                    </h3>
                    <span className="item-time">2013.07 至 2014.06</span>
                    <a className="link-icon">
                      <img src={neteaseLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      于网站中心参与<i>游戏官网和游戏专题活动页面</i>
                      的前端开发，包括：
                    </p>
                    <ul className="section-content">
                      <li>负责和主导开发《天下3》和《大话西游2》官网页面</li>
                      <li>负责各品类游戏专题活动页面开发</li>
                      <li>
                        负责专题发布系统的前端开发，主导整个系统的基础架构，并推进发布系统的快速落地
                      </li>
                    </ul>
                  </div>
                </div>
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
                      网易（实习）
                    </h3>
                    <span className="item-time">2012.06-2012.08</span>
                    <a className="link-icon">
                      <img src={lofterLogo} className="logo" />
                    </a>
                  </header>
                  <div className="item-bd">
                    <p className="item-des">
                      于<a href="https://lofter.com">Lofter轻博客</a>团队参与
                      <i>模板皮肤</i>的前端开发
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="content">
            <section className="project">
              <header className="section-hd">
                <span className="section-title-l"></span>
                <h2 className="section-title">个人项目</h2>
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
                      运营页面搭建系统 和 虎牙直播移动端赛事页面
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">（1）运营页面搭建系统</p>
                    <ul className="section-content">
                      <li>技术栈及所用库：React、Ant Design</li>
                      <li>
                        运营可通过搭积木方式瀑布流式搭建页面组件，以满足日常运营赛事专题工作
                      </li>
                      <li>
                        同时负责运营上传日常素材的素材库、可定义线上json数据的的虎牙Api等多个功能组件
                      </li>
                    </ul>
                    <p className="item-subtitle">（2）赛事类专题移动组件</p>
                    <ul className="section-content">
                      <li>技术栈：React、JQuery</li>
                      <li>
                        工作期间负责将近200个赛事定制或功能类组件，比如任务领奖、通用抽奖等常用组件，页面搭建系统承接了将近2w个专题的开发
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
                      虎牙主站web支付页
                    </h3>
                  </header>
                  <div className="item-bd">
                    <ul className="section-content">
                      <li>技术栈：JQuery</li>
                      <li>虎牙直播web站及PC端支付页的开发和功能迭代维护</li>
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
                      移动端小鹿陪练技能认证h5页面
                    </h3>
                  </header>
                  <div className="item-bd">
                    <ul className="section-content">
                      <li>技术栈：Vue</li>
                      <li>
                        实现小鹿陪练app中的技能认证、公会邀约申请、修改接单单价等功能
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
                      其他项目
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">
                      （1）虎牙带盐团拉新专题及组件
                    </p>
                    <ul className="section-content">
                      <li>技术栈及相关库：React</li>
                      <li>
                        运营页面搭建系统其中一个活动组件，支持灵活换肤，2021年12月大仙生日会活动使用了此组件，领取大仙皮肤，组件曝光量84w，领取皮肤量近4k套，组件分享转化率5%
                      </li>
                    </ul>
                    <p className="item-subtitle">
                      （2）虎牙赛事徽章专题
                    </p>
                    <ul className="section-content">
                      <li>技术栈及相关库：React</li>
                      <li>
                        跨端专题，常驻虎牙直播赛事弹幕入口，可让用户选择支持的战队并佩戴对应的战队勋章
                      </li>
                    </ul>
                    <p className="item-subtitle">（2）2021年虎牙年度报告</p>
                    <ul className="section-content">
                      <li>技术栈及相关库：React、Lottie</li>
                      <li>
                        主要负责h5页面所有功能的开发，和美术一起配合，结合Lottie动画，完成了令人惊艳的h5动画效果，并在虎牙用户中达到了很高的分享率
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
};

export { App };

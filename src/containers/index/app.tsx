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
      <p className="last-modified">最后更新于2022年3月</p>
      <a className="download-pdf" href="https://mrfangge.com/resume/resume.pdf">
        下载 PDF
      </a>

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
                <a href="https://github.com/fangge">
                  <span className="contact-link">Github - fangge</span>
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
                <a href="tel:13450368506">
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
                      广东工业大学 计算机科学与技术  本科
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
                      <li>
                        主要负责赛事运营活动的移动端组件及页面开发，比如【
                        <a
                          href="https://zt.huya.com/15223/mobile/index.html"
                          target="_blank"
                        >
                          cfm大会员活动
                        </a>
                        、
                        <a
                          href="https://zt.huya.com/14301/mobile/index.html"
                          target="_blank"
                        >
                          QQ名人赛活动
                        </a>
                        】等
                      </li>
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
                      diy运营页面开发系统及主负责虎牙直播赛事类专题移动端相关组件
                    </h3>
                  </header>
                  <div className="item-bd">
                    <p className="item-subtitle">
                      （1）diy运营开发系统的日常维护和功能迭代
                    </p>
                    <ul className="section-content">
                      <li>
                        工作期间开发了能让运营上传日常素材的素材库让开发可以定义线上ison数据的的虎牙Api和能让运营通过搭积木方式开发日常运营赛事所需专题的等等相关功能
                      </li>
                      <li>
                        持续地主动性功能迭代，增加了保存自定义组件配置、增加了组件收藏功能等方便运营开发页面的快捷功能
                      </li>
                    </ul>
                    <p className="item-subtitle">
                      （2）赛事类专题移动相关组件的开发
                    </p>
                    <ul className="section-content">
                      <li>
                        工作期间开发了将近200个赛事定制或功能类组件比如任务领奖、通用抽奖等常用组件，diy系统承接了将近2w个专题的开发，极大地提高了日常赛事运营所需的页面开发效率，运营基本日常只需要自行搭建页面即可，基本不需要开发人员的参与
                      </li>
                      <li>
                        主动将本身需要专题开发类的需求抽象出来设计成一个组件，比如主播的带盐团活动，支持灵活换肤，2021年12月大仙生日会活动使用了此组件，领取大仙皮肤，从11.27上线以来，组件曝光量84w，领取皮肤量近4k套，组件分享转化率5%
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
                    <p className="item-subtitle">（1）接口性能优化</p>
                    <ul className="section-content">
                      <li>
                        对虎牙支付框架进行接口和代码优化，通过优化了相关请求顺序，减少了页面初始化时接口的请求数，和调整了相关查询轮询接口的请求频率，同年9月接口请求量相比优化前8月大约下降了37%，大大减少了服务器压力，同时也保证了业务的有效性
                      </li>
                    </ul>
                    <p className="item-subtitle">（2）页面性能优化</p>
                    <ul className="section-content">
                      <li>
                        html清理相关无用的dom，和启用压缩插件，由原本的30kb，降低到6kb，降低80%
                      </li>
                      <li>
                        图片请求重新使用雪碧图形式，减少图片请求数，将原本的102个切片图片压缩为1个，同时压缩雪碧图，由原本的60kb压缩到20kb，减少了66.67%
                      </li>
                      <li>
                        chrome的lighthouse页面性能评分达到96分，页面加载时间也从原本的1s以上降低到0.25s左右，速度提高了75%
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
                      移动端小鹿陪练技能认证h5页面
                    </h3>
                  </header>
                  <div className="item-bd">
                    <ul className="section-content">
                      <li>
                        主要负责小鹿陪练app中技能认证页面的所有功能实现，负责期间对整体项目模块化搭建，将技能认证相关功能解耦，提高了功能迭代开发的工作效率
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
                      2021年虎牙年度报告
                    </h3>
                  </header>
                  <div className="item-bd">
                    <ul className="section-content">
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

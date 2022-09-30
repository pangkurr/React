import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="gnb-box">
        <div className="hd_top">
          <div className="top_wrap ct1 af">
            <ul className="hd_left af">
              <li className="my1"><b>마이페이지</b></li>
              <li className="my2"><b><span>1</span>알림</b></li>
            </ul>
            <div className="hd_right">
              <p><span>'홍길동'</span>님 반갑습니다.</p>
            </div>
          </div>
        </div>
        <div className="h_nav ct1 af">
          <div className="logo">
            <Link to={'/'}>
              <img src={require('../../img/layout/logo.jpg')} height="65px" width="200px" alt=""/>
            </Link>
          </div>
          <nav className="gnb gnb_admin">
            <ul className="af">
              <li className="menulist">
                <Link to={'/Intro'}>소개</Link>
              </li>
              <li className="menulist">
                <Link to={'/Comm'}>소통</Link>
              </li>
              <li className="menulist">
                <Link to={'/Policy'}>정책</Link>
              </li>
              <li className="menulist">
                <Link to={'/Manage'}>관리</Link>
              </li>

              {/* 드롭다운 이벤트 */}
              <li className="menulist">
                <Link to={'/Issue'}>이슈</Link>
                <ul className="gn_2">
                  <li>
                    <Link to={'/community/notice'}>공지사항</Link>
                  </li>
                </ul>
              </li>
              <li className="menulist">
                <Link to={'/Search'}>검색</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
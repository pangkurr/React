import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li className="priv"><a href="#n">개인정보처리방침</a></li>
          <li className="em_bt"><a href="#n">이메일주소무단수집거부</a></li>
        </ul>
        <div className="ft_p">
          <span>주소 : 인천광역시 부평구 부평대로</span>
          <span>Tel : 032-123-4567</span>
        </div>
        <p>&copy; React Page{this.props.name}</p>
      </footer>
    );
  }
}

export default Footer;
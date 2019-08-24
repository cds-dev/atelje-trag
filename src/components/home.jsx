import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    lang: [["Ljudi", "Mašine"], ["People", "Machines"]]
    //selectedLang: 0
  };

  componentDidMount = () => {
    let poligonLeft = document.querySelector(".poligon-left"),
      poligonRight = document.querySelector(".poligon-right"),
      bigT = document.querySelector(".bigT");


    setTimeout(function () {
      poligonLeft.style.height = "calc(100vh - 80px)";
      poligonLeft.style.width = "46.5%";
      poligonLeft.style.opacity = ".5";
      poligonLeft.style.clipPath = "polygon(0 0, 100% 0%, 63% 100%, 0% 100%)";
      poligonRight.style.height = "calc(100vh - 80px)";
      poligonRight.style.width = "46.5%";
      poligonRight.style.opacity = ".5";
      poligonRight.style.clipPath = "polygon(0 0, 100% 0%, 100% 100%, 35% 100%)";
    }, 2000)

    setTimeout(function () {
      poligonLeft.style.background = "rgba(080, 080, 080, .7)";
      poligonRight.style.background = "rgba(080, 080, 080, .7)";
      poligonLeft.style.paddingRight = "17px";
      poligonRight.style.paddingLeft = "15px";
      bigT.style.opacity = "1";
    }, 2250)


  };

  render() {
    const { lang } = this.state;
    const language = this.props.selected;

    return (
      <div className="home-main">
        <p className="bigT">T</p>
        <div className="poligon-left">
          <div className="inner-div-left"></div>
        </div>
        <div className="poligon-right">
          <div className="inner-div-right"></div>
        </div>
        <div className="fp_button lang lang_en" onClick={this.props.setEng}>
          EN
        </div>
        <div className="fp_button lang lang_sr" onClick={this.props.setSer}>
          SR
        </div>
        <Link to="./people">
          <div className="fp_button sect sect_peop">{lang[language][0]}</div>
        </Link>
        <Link to="./machines">
          <div className="fp_button sect sect_mach">{lang[language][1]}</div>
        </Link>
      </div>
    );
  }
}
export default Home;

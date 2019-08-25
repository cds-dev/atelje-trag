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
      innerLeft = document.querySelector(".inner-div-left"),
      innerRight = document.querySelector(".inner-div-right"),
      bigT = document.querySelector(".bigT"),
      fpButtons = document.querySelectorAll(".fp_button"),
      leftHoverable = document.querySelector(".left-hoverable"),
      rightHoverable = document.querySelector(".right-hoverable");

    setTimeout(function () {
      // poligonLeft.style.height = "calc(100vh - 80px)";
      poligonLeft.style.width = "46.5%";
      poligonLeft.style.opacity = "1";
      poligonLeft.style.clipPath = "polygon(0 0, 100% 0%, 63% 100%, 0% 100%)";
      // poligonRight.style.height = "calc(100vh - 80px)";
      poligonRight.style.width = "46.5%";
      poligonRight.style.opacity = "1";
      poligonRight.style.clipPath = "polygon(0 0, 100% 0%, 100% 100%, 35% 100%)";
    }, 2000)

    setTimeout(function () {
      poligonLeft.style.background = "white";
      poligonRight.style.background = "white";
      poligonLeft.style.paddingRight = "17px";
      poligonRight.style.paddingLeft = "15px";
    }, 2250)

    setTimeout(function () {
      bigT.style.opacity = "1";
    }, 2500)

    setTimeout(function () {
      poligonLeft.style.width = "0";
      poligonLeft.style.opacity = "0";
      poligonRight.style.width = "0";
      poligonRight.style.opacity = "0";
      bigT.style.opacity = "0";
    }, 7000)

    setTimeout(function () {
      fpButtons.forEach(it => it.style.opacity = "1");
    }, 7350)

    setTimeout(function () {
      leftHoverable.addEventListener("mouseover", function () {
        poligonLeft.style.height = "calc(100vh - 80px)";
        poligonLeft.style.width = "46.5%";
        poligonLeft.style.opacity = ".2";
        poligonLeft.style.clipPath = "polygon(0 0, 100% 0%, 63% 100%, 0% 100%)";
        poligonLeft.style.background = "white";
        innerLeft.style.background = "black";
        bigT.style.opacity = ".2";
        // innerLeft
        leftHoverable.addEventListener("mouseleave", function () {
          poligonLeft.style.width = "0";
          poligonLeft.style.opacity = "0";
          bigT.style.opacity = "0";
        });
      });
      rightHoverable.addEventListener("mouseover", function () {
        poligonRight.style.height = "calc(100vh - 80px)";
        poligonRight.style.width = "46.5%";
        poligonRight.style.opacity = ".2";
        poligonRight.style.clipPath = "polygon(0 0, 100% 0%, 100% 100%, 35% 100%)";
        poligonRight.style.background = "white";
        innerRight.style.background = "black";
        bigT.style.opacity = ".2";

        rightHoverable.addEventListener("mouseleave", function () {
          poligonRight.style.width = "0";
          poligonRight.style.opacity = "0";
          bigT.style.opacity = "0";
        });
      });
      leftHoverable.addEventListener("mouseleave", function () {
        poligonLeft.style.width = "0";
        poligonLeft.style.opacity = "0";
        poligonRight.style.width = "0";
        poligonRight.style.opacity = "0";
        bigT.style.opacity = "0";
      });
    }, 8500)
  };

  render() {
    const { lang } = this.state;
    const language = this.props.selected;

    return (
      <div className="home-main">
        <p className="bigT">T</p>
        <div className="left-hoverable">
          <Link to="./people">
            <div className="fp_button sect sect_peop">{lang[language][0]}</div>
          </Link>
        </div>
        <div className="right-hoverable">
          <Link to="./machines">
            <div className="fp_button sect sect_mach">{lang[language][1]}</div>
          </Link>
        </div>
        <div className="poligonL poligon-left">
          <div className="inner-div-left"></div>
        </div>
        <div className="poligonR poligon-right">
          <div className="inner-div-right"></div>
        </div>
        <div className="fp_button lang lang_en" onClick={this.props.setEng}>
          EN
        </div>
        <div className="fp_button lang lang_sr" onClick={this.props.setSer}>
          SR
        </div>
      </div>
    );
  }
}
export default Home;

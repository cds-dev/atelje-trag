import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    lang: [["LJUDI", "MAŠINE"], ["PEOPLE", "MACHINES"]]
    //selectedLang: 0
  };

  componentDidMount = () => {
    let poligonLeft = document.querySelector(".poligon-left"),
      poligonRight = document.querySelector(".poligon-right"),
      bigT = document.querySelector(".bigT"),
      fpButtons = document.querySelectorAll(".fp_button"),
      leftHoverable = document.querySelector(".left-hoverable"),
      rightHoverable = document.querySelector(".right-hoverable");

    setTimeout(function () {
      poligonLeft.style.width = "46.5%";
      poligonLeft.style.opacity = ".5";
      poligonLeft.style.clipPath = "polygon(0 0, 100% 0%, 63% 100%, 0% 100%)";
      poligonRight.style.width = "46.5%";
      poligonRight.style.opacity = ".5";
      poligonRight.style.clipPath = "polygon(0 0, 100% 0%, 100% 100%, 35% 100%)";
    }, 2000)

    setTimeout(function () {
      poligonLeft.style.background = "white";
      poligonRight.style.background = "white";
      poligonLeft.style.paddingRight = "19px";
      poligonRight.style.paddingLeft = "19px";
    }, 2700)

    setTimeout(function () {
      bigT.style.opacity = ".5";
    }, 3000)

    setTimeout(function () {
      poligonLeft.style.width = "0";
      poligonLeft.style.opacity = "0";
      poligonRight.style.width = "0";
      poligonRight.style.opacity = "0";
      bigT.style.opacity = "0";
    }, 5000)

    setTimeout(function () {
      fpButtons.forEach(it => it.style.opacity = ".6");
    }, 5500)

    setTimeout(function () {
      leftHoverable.addEventListener("mouseover", function () {
        poligonLeft.style.transition = "all .5s ease-in";
        poligonLeft.style.width = "46.5%";
        poligonLeft.style.opacity = ".5";
        bigT.style.transition = "all .5s ease-in";
        bigT.style.opacity = ".5";

        leftHoverable.addEventListener("mouseleave", function () {
          poligonLeft.style.width = "0";
          poligonLeft.style.opacity = "0";
          bigT.style.opacity = "0";
        });
      });

      rightHoverable.addEventListener("mouseover", function () {
        poligonRight.style.transition = "all .5s ease-in";
        poligonRight.style.width = "46.5%";
        poligonRight.style.opacity = ".5";
        bigT.style.transition = "all .5s ease-in";
        bigT.style.opacity = ".5";

        rightHoverable.addEventListener("mouseleave", function () {
          poligonRight.style.width = "0";
          poligonRight.style.opacity = "0";
          bigT.style.opacity = "0";
        });
      });
    }, 5800)
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
          <div className="fp_button lang lang_en" onClick={this.props.setEng}>
            EN
        </div>
          <div className="fp_button lang lang_sr" onClick={this.props.setSer}>
            SR
        </div>
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
      </div>
    );
  }
}
export default Home;

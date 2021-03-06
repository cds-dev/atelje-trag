import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {
  state = {
    lang: [["LJUDI", "MAŠINE"], ["PEOPLE", "MACHINES"]],
    peopleLinks: [["O nama", "Klijenti", "Kontakt"], ["About", "Clients", "Contact"]],
    machinesLinks: [["Studio", "Oprema", "Kontakt"], ["Studio", "Equipment", "Contact"]]
    //selectedLang: 0
  };

  componentDidMount = () => {
    let poligonLeft = document.querySelector(".poligon-left"),
      poligonRight = document.querySelector(".poligon-right"),
      logoLetters = document.querySelector(".logoLetters"),
      bigT = document.querySelector(".bigT"),
      fpButtons = document.querySelectorAll(".fp_button"),
      leftHoverable = document.querySelector(".left-hoverable"),
      rightHoverable = document.querySelector(".right-hoverable"),
      peopleLink = document.querySelector(".peopleLink"),
      machineLink = document.querySelector(".machineLink"),
      leftLinks = document.querySelectorAll(".leftLinks"),
      rightLinks = document.querySelectorAll(".rightLinks");

    function poligonChange(hoverableLink, hoverablHiddenDiv, poligon, t) {
      hoverableLink.addEventListener("mouseover", function () {
        poligon.style.transition = "all .5s ease-in";
        poligonLeft.style.width = "48.5%";
        poligonRight.style.width = "46.5%";
        poligon.style.opacity = ".5";
        t.style.transition = "all .5s ease-in";
        t.style.opacity = ".5";
        logoLetters.style.transition = ".2s ease-in";
        logoLetters.style.opacity = "0";

        hoverablHiddenDiv.addEventListener("mouseleave", function () {
          poligon.style.width = "0";
          poligon.style.opacity = "0";
          t.style.opacity = "0";
          logoLetters.style.transition = "1.3s ease-in";
          logoLetters.style.opacity = "1";
          // +++++++++++++++++
          peopleLink.style.opacity = ".6";
          leftLinks.forEach(it => it.style.transform = "scaleX(0)");
          machineLink.style.opacity = ".6";
          rightLinks.forEach(it => it.style.transform = "scaleX(0)");
          closeLinks(leftLinks)
          closeLinks(rightLinks)
        });
      });
    }

    setTimeout(function () {
      poligonLeft.style.width = "48.5%";
      poligonLeft.style.opacity = ".5";
      poligonLeft.style.clipPath = "polygon(0 0, 100% 0%, 63% 100%, 0% 100%)";
      poligonRight.style.width = "46.8%";
      poligonRight.style.opacity = ".5";
      poligonRight.style.clipPath = "polygon(0 0, 100% 0%, 100% 100%, 35% 100%)";
    }, 1500)

    setTimeout(function () {
      poligonLeft.style.background = "white";
      poligonRight.style.background = "white";
      poligonLeft.style.paddingRight = "23px";
      poligonRight.style.paddingLeft = "23px";
    }, 1900)

    setTimeout(function () {
      bigT.style.opacity = ".5";
    }, 2000)

    setTimeout(function () {
      poligonLeft.style.width = "0";
      poligonLeft.style.opacity = "0";
      poligonRight.style.width = "0";
      poligonRight.style.opacity = "0";
      bigT.style.opacity = "0";
      logoLetters.style.opacity = "1";
    }, 3800)

    setTimeout(function () {
      fpButtons.forEach(function (it) {
        it.classList.add("fp_buttonHover");
        it.style.opacity = ".6";
        it.style.cursor = "pointer";
      });
    }, 4100)

    function openLinks(targetLink, linksArr) {
      targetLink.addEventListener("mouseover", function () {
        targetLink.style.opacity = "1";
        setTimeout(function() {
          targetLink.style.opacity = "1";
            for (let i = 0; i < linksArr.length; i++) {
              setTimeout(function () {
                linksArr[i].style.transform = "scaleX(1)"
              }, (i + 1) * 100);
            }
        }, 300)
      });
    }

    function closeLinks(linksArr) {
      for (let i = 0; i < linksArr.length; i++) {
        setTimeout(function () {
          linksArr[i].style.transform = "scaleX(0)"
        }, (i + 1) * 100);
      }
    }

    setTimeout(function () {
      poligonChange(peopleLink, leftHoverable, poligonLeft, bigT);
      poligonChange(machineLink, rightHoverable, poligonRight, bigT);
      openLinks(peopleLink, leftLinks);
      openLinks(machineLink, rightLinks);
    }, 500)
  }

  render() {
    const { lang, peopleLinks, machinesLinks } = this.state;
    // const { peopleLinks } = this.state;
    const language = this.props.selected;

    return (
      <div>
        <div className="home-signes-wrapper">
          <div className="mini-logo-holder">
          <p className="bigT">T</p>
            <div className="logoLetters">
              <span className="aHolder">A</span><br />
              <span className="tHolder">T</span>
            </div>
            <div className="groundingHolder">
              <div>
                <hr />
              </div>
              <div>
                <hr className="hrMid" />
              </div>
              <div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="left-hoverable">
          <Link to='./people#aboutus'>
            <div className="fp_button sect sect_peop aboutusLink leftLinks">{peopleLinks[language][0]}</div>
          </Link>
          <Link to='./people#clients'>
            <div className="fp_button sect sect_peop clientsLink leftLinks">{peopleLinks[language][1]}</div>
          </Link>
          <Link to='./machines#contact'>
            <div className="fp_button sect sect_peop contactLink leftLinks">{peopleLinks[language][2]}</div>
          </Link>
          <Link to="">{/*./people*/}
            <div className="fp_button sect sect_peop peopleLink">{lang[language][0]}</div>
          </Link>
        </div>
        <div className="right-hoverable">
          <div className="fp_button lang lang_en" onClick={this.props.setEng}>
            EN
        </div>
          <div className="fp_button lang lang_sr" onClick={this.props.setSer}>
            SR
        </div>
          <Link to='./machines#aboutstudio'>
            <div className="fp_button sect sect_peop aboutstudioLink rightLinks">{machinesLinks[language][0]}</div>
          </Link>
          <Link to='./machines#equipment'>
            <div className="fp_button sect sect_peop equipmentLink rightLinks">{machinesLinks[language][1]}</div>
          </Link>
          <Link to='./machines#contact'>
            <div className="fp_button sect sect_peop contacRighttLink rightLinks">{machinesLinks[language][2]}</div>
          </Link>
          <Link to="">{/*./machines*/}
            <div className="fp_button sect sect_mach machineLink">{lang[language][1]}</div>
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

import React, { Component } from 'react';
import { getClients } from '../data/clients.js';
import Gallery from "react-photo-gallery";
//import ClientModal from './clientModal';

class Clients extends Component {
    state = {
        clientList: [],
    }

    componentDidMount = () => {
        this.setState({
            clientList: getClients()
        });
    }

    openModal = (e) => {
        this.closeModal()

        if(e.target.className === "" || e.target.className === "client-wide") {
            
            this.state.clientList.forEach(client => {
            if (client.id === e.target.id) {
                document.getElementById('mod'+client.id).style.backgroundImage = "client.src";
                document.getElementById('mod'+client.id).style.display = "inline-block";
            }
        })
        }
    }

    closeModal = () => {
        document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
    }

    render() {
        setTimeout(() => {
            const allImgs = document.querySelectorAll('#clients img'),
                  spanWrapper = document.querySelector('#clients span'),
                  gall  = spanWrapper.childNodes[0],
                  gallWrapper  = gall.childNodes[0]

            allImgs.forEach(pic => {
                if(pic.className === 'client-wide' || pic.className === 'client-narrow') {
                    const imgWrap = document.createElement('div')
                    imgWrap.setAttribute("className", "img-wrap")
                    imgWrap.appendChild(pic)
                    gallWrapper.appendChild(imgWrap)
                }

                const imgWrapper = pic.parentElement

                function BlackBox() {
                    imgWrapper.style.position = "absolute";
                    imgWrapper.style.width = `${pic.clientWidth+1}px`;
                    imgWrapper.style.height = `${pic.clientHeight+1}px`;
                    imgWrapper.style.left = `${pic.offsetLeft}px`;
                    imgWrapper.style.top = `${pic.offsetTop}px`;
                    imgWrapper.style.display = "inline-block";
                    
                } 


                window.addEventListener("resize", function() {
                    BlackBox()
                });

                if(pic.className === 'client-wide') {
                    BlackBox()

                    const blackBox = document.createElement('div')
                    blackBox.setAttribute("className", "black-box");

                    blackBox.innerHTML = '<span>' + this.state.clientList[pic.id.substring(3,5) - 1].alt + '</span><span class="moveRight">...</span>';
                    blackBox.id = this.state.clientList[pic.id.substring(3,5) - 1].id;
                    imgWrapper.appendChild(blackBox);
                    
                    blackBox.style.background = "#0007";
                    blackBox.style.position = "absolute";
                    blackBox.style.zIndex = "300"
                    blackBox.style.padding = "10px"
                    blackBox.style.width = "86%"
                    blackBox.style.textAlign = "left"
                    blackBox.style.textTransform = "uppercase"
                    blackBox.style.left = "7%";
                    blackBox.style.cursor = "pointer";
                    blackBox.style.bottom = "18px";
                    blackBox.style.display = "inline-flex"
                    blackBox.style.alignContent = "space-between"
                    blackBox.style.justifyContent = "space-between"

                    blackBox.addEventListener('click', this.openModal)
                }
                
            })
        }, 1000)
        
        
        setTimeout(() => {
            //span koji drzi glavni galerijski div.react-photo-gallery--gallery
            const spanWrapper = document.querySelector('#clients span')
            //div.react-photo-gallery--gallery
            let gall = spanWrapper.childNodes[0]
            //div u kome su img-i
            let gallWrapper = gall.childNodes[0]
            //klikabilni img-i
            const clickable = document.querySelectorAll('.client-wide')
            
            clickable.forEach(it => {
                let spanImgWrapper = document.createElement("span");
                //klasa za span
                spanImgWrapper.setAttribute("className", "imgSpan")
                //dodajem sliku u span
                spanImgWrapper.appendChild(it)
                //dodajem span u div koji drzi slike
                gallWrapper.appendChild(spanImgWrapper)

            })
        }, 1000)

        return (

                <section id="clients" >
                <span><Gallery photos={this.state.clientList} direction={"column"} onClick={this.openModal}  /></span>
                {this.state.clientList.map(cl => <div
                    className="modal"
                    id={'mod'+cl.id}
                    key={cl.id}
                    //style={{background:`url(`+cl.src+`)`}}
                    onClick={this.closeModal}>
                    <img src={cl.src} alt={cl.alt} />
                    <div className="modalDesc" dangerouslySetInnerHTML={{__html: cl.txt}} />
                </div>)}
                </section>

            )
        
    }

}
export default Clients;
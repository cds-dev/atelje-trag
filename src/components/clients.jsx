import React, { Component } from 'react';
import { getClients } from '../data/clients.js';
import Gallery from "react-photo-gallery";


class Clients extends Component {
    state = {
        clientList: []
    }

    componentDidMount = () => {
        this.setState({
            clientList: getClients()
        });
    }

    wrapImages = (images) => {
        //console.log(images)
        const gallery = document.querySelector('.react-photo-gallery--gallery').childNodes[0]
        console.log(images)

        images.forEach(pic => {
            const imgWrap = document.createElement('div')
            imgWrap.setAttribute("className", "img-wrap")
            imgWrap.appendChild(pic)
            gallery.appendChild(imgWrap)
            //imgWrap.style.position = "relative"
            
            const box = document.createElement('div')
            box.style.display = "inline-block"
            box.style.position = "relative";
            box.style.top = "0px";
            box.style.left = "0px";
            
            if(pic.className === "client-wide") {
                box.setAttribute('className', 'black-box')
                box.innerHTML = '<span>' + this.state.clientList[pic.id.substring(3,5) - 1].alt + '</span><span class="moveRight">...</span>';

                box.style.background = "#0007";
            }
            else if(pic.className === "client-narrow") {
                box.setAttribute('className', 'transp-box')
                box.innerHTML = '<span>' + this.state.clientList[pic.id.substring(3,5) - 1].alt;
            }

            box.style.zIndex = "300";
                
                
                box.style.top = pic.offsetTop +"px";
                box.style.left = pic.offsetLeft +"px";
                box.style.width = `${pic.clientWidth}px`;

            imgWrap.appendChild(box)
        })

    }

    render() {
        setTimeout(() => {
            const allImgs = document.querySelectorAll('#clients img')
            this.wrapImages(allImgs)
        }, 0)
        
        return ( 
            <section id="clients">
                <Gallery photos={this.state.clientList} direction={"column"} /*onClick={this.openModal}*/  />
            </section> )
    }
}

export default Clients;
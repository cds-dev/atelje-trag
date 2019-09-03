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

    componentDidUpdate = () => {
        setTimeout(() => {
            const allImgs = document.querySelectorAll('#clients img')
            this.wrapImages(allImgs)
        }, 0)
    }

    wrapImages = (images) => {
        const gallery = document.querySelector('.react-photo-gallery--gallery').childNodes[0]

        images.forEach(pic => {
            const imgWrap = document.createElement('div')
            imgWrap.setAttribute("class", "img-wrap")
            imgWrap.appendChild(pic)
            imgWrap.style.position = "absolute"
            gallery.appendChild(imgWrap)
            
            const box = document.createElement('div')
            
            if(pic.className === "client-wide") {
                box.setAttribute('class', 'black-box')
                box.innerHTML = '<span>' + this.state.clientList[pic.id.substring(3,5) - 1].alt + '</span><span class="moveRight">...</span>';
            }
            else if(pic.className === "client-narrow") {
                box.setAttribute('class', 'transp-box')
                box.innerHTML = '<span>' + this.state.clientList[pic.id.substring(3,5) - 1].alt + '</span>';
            }
                
            box.style.top = `${pic.offsetTop + pic.offsetHeight - 60}px`;
            box.style.left = pic.offsetLeft + "px";
            box.style.width = `${pic.clientWidth - 20}px`;

            imgWrap.appendChild(box)
        })

    }

    render() {
        
        
        return ( 
            <section id="clients">
                <Gallery photos={this.state.clientList} direction={"column"} /*onClick={this.openModal}*/  />
            </section> )
    }
}

export default Clients;
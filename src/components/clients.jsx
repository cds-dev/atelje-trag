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

    openModal = (e) => {
        this.closeModal()

        if(e.target.className === "black-box" || e.target.className === "client-wide") {
            
            this.state.clientList.forEach(client => {
            if (client.id === e.target.id) {
                const modal = document.getElementById('mod'+client.id)
                modal.style.backgroundImage = "client.src";
                modal.style.display = "inline-block";
                console.log(modal.childNodes)
                modal.childNodes[0].style.display = "inline-block";
            }
        })
        }
    }

    closeModal = () => {
        document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
    }

    wrapImages = (images) => {
        const gallery = document.querySelector('.react-photo-gallery--gallery').childNodes[0]

        images.forEach(pic => {
            const imgWrap = document.createElement('div')
            if(pic.className === "client-wide" || pic.className === "client-narrow") {
                
                imgWrap.setAttribute("class", "img-wrap")
                imgWrap.appendChild(pic)
                imgWrap.style.position = "absolute"
                gallery.appendChild(imgWrap)
            }
            
            
            const box = document.createElement('div')
            
            if(pic.className === "client-wide") {
                box.setAttribute('class', 'black-box')
                box.id = pic.id;
                box.innerHTML = '<span>' + this.state.clientList[pic.id.substring(3,5) - 1].alt + '</span><span class="moveRight">...</span>';
                box.addEventListener('click', this.openModal)
                box.childNodes[0].addEventListener('click', this.openModal)
                box.childNodes[1].addEventListener('click', this.openModal)
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
                <Gallery photos={this.state.clientList} direction={"column"} onClick={this.openModal}  />
                {this.state.clientList.map(cl => <div
                    className="modal"
                    id={'mod'+cl.id}
                    key={cl.id}
                    style={{display:"none"}}
                    onClick={this.closeModal}>
                    <img src={cl.src} alt={cl.alt} />
                    <div className="modalDesc" dangerouslySetInnerHTML={{__html: cl.txt}} />
                </div>)}
            </section> )
    }
}

export default Clients;
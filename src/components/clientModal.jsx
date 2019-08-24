import React, { Component } from "react";
import { getClients } from '../data/clients.js';


class ClientModal extends Component {
    state = {
        clientList : []
    }

    componentDidMount() {
        this.setState({
            clientList: getClients() 
        });
    }

    renderText = () => {
        if(1) return this.state.clientList.map(cl => <p key={cl._id}>{cl.txt}</p>);
        return null;
    }
    render() {
        return ( <div className="modal">
            {this.renderText()}
            <div className="modalX">X</div>
            </div> )
    }
}

{/*<section className="clients" id="clients">

                {
                    this.state.clientList.map(cl =>
                        <>
                            <div
                                className={cl.cls}
                                key={`box` + cl._id}
                            >
                                <img
                                    src={cl.img}
                                    alt={cl.alt}
                                    className={cl.cls}
                                    key={`img` + cl._id}
                                    //id={cl._id} 
                                    onClick={() => this.openModal(cl._id)} />
                            </div>
                            <div
                                className="modal"
                                id={cl._id}
                                key={`mod` + cl._id}
                                onClick={this.closeModal}>
                                {cl.txt}
                            </div>
                        </>)
                }
            </section>*/}

export default ClientModal;
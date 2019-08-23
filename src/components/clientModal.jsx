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

export default ClientModal;
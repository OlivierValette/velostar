import React, {Component} from 'react';
import {Badge, ListGroupItem} from "react-bootstrap";

class ItemStation extends Component {

    handleClick (event) {
        event.preventDefault();
        return this.props.idSelected(this.props.station.idstation);
    }

    render() {

        let dispo = "primary";
        if (this.props.station.nombrevelosdisponibles === 0) {
            dispo = "danger";
        }

        return (
            <ListGroupItem href="#" onClick={e => this.handleClick(e)} className="d-flex justify-content-between align-items-center">
                {this.props.station.nom}
                <Badge bsStyle={dispo} className="badge-pill">{this.props.station.nombrevelosdisponibles}</Badge>
                </ListGroupItem>
        );
    }
}

export default ItemStation;
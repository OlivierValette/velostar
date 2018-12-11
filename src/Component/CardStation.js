import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem, Alert} from "react-bootstrap";

class CardStation extends Component {

    constructor(props) {
        super(props);
        this.state = { station: null};
    }

    componentDidMount() {
        // get station info through API (https://data.rennesmetropole.fr/)
        fetch ('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&q=idstation%3D'
            + this.props.idStation
            + '&facet=nom&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles&facet=nombrevelosdisponibles')
            .then(response => response.json())
            .then(data => this.setState({station: data.records[0].fields}))
    }

    render() {

        if (this.state.station == null) {
            return (
                < div className="container">
                    <Alert bsStyle="warning">Chargement en cours...</Alert>
                </div>
            );
        }

        return (
            < div className="container">
                <Panel>
                    <Panel.Heading>{this.state.station.nom}</Panel.Heading>
                    <Panel.Body>Some default panel content here.</Panel.Body>
                    <ListGroup>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>&hellip;</ListGroupItem>
                    </ListGroup>
                    <Panel.Body>Some more panel content here.</Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default CardStation;
import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem, Alert} from "react-bootstrap";

class CardStation extends Component {

    constructor(props) {
        super(props);
        this.state = { station: null};
    }

    componentDidMount() {
        // get info from station with id idStation
        this.loadStation();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // get station info if an idStation change occurred
        if (this.props.idStation !== prevProps.idStation) {
            this.loadStation();
        }
    }

    loadStation() {
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
                    <Panel.Body>Etat de la station : {this.state.station.etat}</Panel.Body>
                    <ListGroup>
                        <ListGroupItem>Nombre de vélos disponibles : {this.state.station.nombrevelosdisponibles}</ListGroupItem>
                        <ListGroupItem>Nombre d'emplacements disponibles : {this.state.station.nombreemplacementsdisponibles}</ListGroupItem>
                        <ListGroupItem>Coordonnées : {this.state.station.coordonnees[0]} - {this.state.station.coordonnees[1]}</ListGroupItem>
                    </ListGroup>
                    <Panel.Body>{this.state.station.idstation}. (mise à jour : {this.state.station.lastupdate})</Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default CardStation;
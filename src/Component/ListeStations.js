import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import ItemStation from "./ItemStation";

class ListeStations extends Component {

    constructor(props) {
        super(props);
        this.state = { stations: [] };
    }

    componentDidMount() {
        // get list of stations in state through API (https://data.rennesmetropole.fr/)
        fetch ('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&rows=100&sort=nom&facet=nom&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles&facet=nombrevelosdisponibles')
            .then(response => response.json())
            .then(data => this.setState({stations: data.records}))
    }

    idSelected(id) {
        return this.props.idSelected(id);
    }

    render() {

        const items = this.state.stations.map( station => <ItemStation
            key={station.fields.idstation}
            station={station.fields}
            idSelected={id => this.idSelected(id)}
        /> );

        return (
            <ListGroup>
                <ListGroupItem>
                    {items}
                </ListGroupItem>
            </ListGroup>
        );
    }
}

export default ListeStations;
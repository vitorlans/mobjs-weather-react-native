import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Icon, Grid, Row } from 'react-native-elements';

import { getByCoord } from '../../actions/weather'

export default class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            longitude: "",
            latitude: "",
            name: "",
            temperature: ""
        };

        this.watchID = null;
    }

    static navigationOptions = {

        title: 'Weather',

        header: ({ state, setParams, navigate }) => ({
            // Render a button on the right side of the header
            // When pressed switches the screen to edit mode.
            right: <Icon name='search' onPress={() => navigate('SearchScreen')} />,
            tintColor: 'blue'
        })
    }

    GetWeatherFromApi() {

        getByCoord(this.state.latitude, this.state.longitude)
            .then((data) => {
                console.log(data);
                this.setState({
                    name: data.name,
                    temperature: data.main.temp
                });

            });


    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude },
                    () => {
                        this.GetWeatherFromApi();
                    });
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude },
        //         () => {
        //             this.GetWeatherFromApi();
        //         });
        // });
    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <ScrollView>
                <Text h2>{this.state.name} {'\n'}</Text>
                <Text h3>{this.state.temperature}</Text>
            </ScrollView>
        )
    }

}
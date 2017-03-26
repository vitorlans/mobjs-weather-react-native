import React, {Component} from 'react';
import { Text } from 'react-native';

import { SearchBar } from 'react-native-elements'

export default class Search extends Component  {

    static navigationOptions = { 
        header: {
            visible: false
        },
        title: 'Search'
    };

    render() {
        return <SearchBar lightTheme />
    }

}
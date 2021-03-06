import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
    Text
} from 'react-native';

import Switch from 'react-native-rnswitch';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            switchOne: false,
            switchTwo: false,
            switchThree: false,
            switchFour: false,
            switchFive: false,
            switchSix: false
        };

        this._toggleOne = this._toggleOne.bind(this);
        this._toggleTwo = this._toggleTwo.bind(this);
        this._toggleThree = this._toggleThree.bind(this);
        this._toggleFour = this._toggleFour.bind(this);
        this._toggleFive = this._toggleFive.bind(this);
        this._toggleSix = this._toggleSix.bind(this);
    }

    _toggleOne = value => {
        this.setState({switchOne: value});
    };

    _toggleTwo = value => {
        this.setState({switchTwo: value});
    };

    _toggleThree = value => {
        this.setState({switchThree: value});
    };

    _toggleFour = value => {
        this.setState({switchFour: value});
    };

    _toggleFive = value => {
        this.setState({switchFive: value});
    };

    _toggleSix = value => {
        this.setState({switchSix: value});
    };

    render(){
        let {
            switchOne,
            switchTwo,
            switchThree,
            switchFour,
            switchFive,
            switchSix
        } = this.state;

        return (
            <View>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <View style={{padding: 20}}>
                            <Text>Default</Text>
                            <Text>onValueChange</Text>
                            <Switch
                                value={switchOne}
                                onValueChange={(value)=>this._toggleOne(value)}
                            />
                        </View>
                        <View style={{padding: 20}}>
                            <Text>onValueChange</Text>
                            <Text>Text : true</Text>
                            <Switch
                                value={switchTwo}
                                onValueChange={(value)=>this._toggleTwo(value)}
                                text={true}
                            />
                        </View>
                        <View style={{padding: 20}}>
                            <Text>onValueChange</Text>
                            <Text>Text : true</Text>
                            <Text>duration : 200</Text>
                            <Switch
                                value={switchThree}
                                onValueChange={(value)=>this._toggleThree(value)}
                                text={true}
                                duration={200}
                            />
                        </View>
                        <View style={{padding: 20}}>
                            <Text>onValueChange</Text>
                            <Text>Text : true</Text>
                            <Text>duration : 200</Text>
                            <Text>activeOpacity : 1</Text>
                            <Switch
                                value={switchFour}
                                onValueChange={(value)=>this._toggleFour(value)}
                                text={true}
                                duration={200}
                                activeOpacity={1}
                            />
                        </View>
                        <View style={{padding: 20}}>
                            <Text>endAnimation</Text>
                            <Text>Text : true</Text>
                            <Text>duration : 200</Text>
                            <Text>activeOpacity : 1</Text>
                            <Switch
                                value={switchFive}
                                endAnimation={(value)=>this._toggleFive(value)}
                                text={true}
                                duration={200}
                                activeOpacity={1}
                            />
                        </View>
                        <View style={{padding: 20}}>
                            <Text>endAnimation</Text>
                            <Text>Text : true</Text>
                            <Text>duration : 200</Text>
                            <Text>activeOpacity : 1</Text>
                            <Text>textOnColor : '#000000'</Text>
                            <Text>textOffColor : '#00FF00'</Text>
                            <Text>backgroundColorOn : '#FF0000'</Text>
                            <Text>backgroundColorOff : '#00AAFF'</Text>
                            <Switch
                                value={switchSix}
                                endAnimation={(value)=>this._toggleSix(value)}
                                text={true}
                                duration={200}
                                activeOpacity={1}
                                textOnColor={'#000000'}
                                textOffColor={'#00FF00'}
                                backgroundColorOn={'#FF0000'}
                                backgroundColorOff={'#00AAFF'}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
};
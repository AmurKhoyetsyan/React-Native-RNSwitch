## react-native-RNSwitch

#### install react-native-RNSwitch

if RN version >= 0.60

npm i react-native-RNSwitch

#### Props

| Props            |  Types          | Default         |
| ---------------- | ----------------| ----------------|
| value            | Boolean         | false           |
| onValueChange    | Void            | -               |
| text             | Boolean         | false           |
| duration         | Number          | 500             |
| activeOpacity    | Number          | 0.8             |

#### Example

    import React, { Component } from 'react';
    import {
        SafeAreaView,
        ScrollView,
        View,
        StatusBar,
        Text
    } from 'react-native';

    import Switch from 'react-native-RNSwitch';

    export default class App extends Component {
        constructor(props){
            super(props);
            this.state = {
                switchOne: false,
                switchTwo: false,
                switchThree: false,
                switchFour: false
            };

            this._toggleOne = this._toggleOne.bind(this);
            this._toggleTwo = this._toggleTwo.bind(this);
            this._toggleThree = this._toggleThree.bind(this);
            this._toggleFour = this._toggleFour.bind(this);
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

        render(){
            let {
                switchOne,
                switchTwo,
                switchThree,
                switchFour
            } = this.state;

            return (
                <View>
                    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
                    <SafeAreaView>
                        <ScrollView contentInsetAdjustmentBehavior="automatic">
                            <View style={{padding: 20}}>
                                <Text>Default</Text>
                                <Switch
                                    value={switchOne}
                                    onValueChange={(value)=>this._toggleOne(value)}
                                />
                            </View>
                            <View style={{padding: 20}}>
                                <Text>Text : true</Text>
                                <Switch
                                    value={switchTwo}
                                    onValueChange={(value)=>this._toggleTwo(value)}
                                    text={true}
                                />
                            </View>
                            <View style={{padding: 20}}>
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
                        </ScrollView>
                    </SafeAreaView>
                </View>
            );
        }
    };
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import orderRepository from './orders/repositories/OrderRepository';

export default class shopify_mobile extends Component {

  state = {
    totalOrderRevenue: 0,
    quantityOfAeroDynamicCottonKeyboards: 0
  }

  componentDidMount() {
    orderRepository.getTotalOrderRevenue()
        .then((response) => {
            this.setState({
                totalOrderRevenue: response
            });
        });

    orderRepository.getQuantityOfAerodynamicCottonKeyboards()
        .then((response) => {
          this.setState({
              quantityOfAeroDynamicCottonKeyboards: response
          });
        });
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}></View>
            <Text style={styles.intro}>Total Order Revenue</Text>
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Icon style={styles.iconValue} name="cash-multiple" size={0}/>
                <Text style={styles.value}>CAD <Text style={{fontWeight: '600'}}>{this.state.totalOrderRevenue}</Text></Text>
            </View>
            <Text style={styles.secondIntro}>Aerodynamic Cotton{"\n"} keyboards sold</Text>
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={styles.secondValue}><Text style={{fontWeight: '600'}}>{this.state.quantityOfAeroDynamicCottonKeyboards}</Text></Text>
                <Icon2 style={styles.secondIconValue} name="keyboard" size={0}/>
            </View>
            <View style={{alignSelf: 'flex-end', padding: 5}}>
                <Icon style={{alignSelf: 'flex-end', color: '#FFF', fontSize: 17}} name="android"></Icon>
            </View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStyle: 'solid',
        borderTopColor: 'rgb(234, 76, 136)',
        borderRightColor: 'rgb(234, 76, 136)',
        borderBottomColor: 'rgb(234, 76, 136)',
        borderLeftColor: 'rgb(234, 76, 136)',
        borderTopWidth: 20,
        borderBottomWidth: 20,
        borderWidth: 2,
        backgroundColor: '#2c3338'
    },
    intro: {
        fontSize: 25,
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 30
    },
    secondIntro: {
        fontSize: 25,
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 30
    },
    value: {
        fontSize: 25,
        color: '#FFF',
        marginRight: 70,
        paddingTop: 20
    },
    secondValue: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 125,
        paddingTop: 13
    },
    iconValue: {
        fontSize: 60,
        color: 'rgb(234, 76, 136)',
        marginLeft: 70
    },
    secondIconValue: {
        fontSize: 60,
        color: 'rgb(234, 76, 136)',
        marginRight: 125,
    }
});

AppRegistry.registerComponent('shopify_mobile', () => shopify_mobile);

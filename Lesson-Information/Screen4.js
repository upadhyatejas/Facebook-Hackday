import React from 'react';
import {
  Text,
  View,
  Image,
  asset
} from 'react-360';

export default class Screen4 extends React.Component {
  render() {
    // Reference the count in our UI
    return (
      <View style={{ flexDirection: 'row',backgroundColor:'rgba(255,255,255,0.6)'}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:150,height:200,margin:5}} source={asset('portugal.jpg')} ></Image>
        </View>
        <View style={{width: 600, height:600,justifyContent:'center',alignItems:'center'}} >
          <Text style={{fontSize:30}}>The State of India (Portuguese: Estado da Índia), also referred as the Portuguese State of India (Estado Português da Índia, EPI) or simply Portuguese India (Índia Portuguesa), was a state of the Portuguese Empire, founded six years after the discovery of a sea route between Portugal and the Indian Subcontinent to serve as the governing body of a string of Portuguese fortresses and colonies overseas.The first viceroy, Francisco de Almeida, established his headquarters in Cochin (Cochim, Kochi). (Subsequent Portuguese governors were not always of viceroy rank.) After 1510, the capital of the Portuguese viceroyalty was transferred to Goa.Until the 18th century, the Portuguese governor in Goa had authority over all Portuguese possessions in the Indian Ocean, from southern Africa to southeast Asia.</Text>
        </View>
      </View>
    );
  }
};
import React from 'react';
import {
  Text,
  View,
  Image,
  asset
} from 'react-360';

export default class Screen3 extends React.Component {
  render() {
    // Reference the count in our UI
    return (
      <View style={{ flexDirection: 'row',backgroundColor:'rgba(255,255,255,0.6)'}}>
        <View style={{justifyContent:'left',alignItems:'center'}}>
          <Image style={{width:250,height:400,margin:10}} source={asset('eic-coin.jpg')} ></Image>
        </View>
        <View style={{width: 600, height:400,justifyContent:'left',alignItems:'center'}} >
          <Text style={{fontSize:30}}>The East India Company (EIC), also known as the Honourable East India Company (HEIC) or the British East India Company, and informally known as John Company, Company Bahadur, or simply The Company, was an English and later British joint-stock company.It was formed to trade in the Indian Ocean region, initially with Mughal India and the East Indies, and later with Qing China. The company ended up seizing control over large parts of the Indian subcontinent, colonised parts of Southeast Asia, and colonised Hong Kong after a war with Qing China</Text>
        </View>
      </View>
    );
  }
};
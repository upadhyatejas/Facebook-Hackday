import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
//import console = require('console');



export default class Screen2 extends React.Component {

  render() {
    // Reference the count in our UI
    return (
      <View style={{ flexDirection: 'row',backgroundColor:'rgba(255,255,255,0.4'}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:300,height:500,margin:10}} source={asset('bhagwad-gita.jpg')} ></Image>
        </View>
        <View style={{width: 600, height:600,justifyContent:'center',alignItems:'center'}} >
          <Text style={{fontSize:30}}>Hicky's Bengal Gazette or the Original Calcutta General Advertiser was an English language weekly newspaper published in Kolkata (then Calcutta), the capital of British India. It was the first newspaper printed in Asia, and was published for two years, before the East India Company seized the newspaper's types and printing press. Founded by James Augustus Hicky, a highly eccentric Irishman who had previously spent two years in jail for debt, the newspaper was a strong critic of the administration of the Governor General Warren Hastings. The newspaper was important for its provocative journalism well before its time and its fight for free expression in India</Text>
        </View>
      </View>
    );
  }
};
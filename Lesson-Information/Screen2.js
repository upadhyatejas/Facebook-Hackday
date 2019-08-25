import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  asset,
} from 'react-360';
//import console = require('console');



export default class Screen2 extends React.Component {

  render() {
    // Reference the count in our UI
    return (
      <View style={{ flexDirection: 'row',backgroundColor:'rgba(255,255,255,0.6)'}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:100,height:100,margin:0}} source={asset('bhagavad-gita.jpg')} ></Image>
        </View>
        <View style={{width: 600, height:600,justifyContent:'center',alignItems:'center'}} >
          <Text style={{fontSize:30}}>The Bhagavad Gita often referred to as the Gita, is a 700-verse Sanskrit scripture that is part of the Hindu epic Mahabharata (chapters 23–40 of Bhishma Parva).The Gita is set in a narrative framework of a dialogue between Pandava prince Arjuna and his guide and charioteer Krishna. At the start of the Dharma Yudhha (righteous war) between Pandavas and Kauravas, Arjuna is filled with moral dilemma and despair about the violence and death the war will cause. He wonders if he should renounce and seeks Krishna's counsel, whose answers and discourse constitute the Bhagadvad Gita. Krishna counsels Arjuna to "fulfill his Kshatriya (warrior) duty to uphold the Dharma" through "selfless action".The Krishna–Arjuna dialogue cover a broad range of spiritual topics, touching upon ethical dilemmas and philosophical issues that go far beyond the war Arjuna faces.</Text>


        </View>
      </View>
    );
  }
};
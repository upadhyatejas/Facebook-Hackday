import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

//here the react360 surface is rendered with necessary specifications
export default class hello_react_360 extends React.Component {
  render() {
    return (
      //View styles are used for formatting the surfaces
      //Inside the text tag it doesnt allow standard html text formatting tags inside it
      //here styles is a formatting object of a surface which allows formatting of different objects/ aspects of it
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
          Index
          {'\n'}
          {'\n'}           
          </Text>
          <Text style={styles.greets}>
            1.History of India
            {'\n'}
            2.Colonisation of India
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 400,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  greets: {
    fontSize: 30,
    fontWeight: 'normal',
    textAlign: 'left',
  }
});

AppRegistry.registerComponent('hello_react_360', () => hello_react_360);

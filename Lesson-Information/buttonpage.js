import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Hello360 extends React.Component {

  render() {
    return (
      <View style={styles.panel}>
          {/* <Text>
              {`${this.state.info}`}
          </Text> */}
        <VrButton 
          onClick={this._incrementCount1}
        style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Next
          </Text>
          </VrButton>
          <VrButton 
          onClick={this._incrementCount2}
        style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Back
          </Text>
          </VrButton>
          <VrButton 
          onClick={this._incrementCount3}
        style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Index
          </Text>
          </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 600,
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
    fontSize: 30,
  },
});

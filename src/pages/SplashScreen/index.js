import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../../components';

const SplashScreen = () => {
  return (
    <View>
      <View>
        <Image
          source={require('../../../assets/Vector.png')}
          style={styles.imageAwan}
        />
        <Image
          source={require('../../../assets/Vector-1.png')}
          style={styles.imageAwan1}
        />
        <Image
          source={require('../../../assets/Vector-2.png')}
          style={styles.imageAwan2}
        />
        <View>
          <Image
            source={require('../../../assets/Orang.png')}
            style={styles.illustrationPeople}
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Enjoy Your Holiday</Text>
        <Text style={styles.title}>Today!</Text>
        <Text style={styles.subTitle}>Go to all destinations you like</Text>
      </View>
      <View style={styles.button}>
        <Button />
      </View>
      <View>
        <Text style={styles.register}>Register</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageAwan: {width: 150, height: 45, marginTop: 55, marginHorizontal: 115},
  imageAwan1: {width: 90, height: 27, marginLeft: 265, marginTop: 70},
  imageAwan2: {width: 60, height: 18, marginTop: 6, marginLeft: 41},
  illustrationPeople: {
    width: 155,
    height: 287,
    marginTop: -15,
    marginHorizontal: 110,
    marginBottom: 40,
  },
  title: {fontWeight: '800', fontSize: 25, textAlign: 'center', color: 'black'},
  subTitle: {
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
    color: '#B5B5B5',
  },
  button: {width: 240, height: 60, justifyContent: 'center', marginTop: 40},
  register: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
    color: '#F84163',
  },
});

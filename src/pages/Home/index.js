import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Slider from '../../components/Slider';

const images = [
  'https://images.unsplash.com/photo-1553902000-e036b7d05af5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1624935851312-845758a99160?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFuYWglMjBsb3QlMjBiYWxpJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1612176678303-2204e6473cbe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGFuYWglMjBsb3QlMjBiYWxpJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1533396686798-ef349f08cdb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFuYWglMjBsb3QlMjBiYWxpJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1562668050-10e03ef2db3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFuYWglMjBsb3QlMjBiYWxpJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Slider images={images} />
        </View>
        <View style={styles.container}>
          <View style={styles.wrappercontent}>
            <View style={styles.content}>
              <View>
                <Text style={styles.title}>Tanah Lot Beach</Text>
                <Text style={styles.subTitle}>Bali, Indonesia</Text>
              </View>
              <Image
                source={require('../../../assets/IconLove.png')}
                style={styles.iconLove}
              />
            </View>
            <View style={styles.wrapperBorder}>
              <View style={styles.borderContent}>
                <View>
                  <View style={styles.borderItems}>
                    <Text style={styles.ratingText}>4.8</Text>
                    <Image
                      source={require('../../../assets/IconRating.png')}
                      style={styles.iconRating}
                    />
                    <View />
                  </View>
                  <Text style={styles.riviewText}>250 Riviwers</Text>
                </View>
              </View>
              <View style={styles.borderContent}>
                <View>
                  <View style={styles.borderItems}>
                    <Text style={styles.ratingText}>20</Text>
                    <Image
                      source={require('../../../assets/IconHotel.png')}
                      style={styles.iconHotel}
                    />
                    <View />
                  </View>
                  <Text style={styles.riviewText}>Hotel Nearby</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.titleDesc}>Desicription</Text>
              <Text style={styles.desc}>
                Tanah Lot is one of the important temples for Balinese Hindus
                and the location of the temple is located on a large rock off
                the coast. Tanah Lot Temple is a tourism icon on the island of
                Bali. In addition, it is one of the famous tourist attractions
                on the island of Bali that must be visited. Because of the
                famous tourist attractions in Bali, almost every day, this
                tourist attraction is always crowded with tourist visits.
              </Text>
            </View>
            <View style={styles.wrapperButton}>
              <Image
                source={require('../../../assets/IconLoveButton.png')}
                style={styles.iconLoveButton}
              />
              <Image
                source={require('../../../assets/IconHome.png')}
                style={styles.iconHome}
              />
              <Image
                source={require('../../../assets/IconBack.png')}
                style={styles.iconBack}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  wrappercontent: {padding: 24},
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontWeight: '700', color: 'black'},
  subTitle: {fontSize: 15, fontWeight: '400', color: 'black'},
  iconLove: {width: 24, height: 22},
  wrapperBorder: {
    flexDirection: 'row',
    marginVertical: 19,
    paddingHorizontal: 25,
  },
  borderContent: {
    borderWidth: 2,
    width: 134,
    height: 108,
    borderColor: '#B5B5B5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  borderItems: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ratingText: {fontSize: 20, fontWeight: '700', color: 'black', marginRight: 5},
  iconRating: {width: 19, height: 17, alignSelf: 'center'},
  iconHotel: {width: 18, height: 16, alignSelf: 'center'},
  riviewText: {fontSize: 10, fontWeight: '700', color: '#B5B5B5'},
  titleDesc: {fontSize: 20, fontWeight: '700', color: 'black'},
  desc: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    lineHeight: 20,
    marginTop: 9,
  },
  wrapperButton: {
    flexDirection: 'row',
    marginHorizontal: 80,
    justifyContent: 'center',
    marginTop: 27,
  },
  iconLoveButton: {width: 22, height: 20, marginRight: 72},
  iconHome: {width: 25, height: 24, marginRight: 71},
  iconBack: {width: 9, height: 20},
});

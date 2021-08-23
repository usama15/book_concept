import React from 'react'
import { Text, SafeAreaView, ScrollView, StyleSheet,View, Image, TouchableOpacity } from 'react-native'
import AppBar from '../Component/AppBar'
import {Avatar} from 'react-native-paper';

export default function About() {
    return (
        <SafeAreaView>
            <ScrollView>
                <AppBar/>
            <View style={styles.main}>
            <Image
              style={styles.img}
              source={require('../assets/bk-konceptz.png')}
            />
          </View>
          <View style={styles.text_view}>
            <Text style={styles.head}>Bookonceptz</Text>
            <Text style={styles.text}>
            Our mission to give the customers opportunity to enjoy high-quality services to order and receive the best books. Choose your favorite book with us!
            </Text>
          </View>
          <View style={styles.social_group}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.facebook.com/bookkonceptz',
                );
              }}>
              <Avatar.Icon size={32} icon="facebook" style={styles.social} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.instagram.com/bookkonceptz/');
              }}>
              <Avatar.Icon size={32} icon="instagram" style={styles.social} />
            </TouchableOpacity>
          </View>
            </ScrollView>
        </SafeAreaView>
    )

   
}
const styles = StyleSheet.create({
    heading1:{
        fontSize:22,
        fontWeight:'bold',
    },
    main: {
        // marginBottom: '-40%',
        height:400,
      },
      img: {
        // flex:1,
        width: '70%',
        height: '70%',
        marginTop: '8%',
        marginHorizontal: '15%',
        borderRadius: 10,
      },
      head: {
        marginTop: '2%',
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        padding: 5,
      },
      text: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 20,
        padding: 25,
      },
      text_view: {
        borderRadius: 10,
        backgroundColor: '#3C3C3C',
        width: '95%',
        marginHorizontal: '2%',
      },
      social: {
        backgroundColor: 'white',
      },
      social_group: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '40%',
        marginTop: '7%',
        marginLeft: '30%',
        marginBottom: '2%',
      },
     
})

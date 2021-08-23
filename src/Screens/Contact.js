import React from 'react'
import { Text, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Image, Dimensions, Linking } from 'react-native'
import AppBar from '../Component/AppBar'
import {Avatar, Button} from 'react-native-paper';

export default function Contact() {
    return (
        <SafeAreaView>
            <ScrollView>
                <AppBar/>
                <View style={styles.main}>
            <View style={styles.text_view}>
              <Text style={styles.head}>
                Do you have anything in your mind to tell us?
              </Text>
              <Text style={styles.head}>
                Please don't hesitate to get in touch
              </Text>
            </View>
            <Button
              style={styles.btn}
              mode="contained"
              icon="phone"
              onPress={() => {
                Linking.openURL('tel:+971505087856');
              }}>
              +971 50 508 7856
            </Button>
            <Button
              style={styles.btn2}
              mode="contained"
              icon="email"
              onPress={() => {
                Linking.openURL('mailto:info@bookkonceptz.com');
              }}
            >
              info@bookkonceptz.com
            </Button>
            <TouchableOpacity
              style={styles.area}
              onPress={() => {
                Linking.openURL('google.navigation:q= 25.289388265872006+55.36994749259537');
              }}>
              <Image
                style={styles.img}
                source={require('../assets/map.png')}
              />
            </TouchableOpacity>
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
const win = Dimensions.get('window');

const styles = StyleSheet.create({
    heading1:{
        fontSize:22,
        fontWeight:'bold',
    },
    main: {
        flex: 1,
        alignItems: 'center',
        height: win.height,
      },
      text_view: {
        marginTop: '20%',
        borderRadius: 10,
        backgroundColor: '#3C3C3C',
        width: '85%',
        // marginHorizontal: '8%',
        padding: '2%',
      },
      head: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        color:'white',
      },
      btn: {
        marginTop: '30%',
        marginHorizontal: '5%',
        borderRadius: 8,
        backgroundColor: '#5171FF',
        width: '50%',
        height: '6%',
        justifyContent: 'center',
      },
      btn2: {
        marginTop: '8%',
        marginHorizontal: '5%',
        borderRadius: 8,
        backgroundColor: '#5171FF',
        width: '65%',
        height: '6%',
        justifyContent: 'center',
      },
      area: {
        width: '80%',
        height: '30%',
        marginTop: '5%',
      },
      img: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        borderColor:'black',
        borderWidth:1,
      },
      social: {
        backgroundColor: 'white',
      },
      social_group: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '40%',
        marginTop: '-10%',
        marginLeft: '30%',
        marginBottom: '4%',
      },
})

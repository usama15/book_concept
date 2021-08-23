import React from 'react'
import { Text, SafeAreaView, ScrollView, StyleSheet, View, Image } from 'react-native'
import AppBar from '../Component/AppBar'


export default function Browse() {
    return (
        <SafeAreaView>
            <ScrollView>
                <AppBar/>
                <View>
              <View style={styles.group}>
                  <View >
                    <Image style={{width:120, height:200, resizeMode:'cover',borderRadius:10,}} 
                    source={{uri:'https://i2.wp.com/bookkonceptz.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-02-at-8.16.33-PM-2.jpeg?fit=784%2C1200&ssl=1'}}/>
                    <Text style={{fontSize: 18}}>Prayer of the</Text>
                    <Text style={{fontSize: 18}}>Pious</Text>
                    <Text style={styles.price}>Price: د.إ49</Text>
                  </View>
                  <View>
                    <Image style={{width:120, height:200, resizeMode:'cover', borderRadius:10,}} 
                    source={{uri:'https://i0.wp.com/bookkonceptz.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-02-at-8.16.34-PM.jpeg?fit=1269%2C1280&ssl=1'}}/>
                    <Text style={{fontSize: 18}}>The story of </Text>
                    <Text style={{fontSize: 18}}>Maryam</Text>
                    <Text style={styles.price}>Price: د.إ49</Text>
                  </View>
                  <View>
                    <Image style={{width:120, height:200, resizeMode:'cover',borderRadius:10,}} 
                    source={{uri:'https://i1.wp.com/bookkonceptz.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-02-at-8.16.34-PM-1.jpeg?fit=1280%2C1267&ssl=1'}}/>
                    <Text style={{fontSize: 18}}>The story of </Text>
                    <Text style={{fontSize: 18}}>Prophet Adam</Text>
                    <Text style={styles.price}>Price: د.إ49</Text>
                  </View>
              </View>
              <View style={styles.group}>
                  <View >
                    <Image style={{width:120, height:200, resizeMode:'cover',borderRadius:10,}} 
                    source={{uri:'https://i1.wp.com/bookkonceptz.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-02-at-8.16.34-PM-2.jpeg?fit=1280%2C1273&ssl=1'}}/>
                    <Text style={{fontSize: 18}}>The story of </Text>
                    <Text style={{fontSize: 18}}>Seven Sleepers</Text>
                    <Text style={styles.price}>Price: د.إ49</Text>
                  </View>
                  <View>
                    <Image style={{width:120, height:200, resizeMode:'cover', borderRadius:10,}} 
                    source={{uri:'https://i1.wp.com/bookkonceptz.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-02-at-8.16.35-PM.jpeg?fit=640%2C910&ssl=1'}}/>
                    <Text style={{fontSize: 18}}>Tajweed for </Text>
                    <Text style={{fontSize: 18}}>children</Text>
                    <Text style={styles.price}>Price: د.إ49</Text>
                  </View>
                  <View>
                    <Image style={{width:120, height:200, resizeMode:'cover',borderRadius:10,}} 
                    source={{uri:'https://i2.wp.com/bookkonceptz.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-02-at-8.16.33-PM.jpeg?fit=425%2C428&ssl=1'}}/>
                    <Text style={{fontSize: 18}}>I went for Hajj</Text>
                    <Text style={styles.price}>Price: د.إ49</Text>
                  </View>
              </View>
              <View style={styles.group}>
                  <View >
                    <Image style={{width:120, height:200, resizeMode:'cover',borderRadius:10,}} 
                    source={{uri:'https://i2.wp.com/bookkonceptz.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-02-at-8.16.33-PM-1.jpeg?fit=425%2C425&ssl=1'}}/>
                    <Text style={{fontSize: 18}}>Pizza in his </Text>
                    <Text style={{fontSize: 18}}>Pocket</Text>
                    <Text style={styles.price}>Price: د.إ49</Text>
                  </View>
              </View>
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
    group:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'2%',
    },
    price:{
      textAlign:'left',
    },
})

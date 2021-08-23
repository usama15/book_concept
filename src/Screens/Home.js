import React from 'react'
import { Text, SafeAreaView, ScrollView, StyleSheet, View, Linking } from 'react-native'
import { Button } from 'react-native-paper'
import AppBar from '../Component/AppBar'
import Category from '../Component/Category'
import Slider from '../Component/Slider'

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                <AppBar/>
                <Text style={styles.heading1}>Trending Books</Text>
                <Slider/>
                <View style={styles.btn_view}>
                <Button
                style={[styles.btn1]}
                mode="contained"
                icon="shopping"
                onPress={() => {
                    Linking.openURL('https://bookkonceptz.com/');
                  }}>
                Order Now
              </Button>
                </View>
                <Text style={[styles.heading1,{marginTop:'-2%',}]}>Browse by category</Text>
                <Category/>
            </ScrollView>
        </SafeAreaView>
    )

   
}
const styles = StyleSheet.create({
    heading1:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:'2%',
    },
    btn1: {
        borderRadius: 8,
        backgroundColor: '#5171FF',
        width: '40%',
    },
    btn_view:{
        alignItems:'center',
        marginBottom:'4%',
    },

})

import React from 'react'
import { Text, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity,Image, ImageBackground, Linking } from 'react-native'


export default function Category() {
    return (
        <SafeAreaView>
           <View>
               <View style={styles.group_btn}>
               <TouchableOpacity style={styles.btn}  onPress={() => {
                    Linking.openURL('https://bookkonceptz.com/product-category/islamic-books/');
                  }}>
                   <Image style={styles.btnLogo} source={require('../assets/btn1.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btn}  onPress={() => {
                    Linking.openURL('https://bookkonceptz.com/product-category/children-islamic-books/');
                  }}>
                   <Image style={styles.btnLogo} source={require('../assets/btn2.png')}/>
               </TouchableOpacity>
               </View>
               <View style={styles.group_btn1}>
               <TouchableOpacity style={styles.btn}  onPress={() => {
                    Linking.openURL('https://bookkonceptz.com/product-category/children-books-0-12/');
                  }}>
                   <Image style={styles.btnLogo} source={require('../assets/btn4.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btn}  onPress={() => {
                    Linking.openURL('https://bookkonceptz.com/product-category/books-for-kids/');
                  }}>
               <Image style={styles.btnLogo} source={require('../assets/btn3.png')}/>
               </TouchableOpacity>
               </View>
           </View>
        </SafeAreaView>
    )

   
}
const styles = StyleSheet.create({
    heading1:{
        fontSize:22,
        fontWeight:'bold',
    },
    btnLogo:{
        width:90,
        height:90,
    },
    btn:{
        height:'100%',
        width:'23%',
    },
    group_btn:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'6%',
    },
    group_btn1:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'8%',
        marginBottom:'4%',
    },
    back:{
        // width:'100%',
        // height:'100%',
    },
})

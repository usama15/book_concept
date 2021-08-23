import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class Slider extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:3,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
              book: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394245670l/21345959.jpg'
          },
          {
              title:"Item 2",
              text: "Text 2",
              book: 'data:image/jpeg;base64,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'
          },
          {
              title:"Item 3",
              text: "Text 3",
              book: "https://images-na.ssl-images-amazon.com/images/I/91Jh1OWI5EL.jpg"
          },
          {
              title:"Item 4",
              text: "Text 4",
              book: 'https://images-na.ssl-images-amazon.com/images/I/51C6J0JFKxL._SX349_BO1,204,203,200_.jpg'
          },
          {
              title:"Item 5",
              text: "Text 5",
              book: 'https://5.imimg.com/data5/UQ/FW/MY-61376685/the-twelve-dancing-princesses-book-500x500.png'
          },
          {
            title:"Item 5",
            text: "Text 5",
            book: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327928118l/10020930.jpg'
        },
        {
          title:"Item 5",
          text: "Text 5",
          book: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347611374l/1932123.jpg'
      },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              // backgroundColor:'gray',
              borderRadius: 5,
              height: 250,
              padding: 25,
              // marginLeft: 5,
              marginRight: 5, }}>
              <Image style={{width:120, height:200, resizeMode:'cover', marginTop:'-20%',borderRadius:10,}} source={{uri: item.book}}/>
            {/* <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text> */}
          </View>

        )
    }

   render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'transprant', paddingTop: 20, }}>
            <View style={{ flex: 1, flexDirection:'row',}}>
                <Carousel
                  // layout={"tinder"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={100}
                  itemWidth={160}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } 
                  />
            </View>
          </SafeAreaView>
        );
    }
}

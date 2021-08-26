import React from 'react';
import { Text, View,Image,TextInput,TouchableOpacity,StyleSheet, Linking, Alert, ScrollView} from 'react-native';

export default class HomeScreen extends React.Component{
  contact=()=>{
      alert("Call 93540 85884")
    }
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#F9EDE6'}}>
      <TouchableOpacity onPress={this.contact}>
      <Image 
        style = {{ height: 40, width: 40, marginTop: 10, alignSelf:'flex-end'}}
        source = {require ('../assets/contact.png')}
        />
        </TouchableOpacity>
      <Image 
        style = {{ height: 120, width: 280, marginTop: 10, alignSelf:'center'}}
        source = {require ('../assets/Co.png')}
        />
      <Text style = {{textAlign: 'center', fontSize : 15, fontWeight: 'bold', color: 'black'}}>
      Our Eggless Cakes are perfect combination of Taste, Quality and your Emotions
      </Text>

      <View style={{marginTop:20, height:90,justifyContent:'center',marginBottom:20}}>
      <TouchableOpacity style={{alignSelf:"flex-start"}} onPress={() => Linking.openURL('https://www.instagram.com/rainna_creativeoven/')}>       
       <Image 
         style = {{ height: 50, width: 50}}
         source = {require('../assets/instagram.png')}/>
       <Text>Instagram</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{alignSelf:"center", marginTop:-67}} onPress= {()=> Linking.openURL('https://www.facebook.com/CreativeOvenbyRainna')}>
       <Image 
         style = {{ height: 50, width: 50}}
         source = {require('../assets/facebook.png')}/>
        <Text>Facebook</Text>
        </TouchableOpacity>
       
       <TouchableOpacity style={{alignSelf:"flex-end", marginTop:-67}} onPress={()=> Linking.openURL('https://www.youtube.com/channel/UCKU96RGI-6XvJNGy9r2GflQ')}>
       <Image 
         style = {{ height: 50, width: 50}}
         source = {require('../assets/youtube.png')}/>
         <Text>Youtube</Text>
         </TouchableOpacity>
      </View> 

      <TouchableOpacity style={styles.button} onPress = {()=>{this.props.navigation.navigate('Menu')}}>
      <Text>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress = {()=>{this.props.navigation.navigate('Customise')}}>
      <Text>Customise your cake</Text>
      </TouchableOpacity>
       
       <Image 
         style = {{ resizeMode: "contain", height: 150, width: 100,alignSelf:'flex-end',marginTop:35}}
         source = {require('../assets/p1.png')}/> 
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop:10,
    backgroundColor:'#fa7ff6',
    height:35,
    width:200,
    borderWidth:2,
    borderRadius:11,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginBottom:10
  },
});
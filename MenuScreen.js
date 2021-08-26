import React from 'react';
import { Text, View,Image,TextInput,TouchableOpacity,ScrollView, StyleSheet, Share,KeyboardAvoidingView, Linking } from 'react-native';

export default class MenuScreen extends React.Component{
   constructor() {
    super();
    this.state = {
      text:'',
      address:'',
      phone:'',
      mobileNo:'8447912003',
      name:'',
      kg:''
    };
     }
    SubPre= async()=>{
      let msg = this.state.text;
      let address = this.state.address;
      let mobile = this.state.phone;
      let mes= "Order: "+this.state.text+" ;Address: "+this.state.address+" ;Phone no: "+this.state.phone+" ;Name: "+this.state.name+ " ;Kg of Cake: "+ this.state.kg
      let url =
          "whatsapp://send?text=" +
          mes +
          "&phone=91" +
          this.state.mobileNo; 
      Linking.openURL(url)
        this.setState({
         text:'',
         address:'',
         phone:'',
         name:'',
         kg:''
       })
       alert("Order is placed and will be confirmed by the chef shortly")
     }
    render(){
    return(
        <View style={{backgroundColor:'#F9EDE6'}}>
        <ScrollView>
        <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Home')}}>
       <Image style={{height:60,width:60}} source={require('../assets/Back.png')}/>
        </TouchableOpacity>
        <Image 
        style = {{ height: 120, width: 280, marginLeft:40, marginTop: 20, paddingTop:10,alignSelf:'center'}}
        source = {require ('../assets/Co.png')}
        />
        <View>
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center'}}
        source = {require ('../assets/menu1.jpeg')}
        />
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center'}}
        source = {require ('../assets/menu2.jpeg')}
        />
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center'}}
        source = {require ('../assets/menu3.jpeg')}
        />
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center'}}
        source = {require ('../assets/menu4.jpeg')}
        />
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center'}}
        source = {require ('../assets/menu5.jpeg')}
        />
        </View>
         <KeyboardAvoidingView>
    <Text style={{marginTop:20,fontSize:22}}>Your Order:</Text>
    <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <Text style={{marginTop:10,fontSize:22}}>Details:</Text>
        <TextInput
          style={styles.inputBox}
          placeholder ={"Address"}
          onChangeText={text => {
            this.setState({ address: text });
          }}
          value={this.state.address}
        />
        <TextInput
          style={styles.inputBox2}
          placeholder ={"Phone number"}
          onChangeText={text => {
            this.setState({ phone: text });
          }}
          value={this.state.phone}
        />
        <TextInput
          style={styles.inputBox2}
          placeholder ={"Name"}
          onChangeText={text => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />
        <TextInput
          style={styles.inputBox2}
          placeholder ={"Kg of Cake"}
          onChangeText={text => {
            this.setState({ kg: text });
          }}
          value={this.state.kg}
        />
    
    <TouchableOpacity style={styles.button2} onPress={this.SubPre}>
     <Text style={styles.buttonText}>Submit</Text>
     </TouchableOpacity>
     </KeyboardAvoidingView>
        </ScrollView>
        </View>
    )
        
}
}
const styles = StyleSheet.create({
    button2: {
    marginTop:10,
    backgroundColor:'#fa7ff6',
    height:40,
    width:200,
    borderWidth:2,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100
  },
  buttonText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20
  },
  inputBox:{
    width:300,
    color:"black",
    borderWidth:2,
    height:40,
    alignItems:'center',
    alignSelf:'center'
  },
  inputBox2:{
    width:300,
    color:"black",
    borderWidth:2,
    height:40,
    alignItems:'center',
    alignSelf:'center',
    marginTop:5
  }
});
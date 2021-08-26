import React from 'react';
import { Text, View,Image,TouchableOpacity,StyleSheet,ScrollView,TextInput, KeyboardAvoidingView, Share, Alert, Linking} from 'react-native';

export default class CustScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      text:'',
      address:'',
      phone:'',
      name:'',
      kg:'',
      mobileNo:'8447912003'
    };
     }
     //Bread
     VanBrePre=()=>{
       this.setState({
         text: this.state.text+' Vanilla Bread,'
       })
     }
     ChocBrePre=()=>{
       this.setState({
         text: this.state.text+' Chocolate Bread,'
       })
     }
     ButterBrePre=()=>{
       this.setState({
         text: this.state.text+' Butter Scotch Bread,'
       })
     }
     CoffeeBrePre=()=>{
       this.setState({
         text: this.state.text+' Coffee Bread,'
       })
     }
     PineBrePre=()=>{
       this.setState({
         text: this.state.text+' Pineapple Bread,'
       })
     }
     //Cream
          VanPre=()=>{
       this.setState({
         text: this.state.text+' Vanilla Cream,'
       })
     }
     ChocPre=()=>{
       this.setState({
         text: this.state.text+' Chocolate Cream,'
       })
     }
     ButterPre=()=>{
       this.setState({
         text: this.state.text+' Butter Scotch Cream,'
       })
     }
     CoffeePre=()=>{
       this.setState({
         text: this.state.text+' Coffee Cream,'
       })
     }
     PinePre=()=>{
       this.setState({
         text: this.state.text+' Pineapple Cream,'
       })
     }
     //Fillings and Toppings
     PineFil=()=>{
       this.setState({
         text: this.state.text+' Pineapple Topping,'
       })
     }
     CherryFil=()=>{
       this.setState({
         text: this.state.text+' Cherry Topping,'
       })
     }
     StrawFil=()=>{
       this.setState({
         text: this.state.text+' Strawberry Topping,'
       })
     }
     ManFil=()=>{
       this.setState({
         text: this.state.text+' Mango Topping,'
       })
     }
     BlueFil=()=>{
       this.setState({
         text: this.state.text+' Blueberry Topping,'
       })
     }
     OrgFil=()=>{
       this.setState({
         text: this.state.text+' Orange Topping,'
       })
     }
     KiwiFil=()=>{
       this.setState({
         text: this.state.text+' Kiwi Topping,'
       })
     }
     ChoFil=()=>{
       this.setState({
         text: this.state.text+' Chocolate Truffle Topping,'
       })
     }
     CarFil=()=>{
       this.setState({
         text: this.state.text+' Caramel Topping,'
       })
     }
     ButFil=()=>{
       this.setState({
         text: this.state.text+' Butter Scotch Crunch Topping,'
       })
     }
     ChoChipFil=()=>{
       this.setState({
         text: this.state.text+' Chocolate Chip Topping,'
       })
     }
     BelFil=()=>{
       this.setState({
         text: this.state.text+' Belgiam Chocolate Topping,'
       })
     }
     ChoFlFil=()=>{
       this.setState({
         text: this.state.text+' Chocolate Flake Topping,'
       })
     }
     PeaFil=()=>{
       this.setState({
         text: this.state.text+' Peanut Topping,'
       })
     }
     AlmFil=()=>{
       this.setState({
         text: this.state.text+' Almond Topping,'
       })
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
         phone:''
       })
       alert("Order is placed and will be confirmed by the chef shortly")
     }
render(){
  return(
    <View style={{justifyContent:'center',backgroundColor:'#F9EDE6',height:'100%',width:'100%'}}>
    <ScrollView>
    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Home')}}>
       <Image style={{height:60,width:60}} source={require('../assets/Back.png')}/>
    </TouchableOpacity>

    <Image style={{height:120,width:280,marginTop:10,alignSelf:'center', marginBottom:20}} source={require('../assets/Co.png')}/>

    <View>
    <Text style={{fontSize:22}}>Cake Bread:</Text>
    <Text>*Choose only one</Text>
    <TouchableOpacity style={styles.button} onPress={this.VanBrePre}><Text>Vanilla</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ChocBrePre}><Text>Chocolate</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ButterBrePre}><Text>Butter Scotch</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.CoffeeBrePre}><Text>Coffee</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.PineBrePre}><Text>Pineapple</Text></TouchableOpacity>

    <Text style={{fontSize:22,marginTop:20}}>Cream Flavour:</Text>
    <Text>*Choose only one</Text>
    <TouchableOpacity style={styles.button} onPress={this.VanPre}><Text>Vanilla</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ChocPre}><Text>Chocolate</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ButterPre}><Text>Butter Scotch</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.CoffeePre}><Text>Coffee</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.PinePre}><Text>Pineapple</Text></TouchableOpacity>

    <Text style={{fontSize:22,marginTop:20}}>Fillings and Toppings:</Text>
    <Text>*Choose as many as you want</Text>
    <TouchableOpacity style={styles.button} onPress={this.PineFil}><Text>Pineapple</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.CherryFil}><Text>Cherry</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.StrawFil}><Text>Strawberry</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ManFil}><Text>Mango</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.BlueFil}><Text>Blueberry</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.OrgFil}><Text>Orange</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.KiwiFil}><Text>Kiwi</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ChoFil}><Text>Chocolate Truffle</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.CarFil}><Text>Caramel</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ButFil}><Text>ButterScoth Crunch</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ChoChipFil}><Text>Chocochips</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button}onPress={this.BelFil}><Text>Belgiam Chocolate</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.ChoFlFil}><Text>Chocolate Flakes</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.PeaFil}><Text>Peanuts</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.AlmFil}><Text>Almonds</Text></TouchableOpacity>

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


    </View>
    </ScrollView>
    </View>
  );
}
}
const styles = StyleSheet.create({
  button: {
    marginTop:10,
    backgroundColor:'#fa7ff6',
    height:30,
    width:200,
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10
  }, 
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
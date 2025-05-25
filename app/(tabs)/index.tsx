import { Image, Text, View } from "react-native";


const logoImg = require("../../assets/images/adaptive-icon.png");


export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor: "plum", padding:50, alignItems:"center"}} >
      <Text style={{color: "blue", fontSize:30}}> Hello World </Text>
      <Image source={logoImg} style={{height:200, width:200}} />
      <Image source={{uri:"https://picsum.photos/seed/picsum/200/300"}} style={{height:200, width:300}} />
    </View>
  )
}
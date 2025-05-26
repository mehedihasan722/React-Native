import { Button, View } from "react-native";


export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor: "plum", padding:50}} >
      <Button title="Click Me" onPress={()=> console.log('Button Press')} color="midnightblue" disabled />
    </View>
  )
}
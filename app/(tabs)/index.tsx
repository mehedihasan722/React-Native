import { Alert, Button, View } from "react-native";


export default function HomeScreen() {

  return (
    <View style={{flex:1, backgroundColor: "plum", padding:50}} >
      <Button title="Alert" onPress={()=>Alert.alert("InValid Data!")} />
      <Button title="Alert 2" onPress={()=>Alert.alert("InValid Data!","Dob Incorrect")} />
      <Button title="Alert 3" onPress={()=>Alert.alert("InValid Data!","Dob Incorrect" , [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ])} />
    </View>
  )
}
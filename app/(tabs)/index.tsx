import { StatusBar, View } from "react-native";


export default function HomeScreen() {

  return (
    <View style={{flex:1, backgroundColor: "plum", padding:50}} >
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden />
    </View>
  )
}
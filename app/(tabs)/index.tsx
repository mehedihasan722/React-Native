import { ActivityIndicator, View } from "react-native";


export default function HomeScreen() {

  return (
    <View style={{flex:1, backgroundColor: "plum", padding:50}} >
      <ActivityIndicator  />
      <ActivityIndicator size="large"  />
      <ActivityIndicator size="large" color="midnightblue"  />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
    </View>
  )
}
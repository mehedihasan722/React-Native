import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";


export default function HomeScreen() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{flex:1, backgroundColor: "plum", padding:50}} >
      <Button title="Click Me" onPress={()=> setIsModalVisible(true)} color="midnightblue"  />
        <Modal visible={isModalVisible} onRequestClose={()=> setIsModalVisible(false)} animationType="slide" presentationStyle="pageSheet">
          <View style={{flex:1, backgroundColor: "lightblue", padding:50}} >
            <Text>Modal Content</Text>
            <Button title="Close Modal" onPress={()=> setIsModalVisible(false)} color="midnightblue"   />
          </View> 
        </Modal>
    </View>
  )
}
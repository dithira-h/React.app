import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  console.log("app executed successfully")
  const handlepress = () => console.log("Text was pressed")
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} onPress={handlepress}>
        hellow world this is di's app</Text>
      <TouchableOpacity onPress={() =>console.log("image pressed")}>
        <View style={{height: 200, width: 300, backgroundColor:"dodgerblue"}}>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

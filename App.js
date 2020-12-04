import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
// import SyncStorage from "sync-storage";
import {Feather} from '@expo/vector-icons'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> D-Do </Text>
      </View>

      <View style={styles.contentList}>
        <FlatList
          data={[1, 2, 3, 4]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.note}>
              <Text style={styles.noteTitle}> titulo </Text>
              <Text style={styles.noteText}>
                {" "}
                lorem ipsum impum ipusm lorem ipsum impum ipusm
              </Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.footer}>
        <Feather name="plus" size={20} color="#fff"/>
      </TouchableOpacity>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1F",
  },
  header: {
    width: "100%",
    backgroundColor: "#313866",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  contentList:{
    height:'80%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10%'
  },
  note: {
    borderRadius:20,
    backgroundColor:"#50409A",
    alignItems:'stretch',
    margin:'5%',
    padding:'2%',

  },
  noteTitle:{
    fontSize:30,
    fontWeight:'700',
    color:'#fff',
  },
  noteText:{
    fontSize:15,
    fontWeight:'400',
    color:'#fff',
    width:'50%',
    textAlign:'center'
  },
  footer:{
    height:'7%',
    width:'15%',
    left:'80%',
    bottom:'5%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'5%',
    backgroundColor:'#313866',
    borderRadius:50
  }
});
export default App;

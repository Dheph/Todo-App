import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Modal,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function addNote() {
    setOpen(true);
  }
  function createNote() {
    let note = {
      id:Math.floor(Math.random() * 1000),
      title: title,
      text: text,
    };
    console.log(note.id)
    setNotes((notes) => [...notes, note]);
    setTitle("");
    setText("");
    setOpen(false);
  }

  function deleteNote(indexNote){
    const newData = [...notes];
        const prevIndex = notes.findIndex(item => item.id === indexNote);
        newData.splice(prevIndex, 1);
        setNotes(newData);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> D-Do </Text>
      </View>

      <View style={styles.contentList}>
        <SwipeListView
          data={notes}
          rightOpenValue={-150}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          showsVerticalScrollIndicator={false}
          renderHiddenItem={(hidden) => (
            
            <View style={styles.hiddenButtons}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteNote(hidden.item.id)}
              >
                <Feather name="trash" size={25} color="#fff"/>
              </TouchableOpacity>
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.note} onPress={() => console.log(item.id)}>
              <Text style={styles.noteTitle}> {item.title}</Text>
              <Text style={styles.noteText}> {item.text}</Text>
            </View>
          )}
          
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => addNote()}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <StatusBar barStyle="light-content" />
      {
        <Modal visible={open} animationType="slide">
          <View style={{ ...styles.container, backgroundColor: "#313866" }}>
            <TouchableOpacity
              style={{ ...styles.header, backgroundColor: "#1B1B1F" }}
              onPress={() => setOpen(false)}
            >
              <Text style={styles.title}> Go back </Text>
            </TouchableOpacity>

            <View style={styles.contentModal}>
              <View style={styles.form}>
                <TextInput
                  placeholder="Titulo"
                  placeholderTextColor="#ddd"
                  style={styles.inputTitle}
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                />
              </View>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.inputText}
                  underlineColorAndroid="transparent"
                  placeholder="Digite aqui "
                  placeholderTextColor="#ddd"
                  numberOfLines={10}
                  multiline={true}
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "#1B1B1F" }}
                onPress={() => createNote()}
              >
                <Feather name="plus" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      }
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
  contentList: {
    height: "80%",
  },
  contentModal: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  note: {
    borderRadius: 20,
    backgroundColor: "#50409A",
    alignItems: "stretch",
    margin: "5%",
    padding: "2%",
  },
  noteTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
  noteText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#fff",
    margin: "2%",
  },
  inputTitle: {
    fontSize: 40,
    color: "#fff",
  },
  inputText: {
    fontSize: 18,
    color: "#fff",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#50409A",
    margin: "2%",
  },
  textAreaContainer: {
    padding: "1%",
  },
  textArea: {
    height: "50%",
    justifyContent: "flex-start",
    color: "#fff",
  },
  hiddenButtons:{
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 75,
    padding:10,
    borderRadius:20,
    
},
backRightBtnRight: {
    backgroundColor: "#313866",
    right: '5%',
},
});
export default App;

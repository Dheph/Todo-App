import React from "react";
import { View, StyleSheet } from "react-native";
import firebase from "../services/firebaseConnection";

const components = () => {

  async function createNote() {

    let db = await firebase.database().ref("notes");
    let key = (await db.push()).key;

    await db.child(key).set({
      title: title,
      text: text,
    });
    setTitle("");
    setText("");
    setOpen(false);
  }

  return (
    <View style={{ ...styles.container, backgroundColor: "#313866" }}>
      <TouchableOpacity
        style={{ ...styles.header, backgroundColor: "#1B1B1F" }}
        onPress={() => console.log("back To principal")}
      >
        <Text style={styles.title}> Go back </Text>
      </TouchableOpacity>

      <View style={styles.contentModal}>
        <View>
          <TextInput
            placeholder="Note title"
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
            placeholder="write here"
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
  contentModal: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
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
  hiddenButtons: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 75,
    padding: 10,
    borderRadius: 20,
  },
  backRightBtnRight: {
    backgroundColor: "#313866",
    right: "5%",
  },
});
export default components;

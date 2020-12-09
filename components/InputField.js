import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const InputField = (props) => {
  const [itemObj, setItemText] = useState("");

  function inputHandler(enteredText) {
    setItemText(enteredText);
  }

  function addInputHandler() {
    props.addItem(itemObj);
    setItemText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="type here"
          style={styles.input}
          onChangeText={inputHandler}
          value={itemObj}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addInputHandler}></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default InputField;

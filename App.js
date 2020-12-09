import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import ListItem from "./components/ListItem";
import InputField from "./components/InputField";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addNewListItem = (itemTitle) => {
    setItemList((itemList) => [
      ...itemList,
      { id: Math.random().toString(), value: itemTitle },
    ]);
    setIsAddMode(false);
  };

  const removeListItem = (itemId) => {
    setItemList((itemList) => {
      return itemList.filter((item) => item.id !== itemId);
    });
  };

  const cancelAddItem = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new item" onPress={() => setIsAddMode(true)}></Button>
      <InputField
        visible={isAddMode}
        addItem={addNewListItem}
        onCancel={cancelAddItem}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={itemList}
        renderItem={(itemData) => (
          <ListItem
            id={itemData.item.id}
            onDelete={removeListItem}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

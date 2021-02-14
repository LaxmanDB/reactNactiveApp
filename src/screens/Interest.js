import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  TouchableHighlight,
} from "react-native";
import { useAuth } from "../context/AuthProvider";
import { useStore } from "../context/StoreProvider";
const Interest = ({ navigation }) => {
  const { getData, removeData } = useStore();
  const { login } = useAuth();
  const data = [
    {
      id: 1,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      username: "johndoe1",
    },
    {
      id: 2,
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      username: "johndoe2",
    },
    {
      id: 3,
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      username: "johndoe3",
    },
    {
      id: 4,
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
      username: "johndoe4",
    },
    {
      id: 5,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "johndoe5",
    },
    {
      id: 6,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      username: "johndoe6",
    },
  ];

  function handleReady() {
    const token = getData("token");
    login(token);
    removeData("basicDetails");
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          style={styles.container}
          enableEmptySections={true}
          data={data}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text style={styles.username}>{item.username}</Text>
                  <TouchableHighlight style={styles.addButton}>
                    <Button
                      onPress={() => console.log("added")}
                      title="Add"
                      accessibilityLabel="Learn more about this button"
                    />
                  </TouchableHighlight>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Button onPress={handleReady} title="Ready" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#20B2AA",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    padding: 30,
    backgroundColor: "#E6E6FA",
  },
  box: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  addButton: {
    height: 40,
    width: 80,
    borderRadius: 10,
    backgroundColor: "yellow",
    marginLeft: 40,
  },
});

export default Interest;

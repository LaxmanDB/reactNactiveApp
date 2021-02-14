import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function Header({ navigation: { goBack } }) {
  const _goBack = () => goBack();

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header style={Styles.header}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="TSOW" subtitle="" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

const Styles = StyleSheet.create({
  header: {},
});

/*

<View>
        <Image
          style={{ width: 80, height: 30 }}
          source={require("../assets/TsowTextLight.png")}
        />
      </View>
      <View style={Styles.searchbar}>
        <Searchbar />
      </View>

  />*/

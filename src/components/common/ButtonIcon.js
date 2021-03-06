/* @flow */
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../constants/colors";

type Props = {
  iconName: string,
  onPress?: Function
};

const ButtonIcon = (props: Props) => {
  const { iconName, onPress } = props;
  return (
    <TouchableHighlight>
      <Icon
        name={iconName}
        style={styles.icon}
        color={MAIN_COLOR}
        size={40}
        onPress={onPress}
      />
    </TouchableHighlight>
  );
};
export default ButtonIcon;

const styles = StyleSheet.create({
  icon: {
    margin: 5,
    padding: 5,
    marginBottom: 10,
    marginTop: 10
  }
});

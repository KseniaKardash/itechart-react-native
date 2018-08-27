/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import FullPost from "../../common/FullPost";
import HeaderTitle from "../../common/HeaderTitle";
import type { Post } from "../../../types/types";
import { SHADOW_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object,
  post: Post
};

class FinishPost extends PureComponent<Props> {
  _previousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    const { post } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header}>
            <ButtonIcon iconName="chevron-left" onPress={this._previousPage} />
            <HeaderTitle text="POST" />
          </View>
        </View>
        <FullPost
          userName={post.userName}
          likes="123"
          description="Some text"
          uri={{ uri: post.uri }}
          uriPhoto={{ uri: post.uriPhoto }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: SHADOW_COLOR,
    alignItems: "center",
    padding: 20,
    paddingTop: 10
  },
  header: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    justifyContent: "space-between"
  }
});

export default FinishPost;

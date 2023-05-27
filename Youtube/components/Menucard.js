import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

function mapStateToProps(state) {
  return { menu: state.menu };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSEMENU"
      }),
  };
}

class Menucard extends React.Component {
  state = {
    anime: new Animated.Value(2000),
  };

  componentDidMount() {
    this.menu();
  }

  componentDidUpdate() {
    this.menu();
  }

  menu = () => {
    if (this.props.menu == "openMenu") {
      Animated.spring(this.state.anime, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }

    if (this.props.menu == "closeMenu") {
      Animated.timing(this.state.anime, {
        toValue: 900,
        duration:50,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <Animatedcontainer
        style={{
          position: "absolute",
          zIndex: 1,
          top: this.state.anime,
        }}
      >
        <Content>
          <LinearGradient
            colors={["rgba(249,108,108,1)", "rgba(242,48,129,1)"]}
            style={{
              width: 500,
              height: 200,
            }}
          />
        </Content>
        <TouchableOpacity onPress = {
          this.props.closeMenu} >
        <Ionicons name="close-circle-sharp" size={60} color ="white" 
        style = {{
        left:175
        }}></Ionicons>
        </TouchableOpacity>
      </Animatedcontainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menucard);

const Container = styled(View)`
  width: 100%;
  height: 1000px;
  background-color: whitesmoke;
`;

const Content = styled(View)`
  width: 100%;
  height: 142px;
`;

const Animatedcontainer = Animated.createAnimatedComponent(Container);

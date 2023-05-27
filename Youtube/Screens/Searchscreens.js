import React from "react";
import { View,Text} from "react-native";
import styled from "styled-components";
import Searchcom from "../components/Searchcom";

export default class Searchscreens extends React.Component {
  render() {
    return (
      <Container>
        <Searchcom />

        <Texts>Search here!!</Texts>
      </Container>
    );
  }
}

const Container = styled(View)`
 flex:2;
`;

const Texts = styled(Text)`
 margin-left: 60px;
 margin-top: 390px;
 font-size: 50px;
 color: lightgrey;
`;
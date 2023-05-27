import React from "react";
import {View,Image} from "react-native";
import styled from "styled-components";

export default class Bigcard extends React.Component {
  render() {
    return (
      <Container>
        <Element>
        <Images source = {{uri : this.props.url}} />
        </Element>
      </Container>
    );
  }
}

const Container = styled(View)`
  width: 100%;
  height: 250px;
  padding-bottom: 15px;
`;

const Element = styled(View)`
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  overflow: hidden;
  border-radius: 5px;
`;

const Images = styled(Image)`
width:100%;
height:100%;
`;


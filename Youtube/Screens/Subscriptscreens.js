import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

export default class Subscriptionscreens extends React.Component {
  render() {
    return (
      <Container>
        <Text>hi I AM ThE Subscriptionscreens</Text>
      </Container>
    );
  }
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

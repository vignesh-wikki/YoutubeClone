import React from "react";
import {View,Image} from "react-native";
import styled from "styled-components";


export default class Shortscreens extends React.Component{
  render(){
    return(
      <Container>
      <BlurViews source={{uri : "https://cdn.pixabay.com/photo/2016/04/18/16/22/watercolour-1336856_960_720.jpg"}}
        style={{
          width:450,
          height:700,
          blurRadius:8
        }}
        >
      </BlurViews>
      
      </Container>
    )
  }
  }


const Container = styled(View)`
flex: 1;
`;

const BlurViews = styled(Image)`
height: 100%;
width: 100%;
`;
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Bigcard from "../components/Bigcard";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Menucard from "../components/Menucard";
import { connect } from "react-redux";
import { navigationpush } from "../Navigaterefpush";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/EvilIcons'

import videos from "../Axios"


function mapStateToProps(state) {
  return { menu: state.menu };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({ type: "OPENMENU" }),
  };
}

class Homescreens extends React.Component {
  render() {
    return (
      <Main>
        <Menucard />
        <StatusBar hidden />

        <Header>
          <Logo0 source={require("../assets/logo.png")} />

          <Logo1></Logo1>

          <TouchableOpacity
            onPress={this.props.openMenu}
            style={{
              position: "absolute",
              flexDirection: "row",
              top: 10,
              left: 377,
              zIndex: 1,
            }}
          >
            <MaterialCommunityIcons
              name="account-circle-outline"
              color="white"
              size={25}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              flexDirection: "row",
              top: 9,
              left: 330,
            }}
            onPress={() => {
                navigationpush("Search");
              }}
          >
            <Ionicons name="ios-search-outline"  color="white" size={25} />
          </TouchableOpacity>
          
          <Icon name="cast"  color="white" size={25} style={{
              position: "absolute",
              flexDirection: "row",
              top: 9,
              left: 280
            }}
          />

          <Icons name="bell"  color="white" size={30} style={{
              position: "absolute",
              flexDirection: "row",
              top: 10,
              left: 225
            }}
          />

        </Header>

        <ScrollView>
          {videos.map((data, index) => (
            <TouchableOpacity activeOpacity={0.9} 
            duration = {0.3}
            
              key={index}
              onPress={() => {
                navigationpush("Video");
                
              }}
            >
              <Bigcard image={data.url} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homescreens);

const Main = styled(View)`
  flex: 1;
  background-color: black;
`;

const Header = styled(View)`
  width: 100%;
  height: 45px;
  background-color: black;
  overflow: hidden;
  align-items:baseline;
`;

const Logo1 = styled(Text)`
  font-size: 28px;
  margin-left: 48px;
  margin-top: 1px;
  color: black;
  font-weight:bold;
`;

const Logo0 = styled(Image)`
  position: absolute;
  flex-direction: row;
  width:120px;
  height:25px;
  margin-top: 6px;
`;

 export const BigcardImages = [
  {
    img: "",
    title: 1,
  },

  {
    img: "https://i.ytimg.com/vi/6rVNSAFcC6E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWjzaVviu44d7qkpWj3pG5aJfgow",
    title: 2,
  },

  {
    img: "https://i.ytimg.com/vi/eqBrHvdGbOY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4Rn1vHFmm6hJaxUj1_A9hBWLkkA",
    title: 3,
  },

  {
    img: "https://i.ytimg.com/vi/WWWDskI46Js/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6DIVMOVfxJ0l6bLWiHobo8ePjgw",
    title: 4,
  },

  {
    img: "https://i.ytimg.com/vi/R6343uT7yt8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClq138TsbbGJwcPBAuriz9VrWEqQ",
    title: 5,
  },
  {
    img: "https://i.ytimg.com/vi/zuVV9Y55gvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABJYLkbAeuu2V_lUUMNMBXS1cdqg",
    title: 6,
  },
  {
    img: "https://i.ytimg.com/vi/17YIQutI8f0/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhyIF4oPjAP&rs=AOn4CLAwlnQBT5xOUqcBmFvuJslDkKPPOg",
    title: 7,
  },
  {
    img: "https://i.ytimg.com/vi/SH-UjQcJ2lA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZGUmnYeasHYsvSJVNsU-HoiGipw",
    title: 8,
  },
  {
    img: "https://i.ytimg.com/vi/jdDcrdACpuM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTyJqQBiHozkRL_Kze1fJxias6KQ",
    title: 9,
  },
  {
    img:"https://i.ytimg.com/vi/RPpCDNu-1ls/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiBf-IUyL8V1g3KRt2VxbP-MqnsQ"
  },
  {
    img:"https://i.ytimg.com/vi/ZdBnef5WmY0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA99N7TvdM6aQzDssNXtHTFKk_e1Q"
  },
  {
    img:"https://i.ytimg.com/vi/8_i4Pb3c-JE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBXEg4InU1jELfmEpaelQ2w_BxXA"
  },
  {
    img:"https://i.ytimg.com/vi/smJNJTaBkzc/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDPsq_s7Q2mxofp5XjFIuy81Ro5wg"
  },
  {
    img:"https://i.ytimg.com/vi/I7dRB7mTtLE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2EQoXzcGPaL2SaE_IeZhVehOMyg"
  },
  {
    img:"https://i.ytimg.com/vi/ti-b0hGdggQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8qLp3sasabYKtl4rQUMTmP9wbsg"
  },
  {
    img:"https://i.ytimg.com/vi/iE6YvmcQcYU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc7L157o4_BAujJcqL3ZuwuWWplw"
  },
  {
    img:"https://i.ytimg.com/vi/0pZ3HBp_C74/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-pp-CeVtx4o8jg37n_n-4g1Qdww"
  },
  {
    img:"https://i.ytimg.com/vi/5BQQM4uvRkw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn1LHxREk816KdBcSjVbxpkITWbA"
  },
  {
    img:"https://i.ytimg.com/vi/6m2WLNVdKgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlVOEVx4WMwQ7hZ9G0BXXiTvxBxg"
  },
  {
    img:"https://i.ytimg.com/vi/8FAUEv_E_xQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaVdEhQVEDk5Y8JAjWVB5_rUqBsw"
  },
  {
    img:"https://i.ytimg.com/vi/YPV6BitbPmM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn4AiQzLfQjMfR6aMLosSqiyz-yw"
  },
  {
    img:"https://i.ytimg.com/vi/X_GN4I8QAi8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUglABtY_5zuY_DvE2Nu4C4yA7zg"
  },
  {
    img:'https://i.ytimg.com/vi/DObwdl3xB7U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt34mTHMSN2-BprBRusD4MscFgFw'
  },
  {
    img:'https://i.ytimg.com/vi/JIVUz7R_kxQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF4oOjAP&rs=AOn4CLDeplhShKmei_OkeUUTjSUwFuH__g'
  },
  {
    img:'https://i.ytimg.com/vi/l9n-5OdwJuQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnzEFzjntNiLviTyaUTL7ZL_4XNw'
  },
  {
    img:'https://i.ytimg.com/vi/7XcCDrLaxzY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmEajREKxoE_VUdKFBnMR_jtjZiA'
  },
  {
    img:'https://i.ytimg.com/vi/1i1FzZ1iEtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJddB1RGOM6T2cfzd1qfgI36Gu-Q'
  },
  {
    img:'https://i.ytimg.com/vi/vLiEpp3ea3M/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpJ3IQUV7I5fBOAP6erZlhr3Ey0Q'
  },
  
  {
    img:'https://i.ytimg.com/vi/TN_vWXLu9YQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBguzVWl-vazFJREKWNigJbU4cxsQ'
  },

]
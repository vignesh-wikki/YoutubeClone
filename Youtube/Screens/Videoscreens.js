import React, { useState, useCallback,useEffect} from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import styled from "styled-components";
import { navigationpush } from "../Navigaterefpush";
import Bigcard from "../components/Bigcard";
import YoutubePlayer from "react-native-youtube-iframe";
import axios from "axios";

export default function Videoscreens() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const [videos, setVideos] = useState([]);

  const baseUrl =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&key=AIzaSyDQoP9R8NLTo-1raPsruxDNPOzTndUnbn0";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(baseUrl);
      setVideos(request.data);

      return request;
    };
    fetchData();
  }, [baseUrl]);

  return (
    <Container>
      <Container1>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={""}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </Container1>

      <Container2>
        <ScrollView>
          {
            videos.map((data, index) => (
            <TouchableOpacity
              activeOpacity={0.9}
              duration={0.3}
              key={index}
              onPress={() => {
                navigationpush("Video");
              }}
            >
              <Bigcard videos={data.items.thumbnails.default.url} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Container2>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
`;

const Container1 = styled(View)`
  width: 100%;
  height: 220px;
  background-color: black;
`;

const Container2 = styled(View)`
  flex: 1;
  padding-top: 70px;
`;

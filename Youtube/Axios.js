import axios from "axios";
import { useEffect } from "react";
  const baseUrl =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyDQoP9R8NLTo-1raPsruxDNPOzTndUnbn0";

   const [videos,setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(baseUrl);
      setVideos(request.data);

      return request;
    };
    fetchData();
  }, [baseUrl]);

  console.log(videos);
export default videos;
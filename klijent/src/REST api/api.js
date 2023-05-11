import axios from "axios";


export async function getData(setData) {
    return await axios
      .get("http://localhost:8080/get")
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  }
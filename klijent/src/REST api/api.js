import axios from "axios";

export async function getData(setData) {
  return await axios
    .get("http://localhost:8080/get")
    .then((data) => {
      setData(data.data);
      console.log(data.data);
    })
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

export async function deleteBlog(id) {
  return await axios
    .delete("http://localhost:8080/delete" + id)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

export async function changeData(event, id) {
  console.log(id);
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  return await axios
    .put("http://localhost:8080/update" + id, data)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
}

export async function addData(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  return await axios
    .post("http://localhost:8080/add", data)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

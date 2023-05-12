import axios from "axios";

export async function getData(setData) {
  return await axios
    .get("http://localhost:8080/get")
    .then((data) => {
      setData(data.data.data);
      console.log(data.data.data);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

export async function deleteData(id) {
  return await axios
    .delete("http://localhost:8080/delete/" + id)
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
    .put("http://localhost:8080/update/" + id, data)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

export async function addData(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log("data:");
  console.log(data);
  return await axios
    .post("http://localhost:8080/create", data)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

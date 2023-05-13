import axios from "axios";

export async function getData(setData, page, perPage, setDataLength) {
  let pom = "?";
  if (page) {
    pom += `page=${page}&`;
  }
  if (perPage) {
    pom += `perPage=${perPage}`;
  }
  return await axios
    .get("http://localhost:8080/get" + pom)
    .then((data) => {
      setData(data.data.data);

      if (setDataLength) {
        setDataLength(data.data.perPage * data.data.totalPages);
      }
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

export async function changeData(data, id) {
  console.log(data, id);
  return await axios
    .put("http://localhost:8080/update/" + id, data)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

export async function addData(data) {
  return await axios
    .post("http://localhost:8080/create", data)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

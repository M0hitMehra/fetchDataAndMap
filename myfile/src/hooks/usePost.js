import axios from "axios";

export async function Post(id, title, body) {
  await axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

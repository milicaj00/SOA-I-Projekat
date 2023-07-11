import React, { useEffect, useState } from "react";
import {GreeterClient} from "./greet_grpc_web_pb";
import { HelloRequest } from "./greet_pb";

const client = new GreeterClient("https://localhost:5174");

const sayHello = (name, callback) => {
  const request = new HelloRequest();
  request.setName(name);

  client.sayHello(request, {}, (error, response) => {
    if (error) {
      console.error("Error:", error.message);
      return;
    }
    callback(response.getMessage());
  });
};

function MyComponent() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    sayHello("John", (message) => {
      setResponse(message);
    });
  }, []);

  return <div>{response}</div>;
}

export default MyComponent;

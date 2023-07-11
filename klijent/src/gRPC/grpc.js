import DataServiceClient from "data_grpc_web_pb"
import Data from "data_pb.js"

import GreeterClient from './greet_grpc_web_pb'
import { HelloRequest } from './greet_pb';

const client = new GreeterClient('https://localhost:7222');

export const sayHello = (name, callback) => {
  const request = new HelloRequest();
  request.setName(name);

  client.sayHello(request, {}, (error, response) => {
    if (error) {
      console.error('Error:', error.message);
      return;
    }
    callback(response.getMessage());
  });
};

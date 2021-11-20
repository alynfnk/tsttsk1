import axios from "axios";
import ServerConstants from "../contants/serverContants";

async function getUsers(offset, count) {
  const users = await axios.get(
    `${ServerConstants.BASE_URL}/users?offset=${offset}&count=${count}`
  );
  return users;
}

async function postUser(data) {
  const response = await axios.post(
    `${ServerConstants.BASE_URL}/users`, data 
  );

  return response;
}

const UserRequests = { getUsers, postUser };

export default UserRequests;

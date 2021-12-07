import axios from "axios";
import ServerConstants from "../contants/serverContants";

async function getToken() {
  const response = await axios.get(
    `${ServerConstants.BASE_URL}/token`
  );
  return response;
}

const TokenRequests = { getToken };

export default TokenRequests; 
import axios from "axios";
import ServerConstants from "../contants/serverContants";

async function getToken() {
  const response = await axios.get(
    `${ServerConstants.BASE_URL}/token`
  );
  return response;
}

const TokenRequests = { getToken };

(async function IIFE() {
  console.log(await getToken());
  console.log((await getToken()).token);
})();

export default TokenRequests; 
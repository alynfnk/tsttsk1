import axios from "axios";
import ServerConstants from "../contants/serverContants";

async function getPositions() {
    const positions = await axios.get(`${ServerConstants.BASE_URL}/positions`)
    return positions;
}

const PositionsRequests = { getPositions }

export default PositionsRequests;
import axios from 'axios';

const holdersEndpoint = "https://api.ballena.io/holders"

const getHolders = async () => {
  try {
    const response = await axios.get(holdersEndpoint);
    return response.data["holderCount"];
  } catch (err) {
    console.error(err);
    return 0;
  }
};

export { getHolders };
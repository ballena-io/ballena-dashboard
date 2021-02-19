import axios from 'axios';

const earningsEndpoint = "https://api.ballena.io/earnings"

const getEarnings = async () => {
  try {
    const response = await axios.get(earningsEndpoint);
    return response.data;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

export { getEarnings };
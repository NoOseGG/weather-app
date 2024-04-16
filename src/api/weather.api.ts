import axios from "axios";

const weatherApi = axios.create({
  params: {
    key: `93c90a56a1994b3aa69202432241604`,
  },
});

export { weatherApi };

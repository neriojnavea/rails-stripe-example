import axios from 'axios';

const getAllResources = (resourceName) => {
  return axios.get(`api/${resourceName}`)
};

export { getAllResources };

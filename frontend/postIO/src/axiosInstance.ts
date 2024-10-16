import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

const axiosClient = (token: string | null = null): AxiosInstance => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    : {
        'Content-Type': 'application/json'
      };

  const client = axios.create({
    baseURL: 'http://localhost:9000',
    headers,
    timeout: 60000,
    withCredentials: false
  });

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      try {
        const { response } = error;
        if (response?.status === 401) {
          console.error('Error code 401');
        }
      } catch (e) {
        console.error(e);
      }
      throw error;
    }
  );

  return client;
};

export default axiosClient;

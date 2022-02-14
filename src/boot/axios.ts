import { boot } from 'quasar/wrappers';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
const api = axios.create({ baseURL: process.env.API_BASE_URL });
const onError = (err: AxiosError) => {
  return err;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
api.interceptors.response.use(
  (response: AxiosResponse<Record<string, unknown>>) => {
    return response.data;
  },
  onError
);

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$api = api;
});

export { api };

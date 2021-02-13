import appConfig from 'Src/config';
import mockComments from '../../mock/final-data.json';

const delay = (timeout = appConfig.minServerDelayinMs) =>
  new Promise(res => setTimeout(() => res(null), timeout));
const getDataFromMockServer = () =>
  new Promise(res => {
    delay(1500).then(() => res(mockComments));
  });

export default getDataFromMockServer;

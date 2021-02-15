import appConfig from 'Src/config';
import mockComments from '../../mock/final-data.json';

const delay = (
  timeout = appConfig.minServerDelayinMs,
): Promise<null> =>
  new Promise(res => setTimeout(() => res(null), timeout));
const getDataFromMockServer = (): Promise<unknown> =>
  new Promise(res => {
    delay(1500).then(() => res(mockComments));
  });

export default getDataFromMockServer;

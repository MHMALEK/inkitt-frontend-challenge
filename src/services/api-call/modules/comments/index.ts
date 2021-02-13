import getDataFromMockServer from 'Src/mock-server';

const getCommentsFromApiService = async () => {
  try {
    const res = await getDataFromMockServer();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export default getCommentsFromApiService;

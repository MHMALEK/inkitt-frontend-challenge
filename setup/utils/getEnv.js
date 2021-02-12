const DEFAULT_ENV = 'development';

const getEnv = () => process.env.NODE_ENV || DEFAULT_ENV;
const isDevEnv = () => getEnv() === 'development';
// if need to know is it test or staging ens
exports.getEnv = getEnv;
// if just need to know about the dev mode
exports.isDevEnv = isDevEnv();

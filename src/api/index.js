const URL = {
  'dev': '//work.djtest.cn', // 本地环境
  'test': '', // 测试环境
  'box': '', // 沙箱环境
  'prod': '', // 正式环境
};
/* eslint-disable */
const DOMAIN = URL[CURRENT_ENV];

const API = {
  'TEST_URL': `${DOMAIN}/demo/getsomeone`, // 测试
};

export default API;

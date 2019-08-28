import ajaxInit from 'dj-axios';
import API from './index';

const ajax = ajaxInit(); // 默认携带 cookie，按 application/json 方式

// 示例接口
function testUrl(data) {
  return ajax({
    'url': API.TEST_URL,
    'type': 'post',
    data,
  });
}

export default { testUrl };

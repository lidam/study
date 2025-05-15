import { a1 } from './module.js';

console.log(a1);

let a = 1 + 1;

self.postMessage(a);

self.addEventListener('message', function(e) {
  console.log('收到消息：' + e.data);
});
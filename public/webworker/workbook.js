importScripts('./xlsx.js')

self.addEventListener('message', e => {
  const arr = []
  const length = e.data
  for (let i = 0; i < length; i++) {
    arr.push({
      id: i,
      name: `张三${i}号`,
      location: `北京${i}号`,
      age: i,
      sex: i % 2 === 0 ? '男' : '女',
      email: `zhangsan${i}@example.com`,
      phone: `1380013800${i}`,
      date: new Date().toLocaleString(),
      status: i % 2 === 0 ? '正常' : '异常',
      remark: `备注信息${i}号`,
      score: Math.floor(Math.random() * (100 - 0 + 1)) + 0,
    })
  }
  const sheet = XLSX.utils.json_to_sheet(arr);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');
  
  self.postMessage(workbook)
})
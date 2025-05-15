self.addEventListener('message', function(e) {
  if(e.data.data.length) {
    const imageData = e.data;
    for (let i = 0; i < imageData.data.length; i++) {
      for (let j = 0; j < 255; j++) {
        if (imageData.data[i] !== 255) {
          imageData.data[i] = Math.min(imageData.data[i] + j, 0)
        }
      }
    }
    self.postMessage(imageData);
  }
});
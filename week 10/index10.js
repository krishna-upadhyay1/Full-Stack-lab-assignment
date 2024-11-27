function fetchDataAndProcess() {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        const processedData = data.map(item => item.name);
        resolve(processedData);
      })
      .catch(error => {
        reject(error);
      });
  });
}

fetchDataAndProcess()
  .then(data => console.log(data))
  .catch(error => console.error(error));

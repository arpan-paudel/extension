fetch('https://arpan-paudel.github.io/extension/data/feedback.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("json-data").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error("Error fetching JSON:", error));

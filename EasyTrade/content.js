// content.js
function addTradingInfo() {
    // Fetch data from the Roblox API and display it on the page
    fetch('https://api.roblox.com/users/YOUR_USER_ID/profile')
      .then(response => response.json())
      .then(data => {
        // Create elements and append them to the page
        let infoDiv = document.createElement('div');
        infoDiv.id = 'trading-info';
        infoDiv.innerHTML = `
          <div>RAP: ${data.rap}</div>
          <div>Value: ${data.value}</div>
        `;
        document.body.appendChild(infoDiv);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  addTradingInfo();
  
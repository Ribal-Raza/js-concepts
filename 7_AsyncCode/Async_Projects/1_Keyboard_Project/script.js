window.addEventListener("keypress", (e) => {
  document.querySelector(
    ".key"
  ).innerHTML = `<table style="border: solid 1px white">
  <tr>
  <th>Your Pressed Key</th>
  <th>Key Code</th>
  
  </tr>
  <tr>
  <td>${e.key}</td>
  <td>${e.code}</td>
  </tr>
  </table>`;
});

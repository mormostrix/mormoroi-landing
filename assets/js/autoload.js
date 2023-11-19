var cookieId = "navbar"
var elementId = "navbar"
var loadURL = "https://mormoroi.com/nav.html"

function loadData(data) {
 document.getElementById(elementId).innerHTML = data;
}

function loadFromCookie() {
  let cookieData = sessionStorage.getItem(cookieId);
  if (cookieData) {
    loadData(cookieData);
  }
}

function updateData() {
  fetch(loadURL) // file to fetch
    .then(response => response.text())
    .then(fetchedData => {
      let dataInCookie = sessionStorage.getItem(cookieId);
      if (dataInCookie !== fetchedData) {
        setNav(fetchedData);
        sessionStorage.setItem(cookieId, fetchedData); // update cookie (new data)
      }
  });
}

window.addEventListener('load', () => {
  loadFromCookie();
  updateData();
});
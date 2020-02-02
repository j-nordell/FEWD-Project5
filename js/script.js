/*jshint esversion: 6 */

const searchBox = document.getElementsByTagName('input')[0];

searchBox.addEventListener("keyup", () => {
  let searchText = searchBox.value.toLowerCase();
  let pictureLinks = document.querySelectorAll('main a');
  
  for(let link of pictureLinks) {
    link.style.display =
      link.getAttribute("data-title").toLowerCase().includes(searchText) ?
      "" :
      "none";
  } 
}); 
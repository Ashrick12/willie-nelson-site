let imgEl = document.getElementById("img-el");
let imgIndex = 0;

let images = [
   "/static/img/willie-cover.jpg",
   "/static/img/willie-1.jpg",
   "/static/img/willie-2.jpg",
   "/static/img/willie-3.jpg",
   "/static/img/willie-4.jpg",
   "/static/img/willie-5.jpg",
];

function left() {
   imgIndex -= 1;
   if (imgIndex < 0) {
      imgIndex = images.length - 1;
   }
   imgEl.src = images[imgIndex];
}
function right() {
   imgIndex += 1;
   if (imgIndex >= images.length) {
      imgIndex = 0;
   }
   imgEl.src = images[imgIndex];
}

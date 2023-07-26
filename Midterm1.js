var arr_hinh = [
    "images/s1.jpg",
    "images/s2.jpg",
    "images/s3.jpg",
    "images/s4.jpg",
    "images/s5.jpg",
    "images/s6.jpg",
]
var index = 0;
function prev() {
    index--;
    if (index <= 0) index = arr_hinh.length - 1;
    document.getElementById("hinh").src = arr_hinh[index];
}
function next() {
    index++;
    if (index == arr_hinh.length) index = 0;
    document.getElementById("hinh").src = arr_hinh[index];
}

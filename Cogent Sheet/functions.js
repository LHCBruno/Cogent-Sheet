var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    button.style.visibility = "hidden";
};

const download = document.querySelector("download");

download.addEventListener("click", () => {
    window.print();
});
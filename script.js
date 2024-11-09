let r = document.getElementById("radius");
let v = document.getElementById("volume");

function volume_sphere() {
    let radius = parseFloat(r.value);

    if (isNaN(radius) || radius < 0) {
        v.value = 'NaN';
    } else {
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);
        v.value = volume.toFixed(4);
    }
}

document.getElementById('MyForm').onsubmit = function(event) {
    event.preventDefault();
    volume_sphere();
};

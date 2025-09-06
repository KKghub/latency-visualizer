// latency-visualizer.js
const body = document.querySelector('body');
const image = document.getElementById('display');
const placeHolder = document.getElementById('placeHolder');

let selectedTimeSpan = document.getElementById('selectedTime');
const timeSlider = document.getElementById('time');

selectedTimeSpan.innerText = timeSlider.value;
let selectedTime = timeSlider.valueAsNumber;
timeSlider.addEventListener('input', (e) => {
    selectedTimeSpan.innerText = e.target.valueAsNumber;
    selectedTime = e.target.valueAsNumber;
});

const bgChangeSetting = document.getElementById('bg-change');



const imageUrls = [
    './images/mountains.jpg',
    './images/half-moon.jpg',
    './images/purple-flowers.jpg',
    './images/starry-night.jpg',
    './images/dahlia-flower.jpg',
];
let currentImageIdx = Math.floor(Math.random() * imageUrls.length);
image.src = imageUrls[currentImageIdx];

const toggle = document.getElementById('toggle');
toggle.onclick = () => {
    console.log(selectedTime)

    if (bgChangeSetting.checked) {
        body.style.backgroundColor = 'cyan';
    }
 
    setTimeout(() => {
        currentImageIdx = (currentImageIdx + 1) % imageUrls.length;
        image.src = imageUrls[currentImageIdx];
        // if (placeHolder.style.display !== 'none') {
        //     image.style.display = placeHolder.style.display;
        //     currentImageIdx = (currentImageIdx + 1) % imageUrls.length;
        //     image.src = imageUrls[currentImageIdx];
        //     placeHolder.style.display = 'none';
        // } else {
        //     placeHolder.style.display = image.style.display;
        //     image.style.display = 'none';
        // }

        if (bgChangeSetting.checked) {
            body.style.backgroundColor = 'white';
        }
    }, selectedTime);
};

function setTime(time) {
    timeSlider.value = time;
    timeSlider.dispatchEvent(new Event('input'));
}
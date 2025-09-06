const body = document.querySelector('body');
const image = document.getElementById('display');
const placeHolder = document.getElementById('placeHolder');
const toggle = document.getElementById('toggle');

const bgChangeSetting = document.getElementById('bg-change');
const selectedTimeSpan = document.getElementById('selectedTime');
const timeSlider = document.getElementById('time');
const themeButton = document.getElementById('theme');
const iconDark = document.getElementById('icon-dark');
const iconLight = document.getElementById('icon-light');

// handle settings
selectedTimeSpan.innerText = timeSlider.value;
let selectedTime = timeSlider.valueAsNumber;
timeSlider.addEventListener('input', (e) => {
    selectedTimeSpan.innerText = e.target.valueAsNumber;
    selectedTime = e.target.valueAsNumber;
});

// setup image
let currentImageIdx = Math.floor(Math.random() * imageUrls.length);
image.src = imageUrls[currentImageIdx];

// switch from placeholder to image
placeHolder.style.display = 'none';
image.style.display = 'block'

// handle toggle
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
            body.style.backgroundColor = 'var(--bg-color)';
        }
    }, selectedTime);
};

// handle theme switching
themeButton.onclick = () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        iconLight.style.display = 'none'
        iconDark.style.display = 'block'
    } else {
        body.setAttribute('data-theme', 'dark');
        iconLight.style.display = 'block'
        iconDark.style.display = 'none'
    }
}

// for inline html call
function setTime(time) {
    timeSlider.value = time;
    timeSlider.dispatchEvent(new Event('input'));
}
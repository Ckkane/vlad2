let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const progress = document.querySelector('.uk-progress');

document.querySelectorAll('.slider-next').forEach(elem=>{
    elem.addEventListener('click', function(){
        offset += 700;
        if (offset > 2800) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
        console.log(offset)


        progress.value = offset / 700;

    });
})

document.querySelectorAll('.slider-prev').forEach(elem=>{
    elem.addEventListener('click', function () {
        offset = offset - 700;
        if (offset < 0) {
            offset = 700;
        }
        sliderLine.style.left = -offset + 'px';
        progress.value = offset / 700;
    });
})
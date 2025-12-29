var checkbox = document.querySelector('input[name=mode]')
checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['sun'].toSvg({'fill': 'var(--fg-color-dark)'})
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['moon'].toSvg({'fill': 'var(--fg-color-dark)'})
    }
})


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

// Wrap every letter in a span
var textWrapper = document.querySelector('.myname');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.myname .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.myname',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000 * randomIntFromInterval(1, 1000)
  });
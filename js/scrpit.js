const clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat');
window.addEventListener("scroll", () => {
    clouds.forEach(cloud => {
        let speed = cloud.getAttribute("speed")
        cloud.style.transform = `translateX(${window.scrollY * speed}px)`
    })
    boat.style.transform = `translateX(${window.scrollY}px)`
})

const div = document.querySelector('.div'),
    images = document.querySelectorAll('.img');

div.addEventListener("mousemove", (e) => {
    images.forEach(img => {
        let speed = img.getAttribute('speed')
        img.style.transform = `translate(${e.clientX * speed / 10}px,${e.clientY * speed / 5}px)`
    })
})
const box = document.querySelector('.box'),
    times = document.querySelectorAll('.times');

window.addEventListener("scroll", function luboy() {
    if (scrollY+750>box.offsetTop) {
        times.forEach(time => {
            function rec(i = 0) {
                time.innerHTML = i++
                let count = +time.getAttribute("count")
                if (i <= count) {
                    setTimeout(() => {
                        rec(i)
                    }, 10);
                }
            }
            rec()
        })
        window.removeEventListener("scroll",luboy)
    }
})

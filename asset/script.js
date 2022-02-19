const links = document.querySelector('.link');
const sections = document.querySelector('section');
const navBtn = document.querySelector('.navBtn')
let activeLink = 0;

// links.forEach((link, i) => {
//     link.addEventListener('click', () => {
//          if(activeLink != i){
//             link[activeLink].classList.remove('active');
//             link.classList.add('active');
//             sections[activeLink].classList.remove('active');

//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add('active');
//             },1000);
//         }
//     })
// })


navBtn.addEventListener('click', () => {
    
     const linkClick = this.event.target
     console.log(linkClick)
})

let tl9 =gsap.timeline({
    scrollTrigger:{
        trigger:".part-4",
        start:"50% 50%",
        end:"800% 50%",
        pin:true,
        scrub:1,
    },
});
tl9.to(".c-one",{
    marginTop:"-100%",
    opacity:"1",
},'sct-1')
tl9.to(".c-two",{
    opacity:"1",
},'sct-2')
tl9.to(".c-one",{
    marginTop:"-245%",
    opacity:"0",
},'sct-2')
tl9.to(".c-three",{
    opacity:"1",
},'sct-3')
tl9.to(".c-two",{
    opacity:"0",
    marginTop:"-115%",

},'sct-3')
tl9.to(".c-one",{
    marginTop:"-265%",
},'sct-3')


document.addEventListener('DOMContentLoaded', function() {
    const authButton = document.getElementById('log');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
    if (currentUser) {
        authButton.innerHTML = 'Logout';
        authButton.onclick = function() {
            localStorage.removeItem('currentUser');
            location.reload();
        };
        
    } else {
        authButton.textContent = 'Login'; 
        authButton.onclick = function() {
            window.location.href = '../Login/Register.html';
        };
    }
});

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
});

document.querySelectorAll('.nav-items a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navItems.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navItems.contains(e.target)) {
        hamburger.classList.remove('active');
        navItems.classList.remove('active');
    }
});
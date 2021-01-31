document.querySelector('#mobilemenutrigger').addEventListener('click', function () {
    document.querySelector('.mobile-menu-section').classList.add('active');
    document.querySelector('body').classList.add('hide');
})
document.querySelector('.mobilemenuclosetrigger').addEventListener('click', function () {
    document.querySelector('.mobile-menu-section').classList.remove('active');
    document.querySelector('body').classList.remove('hide');
})
document.querySelector('.mobilemenuclosetrigger-1').addEventListener('click', function () {
    document.querySelector('.mobile-menu-section').classList.remove('active');
    document.querySelector('body').classList.remove('hide');
})

document.querySelector('.feature-main-item1').onmouseover = function(e) {
    document.querySelector('#TextHoverImage').src = '../img/feat-main-item-img.png';
};

document.querySelector('.feature-main-item2').onmouseover = function(e) {
        document.querySelector('#TextHoverImage').src = '../img/feat-main-item-img.png';
   };
   
document.querySelector('.feature-main-item3').onmouseover = function(e) {
    document.querySelector('#TextHoverImage').src = '../img/feat-main-item-img.png';
};

document.querySelector('.feature-main-item4').onmouseover = function(e) {
    document.querySelector('#TextHoverImage').src = '../img/feat-main-item-img.png';
};

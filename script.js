'use strict';

const hamburger = document.querySelector('#hamburger-btn');
const noburger-btn = document.querySelector('#noburger-btn');

const navBar = document.querySelector('.navbar-nav');

const navbarToggle = function() {
	navBar.classList.toggle('active');
}

hamburger.addEventListener('click', navbarToggle);
noburger.addEventListener('click', navbarToggle);
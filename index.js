'use strict';

const burgerMenuIcon = document.getElementById('burgerMenuIcon');

burgerMenuIcon.addEventListener('click', (event) => {
	const burgerExpanded = document.getElementById('burgerExpanded');
	const mainContent = document.getElementById('main');
	burgerExpanded.classList.toggle('d-none');
	mainContent.classList.toggle('d-none');
});

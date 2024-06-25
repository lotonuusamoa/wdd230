const hambutton = document.querySelector('#hamburger');
const mainnav = document.querySelector('.navigation')


//Toggle the show class off and on
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
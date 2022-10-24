import './style.css'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4aa85df1femsh10586ea3d3dcf22p1512c8jsn67654fb5b0e6',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	window.onload = function () {
		window.addEventListener('scroll', function (e) {
			if (window.pageYOffset > 100) {
				document.querySelector("header").classList.add('is-scrolling');
			} else {
				document.querySelector("header").classList.remove('is-scrolling');
			}
		});
	
		const menu_btn = document.querySelector('.nav-toggler');
		const mobile_menu = document.querySelector('.nav');
	
		menu_btn.addEventListener('click', function () {
			
			menu_btn.classList.toggle('is-active');
			mobile_menu.classList.toggle('open');
		});
	}
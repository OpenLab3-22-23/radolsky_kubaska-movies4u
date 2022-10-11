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
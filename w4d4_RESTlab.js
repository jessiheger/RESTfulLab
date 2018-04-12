const express = require('express');
const app = express();

app.get('/', (request, response) => res.send('beiber'));

const beiber = [
	{id: 1, title: "Despacito", url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R9yNWbetJVU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
	{id: 2, title: "Love Yourself", url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oyEuk8j8imI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
	{id: 3, title: "Sorry", url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fRh_vgS2dFE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}
];

app.get('/beiber', (request, response) => {
    response.send(beiber);
});

app.get('/beiber/:id', (request, response) => {
	let id = request.params.id;
	let object = beiber[id-1];
	response.send(object.title);
	// response.send(object.url);
})

app.get('/beiber/:id/video', (request, response) => {
	let id = request.params.id;
	let object = beiber[id-1];
	response.send(object.title + " " + object.url);
	// response.send(object.url);
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
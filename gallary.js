let slider=document.getElementById("slider");
let images=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
setInterval(function() {
	let random=Math.floor(Math.random()*5)
	slider.src=images[random]
	// body...
},2000);
console.log('dfsdf');
function play() {
	document.getElementById('f0').setAttribute('style', 'display:none!important');
	document.getElementById('song').play();
	anims = document.querySelectorAll('#cinema > div, #cinema > div span');
	for (e in anims) {
		anims[e].style.animationPlayState = 'running';
	}
}
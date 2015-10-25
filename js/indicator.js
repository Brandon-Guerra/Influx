function indicate(n) {
	//var n = JSON.parse(text);
	//n.transactions goes below
	if (n > 30) {
		var img = new Image(300,300);
		img.style.opacity = "0.87";
		var div = document.getElementById('reccomend');
		div.innerHTML = "Uh oh, it looks super crowded now.<br>Maybe try again later.<br><br>";
		img.onload = function() {
  			div.appendChild(img);
		};
		img.src = '../img/crowded.png';
			} else {
		var img = new Image(300,300);
		var div = document.getElementById('reccomend');
		div.innerHTML = "Nice! It's not crowded currently.<br>Enjoy shopping!<br><br>";
		img.onload = function() {
  			div.appendChild(img);
		};
		img.src = '../img/notcrowded.png';
	}
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function search() {
	var hu = document.getElementById("site-search").value; 
	fetch('https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search='+hu)
	.then((resp) => resp.json())
	.then(function(data) {
		console.log(data);
		var x = 0;
		for ( x == 1 ; x < 10 ; x++ ) {
			var sugestion = document.createElement('li');
		    document.getElementById('sugestion').appendChild(sugestion);
		    document.getElementsByTagName('li')[x].innerHTML = data[1][x];
			var div = document.createElement('div');
			document.getElementById('result').appendChild(div).setAttribute("id", "affich"+x);
			div.setAttribute("value", x);
		    var titre = document.createElement('h2');
		    document.getElementById('affich'+x).appendChild(titre);
		    document.getElementsByTagName('h2')[x].innerHTML = data[1][x];
		    var result = document.createElement('p');
		    document.getElementById('affich'+x).appendChild(result);
		    document.getElementsByTagName('p')[x].innerHTML = data[2][x];
		    var iframe = document.createElement('iframe');
		    document.getElementById('affich'+x).appendChild(iframe);
		    iframe.setAttribute("src", data[3][x]);
		    iframe.setAttribute("width", "100%");
		    iframe.setAttribute("height", "300px");
		};
	});
};
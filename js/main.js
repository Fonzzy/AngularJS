var tyres = $('tyre') ; 
for (var i = 0; i < tyres.length; i++) {
	console.log(tyres[i].innerText) ;
};

on('event[action="add"]','click', function () {
	console.log(new Date()) ;
});

off('event[action="remove"]','click',function(){
	console.log('inactive');
}) ;

edit('event[action="edit"]','click', function () {
	document.getElementById('form').style.display = 'block';
});

save('event[action="save"]','click', function () {
	
	document.getElementById('form').style.display = 'none';
	var iDiv = document.createElement('tyre');
	document.getElementsByTagName('list')[0].appendChild(iDiv);

	// Now create and append to iDiv
	var innerDiv = document.createElement('reference');
	innerDiv.innerText = $('#reference')[0].value;

	var innerDiv2 = document.createElement('vehiculeType');
	innerDiv2.innerText = $('#vehiculeType')[0].value;

	var innerDiv3 = document.createElement('heigth');
	innerDiv3.innerText = $('#heigth')[0].value;

	var innerDiv4 = document.createElement('width');
	innerDiv4.innerText = $('#width')[0].value;

	var innerDiv5 = document.createElement(' thickness');
	innerDiv5.innerText = $('#heigth')[0].value;

	// The variable iDiv is still good... Just append to it.
	iDiv.appendChild(innerDiv);
	iDiv.appendChild(innerDiv2);
	iDiv.appendChild(innerDiv3);
	iDiv.appendChild(innerDiv4);
	iDiv.appendChild(innerDiv5);
});
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
	
	var TyreVar = new Tyre(
		$('#reference')[0].value,
		$('#vehiculeType')[0].value,
		$('#heigth')[0].value,
		$('#width')[0].value
		);

	document.getElementById('form').style.display = 'none';

	// ConverForm to tyre object
	// append into list

	var iDiv = document.createElement('tyre');
	document.getElementsByTagName('list')[0].appendChild(iDiv);

	var innerDiv = document.createElement('reference');
	innerDiv.innerText = TyreVar.reference;

	var innerDiv2 = document.createElement('vehiculeType');
	innerDiv2.innerText = TyreVar.vehiculeType;

	var innerDiv3 = document.createElement('heigth');
	innerDiv3.innerText = TyreVar.Pattern.height;

	var innerDiv4 = document.createElement('width');
	innerDiv4.innerText = TyreVar.Pattern.width;

	var innerDiv6 = document.createElement("event");
	innerDiv6.setAttribute("action", "add");
	innerDiv6.innerText = '+';

	var innerDiv7 = document.createElement("event");
	innerDiv7.setAttribute("action", "remove");
	innerDiv7.innerText = '-';

	var innerDiv8 = document.createElement("event");
	innerDiv8.setAttribute("action", "edit");
	innerDiv8.innerText = 'EDIT';

	iDiv.appendChild(innerDiv);
	iDiv.appendChild(innerDiv2);
	iDiv.appendChild(innerDiv3);
	iDiv.appendChild(innerDiv4);
	iDiv.appendChild(innerDiv6);
	iDiv.appendChild(innerDiv7);
	iDiv.appendChild(innerDiv8);
});
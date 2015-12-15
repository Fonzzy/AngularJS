
function Tyre(reference, vehiculeType, height, width, thickness, other){
	this.reference = reference;
	this.vehiculeType = vehiculeType;
	this.Pattern = new Pattern(height, width, thickness);
	this.other = other;
}

function Pattern(height, width, thickness){
	this.height = height;
	this.width = width;
	this.thickness = thickness;
}
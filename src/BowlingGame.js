function CheckOut() {
}
CheckOut.prototype.amount = 0;
CheckOut.prototype.scan = function(item) {
	this.amount += 50;
	if (this.amount == 150)
		this.amount = 130;
};
CheckOut.prototype.total = function() {
	return this.amount;
};
describe("Scans individual goods", function() {
	
	it("Scans 1 A and gets the price 50", function() {
		var checkout = new CheckOut();
		checkout.scan("A");
		expect(checkout.total()).toEqual(50);
	});
	
	it("Scans 2 A and gets the price 100", function() {
		var checkout = new CheckOut();
		checkout.scan("A");
		checkout.scan("A");
		expect(checkout.total()).toEqual(100);
	});
	
	it("Scans 3 A and gets the price 130", function() {
		var checkout = new CheckOut();
		checkout.scan("A");
		checkout.scan("A");
		checkout.scan("A");
		expect(checkout.total()).toEqual(130);
	});
});
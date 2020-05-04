describe("Given Components", () => {
	it("is defined", () => {
		expect(Components).to.not.be.undefined;
	});

	describe("Given a Header Component", () => {
		it("is defined", () => {
			expect(Components.Header).to.not.be.undefined;
		});

		it("can create an instance", () => {
			const header = new Components.Header();
			expect(header).to.not.be.undefined;
		});

		it("can create an instance, has title and subTitle", () => {
			const header = new Components.Header({
				"title": "Hello",
				"subTitle": "I'm A header"
			});
			expect(header).to.not.be.undefined;
			expect(header.title).to.not.be.undefined;
			expect(header.subTitle).to.not.be.undefined;
		});
	});

	it("has a Manager Component defined", () => {
		expect(Components.Manager).to.not.be.undefined;
	});
});

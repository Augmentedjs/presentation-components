
describe('Given Augmented Presentation Card View', () => {
	it('is defined', () => {
		expect(Components.Card).to.not.be.undefined;
	});

	describe('Given an instance of Card', () => {
		let view;

		beforeEach(() => {
			view = new Components.Card({"name": "sample", "el": "#sandbox", "body": "hello"});
		});

		afterEach(() => {
			view.remove();
			view = null;
		});

		it('instance is an instance of Card', () => {
			expect(view instanceof Components.Card).to.be.true;
		});

		it('has a body', () => {
			expect(view.body).to.equal("hello");
		});
	});
});

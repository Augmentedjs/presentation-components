
describe('Given Augmented Presentation Article View', () => {
	it('is defined', () => {
		expect(Augmented.Presentation.Component.Article).to.not.be.undefined;
	});

	describe('Given an instance of Article', () => {
		let view;

		beforeEach(() => {
			view = new Augmented.Presentation.Component.Article({"name": "sample", "el": "#sandbox", "body": "hello"});
		});

		afterEach(() => {
			view.remove();
			view = null;
		});

		it('instance is an instance of Article', () => {
			expect(view instanceof Augmented.Presentation.Component.Article).to.be.true;
		});

		it('has a body', () => {
			expect(view.body).to.equal("hello");
		});

		it('has a header', () => {
			view.header = "hello";
			expect(view.header).to.equal("hello");
		});

		it('has a footer', () => {
			view.footer = "hello";
			expect(view.footer).to.equal("hello");
		});

		it('can add a section', () => {
			view.addSection({});
			expect(view.sections).to.not.equal([]);
		});
	});
});

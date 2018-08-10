describe('Given a Toolbar Component', () => {
	it('is defined', () => {
		expect(Augmented.Presentation.Component.Toolbar).to.not.be.undefined;
	});

	describe('Given a Toolbar instance', () => {
		let t = null;
		beforeEach(() => {
			t = new Augmented.Presentation.Component.Toolbar();
		});
		afterEach(() => {
			t = null;
		});

		it('can create an instance', () => {
			expect(t).to.not.be.undefined;
		});

		it('can create an instance, has items', () => {
			expect(t.menuItems).to.not.be.undefined;
			expect(t.menuItems).to.deep.equal([]);
		});

		it('can add items', () => {
			t.addSpacer();
			expect(t.menuItems).to.not.be.undefined;
			expect(t.menuItems).to.not.deep.equal([]);
		});
	});
});

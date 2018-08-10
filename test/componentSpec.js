describe('Given Components', () => {
	it('is defined', () => {
		expect(Augmented.Presentation.Component).to.not.be.undefined;
	});

	describe('Given a Header Component', () => {
		it('is defined', () => {
			expect(Augmented.Presentation.Component.Header).to.not.be.undefined;
		});

		it('can create an instance', () => {
			const header = new Augmented.Presentation.Component.Header();
			expect(header).to.not.be.undefined;
		});

		it('can create an instance, has title and subTitle', () => {
			const header = new Augmented.Presentation.Component.Header({
				"title": "Hello",
				"subTitle": "I'm A header"
			});
			expect(header).to.not.be.undefined;
			expect(header.title).to.not.be.undefined;
			expect(header.subTitle).to.not.be.undefined;
		});
	});

	it('has a Manager Component defined', () => {
		expect(Augmented.Presentation.Component.Manager).to.not.be.undefined;
	});

	it('has a Notification Center Component defined', () => {
		expect(Augmented.Presentation.Component.NotificationCenter).to.not.be.undefined;
	});

});


describe("Given Augmented SelectBox", () => {
	it("is defined", () => {
		expect(Components.SelectBox).to.not.be.undefined;
	});

	describe("Given an instance of Selectbox", () => {
		let view, el;
		beforeEach(() => {
			view = new Components.SelectBox({
				"name": "sample",
				"el": "#sandbox",
				"label": "Puppies",
				"options": [
					{ "label": "Yorkie", "value": 0 },
					{ "label": "Corgi", "value": 1 }
				]});
		});

		afterEach(() => {
			view.remove();
			view = null;
		});

		it("can render", async () => {
			const ret = await view.render();
			el = await document.querySelector("#sandbox");
			const html = el.outerHTML;

			expect(ret).to.not.be.undefined;
			expect(el).to.not.be.undefined;
			expect(html).to.not.be.undefined;
			expect(html).to.equal(`<div id="sandbox" class="select"><select data-sample="select" name="sample" id="select_sample_sandbox"><option value="0">Yorkie</option><option value="1">Corgi</option></select><label for="select_sample_sandbox">Puppies</label></div>`);
		});

		it("can render as large", async () => {
			view.large = true;
			const ret = await view.render();
			el = await document.querySelector("#sandbox");
			const html = el.outerHTML;

			expect(ret).to.not.be.undefined;
			expect(el).to.not.be.undefined;
			expect(html).to.not.be.undefined;
			expect(html).to.equal(`<div id="sandbox" class="select large"><select data-sample="select" name="sample" id="select_sample_sandbox"><option value="0">Yorkie</option><option value="1">Corgi</option></select><label for="select_sample_sandbox">Puppies</label></div>`);
		});
	});
});

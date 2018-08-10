class MyMenu2 extends Augmented.Presentation.Component.Menu {
	constructor() {
		super({ "el": "#sandbox", "name": "monkey", "menuItems": [{ "id": "monkey", "click": "monkeyClick", "icon": "info", "title": "Monkey", "spacer": false }]});
	}
};

describe('Given Augmented Presentation Menu View', () => {
	describe('Given a Menu View', () => {
		it('is defined', () => {
			expect(Augmented.Presentation.Component.Menu).to.not.be.undefined;
		});

		describe('Given a menu instance', () => {
			const body = document.getElementsByTagName("body")[0];
			let el = document.getElementById("sandbox"),
			d;

			if (!el) {
				el = document.createElement("div");
				el.id = "sandbox";
				body.appendChild(el);
			}

			beforeEach(() => {
				d = new MyMenu2();
			});

			afterEach(() => {
				d.remove();
				d = null;
			});

			it('Menu is a Colleague', () => {
				expect(d.sendMessage).to.not.be.undefined;
			});

			it('can create an instance that is a Menu', () => {
				expect(d).to.not.be.undefined;
			});

			it('the Menu has a bound element', () => {
				expect(d.el).to.not.be.undefined;
			});

			it('can return the binding attribute name', () => {
				const name = d.bindingAttribute();
				expect(name).to.equal("data-monkey");
			});

			it('can return a bound element', () => {
				d.injectTemplate("<span data-monkey=\"me\"></span>", el);
				const s = el.querySelector("span");
				const e = d.boundElement("me");
				expect(s).to.not.be.undefined;
				expect(e).to.not.be.undefined;
			});

			it('can add items', () => {
				d.addItem("id", "click", "icon", "title", false);
				expect(d.menuItems).to.not.be.undefined;
			});
		});
	});
});

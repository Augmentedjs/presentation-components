import { DecoratorView } from "presentation-decorator";
import Dom from "presentation-dom";

/**
 * A Footer Component
 * @extends DecoratorView
 */
class Footer extends DecoratorView {
  constructor(options) {
    super(options);
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
  };
  /**
   * The body content of the card (supports HTML)
   * @property body
   */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };

  /**
   * template - sets content of the footer, handled internally
   * @private
   */
  _template() {
    return this._body;
  };

  /**
   * render
   */
  render() {
    if (this.el) {
      Dom.setValue(this.el, this._template());
      this.delegateEvents();
      this.syncAllBoundElements();
    }
    return this;
  };

  remove() {
    this.removeTemplate(this.el, true);
    return super.remove();
  };
};

export default Footer;

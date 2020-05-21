import { DecoratorView } from "presentation-decorator";

/**
 * A card view - simple panel/dialog-like panel
 * @extends DecoratorView
 */
class Card extends DecoratorView {
  constructor(options) {
    if (!options) {
      options = {}
    }
    if (!options.name) {
      options.name = "card";
    }
    if (!options.style) {
      options.style = "card";
    } else {
      options.style= `card ${options.style}`;
    }
    super(options);

    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
  };

  /**
   * body property - the body of the card
   * @property body
   */

  /**
   * style property - the style
   * @property style
   */
   set style(style) {
     this._style = style;
   };

   get style() {
     return this._style;
   };

  /**
   * template - sets content of the dialog, handled internally
   * @private
   */
  _template() {
    return this._body;
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
   * render - render the card
   */
  render() {
    if (this.el) {
      const el = document.querySelector(this.el);
      if (el) {
        el.innerHTML = this._template();
      }
      this.delegateEvents();
    }
    return this;
  };

  /**
   * remove
   */
  remove() {
    this.removeTemplate(this.el, true);
    return super.remove();
  };
};

export default Card;

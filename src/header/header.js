import DecoratorView from "../../decorator/decorator.js";
import Dom from "../../../dom/dom.js";

/**
 * A Header Component
 * @memberof Presentation.Component
 * @extends Presentation.DecoratorView
 */
class Header extends DecoratorView {
  constructor(options) {
    super(options);
    if (options && options.title) {
      this._title = options.title;
    } else {
      this._title = "";
    }
    if (options && options.subTitle) {
      this._subTitle = options.subTitle;
    } else {
      this._subTitle = "";
    }
  };
  /**
   * @property {string} title A title property
   */
   set title(title) {
     this._title = title;
   };

   get title() {
     return this._title;
   };
  /**
   * @property {string} subTitle A subTitle property
   */
   set subTitle(subTitle) {
     this._subTitle = subTitle;
   };

   get subTitle() {
     return this._subTitle;
   };
   /**
    * Render the Header
    * @returns {object} Returns the view context ('this')
    */
   render() {
     Dom.setValue(this.el, `${this.template}${((this.title) ? "<h1>" + this.title + "</h1>": "")}${((this.subTitle) ? "<h2>" + this.subTitle + "</h2>": "")}`);
     this.delegateEvents();
     this.syncAllBoundElements();
     return this;
   };

   /**
    * Remove the Header
    * @returns {object} Returns the view context ('this')
    */
   remove() {
     this.removeTemplate(this.el, true);
     return super.remove();
   };
};

export default Header;

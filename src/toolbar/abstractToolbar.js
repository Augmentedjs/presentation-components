import Augmented from "augmentedjs-next";
import DecoratorView from "../../decorator/decorator.js";
import Model from "../../../model/model.js";

/**
  * An abstract tooldbar Component, designed to be extended
  * @memberof Presentation.Component
  * @extends Presentation.DecoratorView
  * @abstract
  */
class AbstractToolbar extends DecoratorView {
  constructor(options) {
    super(options);
    this.isInitalized = false,
    this._menuItems = [];
    this.title = "";

    if (this.model) {
      this.model.clear();
    } else {
      this.model = new Model();
    }
    if (options) {
      if (options.data && (Augmented.isObject(options.data))) {
        this.model.set(options.data);
      }
      if (options.title && (Augmented.isString(options.title))) {
        this.title = options.title;
      }
      if (options.menuItems && (Augmented.isObject(options.menuItems))) {
        this._menuItems = options.menuItems;
      }
    }
    if (this.el && this.name) {
      this.isInitalized = true;
    }
  };

  /**
    * The model property
    * @property {Augmented.Model} model The model property
    */

  /**
    * The initialized property
    * @property {boolean} isInitalized The initialized property
    */

  /**
    * The menuitems property
    * @property {array} menuItems The initialized property
    */

  /**
    * The title property
    * @property {string} title The title property
    */

  /**
    * Adds an item to the menu
    * @param id {string} The id of the itemID
    * @param click {string} The bound click method to call
    * @param icon {string} The icon name (webfont)
    * @param title {string} The title of the itemID
    * @param spacer {boolean} Sets a spacer item vs text (not clickable)
    * @example addItem({"itemID", "event", "web", "something", false });
    * @example addItem({"space", null, null, null, true });
    */
  addItem(id, click, icon, title, spacer) {
    if (!spacer) {
      this._menuItems.push({ "id": id, "click": click, "icon": icon, "title": title, "spacer": false });
    } else {
      this.addSpacer();
    }
  };
  /**
    * Adds a spacer item to the menu
    * @example addSpacer();
    */
  addSpacer() {
    this._menuItems.push({ "id": null, "click": null, "icon": null, "title": null, "spacer": true });
  };

  get menuItems() {
    return this._menuItems;
  };

  set menuItems(items) {
    this._menuItems = items;
  };

  /**
   * Clear all items in the menu
   */
  clearMenuItems() {
    this._menuItems.length = 0;
  };

  /**
   * Select an item in the menu
   * @param {string} id The id
   */
  select(id) {
    return getItem(id);
  };

  /**
   * Get an item in the menu
   * @param {string} id The id
   */
  getItem(id) {
    const l = this._menuItems.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (this._menuItems[i].id && this._menuItems[i].id === id) {
        return this._menuItems[i];
      }
    }
    return null;
  };
};

export default AbstractToolbar;

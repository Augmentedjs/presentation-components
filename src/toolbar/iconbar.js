import AbstractToolbar from "./abstractToolbar.js";
import Dom from "presentation-dom";
import buildIconItems from "../functions/buildIconItems.js";

/**
 * An Iconbar View
 * @extends AbstractToolbar
 */
class Iconbar extends AbstractToolbar {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.tooltip = true;
    super(options);
  };

  /**
   * Adds an item to the menu
   * @param id {string} The id of the itemID
   * @param click {string} The bound click method to call
   * @param icon {string} The icon name (webfont) or image src uri
   * @param toolTip {string} The toolTip of the itemID
   * @param isImageLink {boolean} Sets is icon is an image link vs web font
   * @example addIcon({"itemID", "event", "settings", "something", false });
   * @example addIcon({"itemID", "event", "/images/blah.png", "something", true });
   */
  addIcon(id, click, icon, toolTip, isImageLink) {
    this._menuItems.push({ "id": id, "click": click, "icon": icon, "title": toolTip, "spacer": false, "isImageLink": isImageLink });
  };

  /**
   * Render the Toolbar
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      //_logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
      return this;
    }
    this.template = null;//"notused";
    if (this.el) {
      const e = Dom.selector(this.el);
      if (e) {
        // the menu
        Dom.addClass(e, "toolbar");
        Dom.addClass(e, "iconbar");
        e.setAttribute("data-" + this.name, "iconbar");
        e.innerHTML = buildIconItems(this.name, this.menuItems, this.tooltip);
      }
    } else {
      //_logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
      return this;
    }
    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  };
};

export default Iconbar;

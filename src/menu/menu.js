import AbstractToolbar from "../toolbar/abstractToolbar.js";
import Dom from "presentation-dom";
import buildNavItems from "../functions/buildNavItems.js";

const buildMenu = (name, menuItems) => {
  return `<i class="material-icons md-dark">more_vert</i><ul>${buildNavItems(name, menuItems)}</ul>`;
};

/**
 * A Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
class Menu extends AbstractToolbar {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!options.tagName) {
      options.tagName = "nav";
    }
    super(options);
  };
  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      return this;
    }
    this.template = null;//"notused";
    if (this.el) {
      const e = Dom.selector(this.el);
      if (e) {
        // the menu
        Dom.addClass(e, "tools");
        e.setAttribute("data-" + this.name, "menu");
        e.innerHTML = buildMenu(this.name, this.menuItems);
      }
    } else {
      //_logger.warn("AUGMENTED: Menu no element anchor, not rendering.");
      return this;
    }
    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  };
};

export default Menu;

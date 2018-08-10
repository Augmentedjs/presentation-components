/*
<nav id="more" class="menu tools">
    <i class="material-icons md-dark">more_vert</i>
    <ul>
        <li id="editable" data-viewer="editable" data-click="editableToggle"><i class="material-icons md-dark checkbox hidden"></i><i class="material-icons md-dark">mode_edit</i>Editable Toggle</li>
        <li id="sorting" data-viewer="sortable" data-click="sortableToggle"><i class="material-icons md-dark checkbox hidden"></i><i class="material-icons md-dark">sort</i>Sorting Toggle</li>
        <li id="lineNumber" data-viewer="lineNumber" data-click="lineNumbersToggle"><i class="material-icons md-dark checkbox hidden"></i><i class="material-icons md-dark">settings</i>Line Number Toggle</li>
    </ul>
</nav>
*/

import AbstractToolbar from "../toolbar/abstractToolbar.js";
import Dom from "../../../dom/dom.js";
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

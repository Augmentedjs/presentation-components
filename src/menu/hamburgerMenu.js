import buildMenuItems from "../functions/buildMenuItems.js";
import Dom from "../../../dom/dom.js";
import AbstractToolbar from "../toolbar/abstractToolbar.js";

const buildMenu = (name, title, menuItems) => {
  return `
    <section class="material-design-hamburger" data-${name}="hamburgerClickRegion">
      <div class="material-design-hamburger__icon" data-${name}="hamburgerIcon" data-click="toggle">
        <i class="material-icons md-light">menu</i>
      </div>
    </section>
    <section class="menu menu--off" data-${name}="hamburgerMenu">
      <div>${title}</div>
      ${buildMenuItems(name, menuItems)}
    </section>
  `;
};

/**
 * A Hamburger Menu View
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
class HamburgerMenu extends AbstractToolbar {
  constructor(options) {
    super(options);
  };

  /**
   * Render the Hamburger Menu
   * @method render Renders the Hamburger
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (this.isInitalized) {
      this.template = null;//"notused";
      if (this.el) {
        const e = Dom.selector(this.el);
        if (e) {
          // the menu
          Dom.addClass(e, "wrapper");
          e.setAttribute(`data-${this.name}`, "hamburger");
          e.innerHTML = buildMenu(this.name, this.title, this.menuItems);
        }
        this.delegateEvents();
        this.syncAllBoundElements();
      }
    }
    return this;
  };

  /**
   * Toggle the Hamburger menu view
   * @method toggle
   */
  toggle() {
    if (!this.modal) {
      const menu = this.boundElement("hamburgerMenu");
      const r = this.boundElement("hamburgerClickRegion");
      r.classList.toggle("model");
      menu.classList.toggle("menu--on");
    }
  };
};

export default HamburgerMenu;

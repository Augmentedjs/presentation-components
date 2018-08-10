import AbstractToolbar from "../toolbar/abstractToolbar.js";
import Dom from "../../../dom/dom.js";
import buildMenuItems from "../functions/buildMenuItems.js";

/**
 * A Notfication Center Component
 * @memberof Presentation.Component
 * @extends Presentation.Component.AbstractToolbar
 */
class NotificationCenter extends AbstractToolbar {
  constructor(options) {
    super(options);
  };

  /**
   * @property notifications {array} The notifications as notify object array
   */
  get notifications() {
    return this.menuItems;
  };
  set notifications(n) {
    this.menuItems = n;
  };

  /**
   * Show the NotificationCenter
   */
  showNotification() {
    // show the widget
  };

  /**
   * Hide the NotificationCenter
   */
  hideNotification() {
    // hide the widget
  };

  /**
   * Clear the NotificationCenter
   */
  clearNotifications() {
    this.clearMenuItems();
  };


  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    this.template = null;//"notused";
    if (this.el) {
      const e = Dom.selector(this.el);
      if (e) {
        // the menu
        Dom.addClass(e, "notify");
        e.setAttribute("data-" + this.name, "notify");
        e.innerHTML = `<ul>${buildMenuItems(this.name, this.menuItems)}</ul>`;
      }
      this.delegateEvents();
      this.syncAllBoundElements();
    }
    return this;
  };
};

export default NotificationCenter;

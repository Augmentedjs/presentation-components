import Toolbar from "./toolbar.js";

/**
 * An Iconbar View
 * @extends Toolbar
 */
class Iconbar extends Toolbar {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.tooltip = true;
    super(options);
  };
};

export default Iconbar;

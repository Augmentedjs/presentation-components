import { DecoratorView } from "presentation-decorator";

/**
 * A SelectBox
 * @extends DecoratorView
 */
class SelectBox extends DecoratorView {
  constructor(options = {}) {
    super(options);
    if (options.options && Array.isArray(options.options)) {
      this._options = options.options;
    } else {
      this._options = [];
    }

    if (options.large) {
      this._large = true;
    } else {
      this._large = false;
    }

    if (options.label) {
      this.label = options.label;
    }
  };

  set large(large) {
    this._large = large;
  };

  get large() {
    return this._large;
  };

  /**
   * Render the SelectBox
   * @returns {object} Returns the view context ('this')
   */
  async render() {
    await super.render();
    if (this.el) {
      const el = document.querySelector(this.el);

      if (el) {
        el.classList.add("select");
        if (this._large) {
          el.classList.add("large");
        }
        const select = document.createElement("select");

        select.dataset[this.name] = `select`;
        select.name = this.name;
        select.id = `select_${this.name}_${el.id}`;

        let i = 0;
        const l = this._options.length;
        for(i; i < l; i++) {
          const option = document.createElement("option");
          option.value = this._options[i].value;
          if (this._options[i].selected) {
            option.selected = true;
          }
          const text = document.createTextNode(this._options[i].label);
          option.appendChild(text);
          select.appendChild(option);
        }

        el.appendChild(select);
        const label = document.createElement("label");
        const text = document.createTextNode(this.label);
        label.appendChild(text);
        label.htmlFor = `select_${this.name}_${el.id}`;
        el.appendChild(label);
      }
    }
    return this;
  };

  /**
   * remove
   */
  async remove() {
    await this.removeTemplate(this.el, true);
    return super.remove();
  };

  /**
   * Adds an option to the select
   * @param {string} label label of the option
   * @param {string} value value of the option
   * @param {boolean} selected selected or not
   * @example addOption({"dog", 0, true});
   */
  addOption(label, value, selected) {
    this._options.push({
      "label": label,
      "value": value,
      "selected": (selected) ? selected : false
    });
  };
};

export default SelectBox;

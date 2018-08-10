import DecoratorView from "../../decorator/decorator.js";
import Dom from "../../../dom/dom.js";

const DEFAULT_TAG = "article";

/**
 * An article class for setting up a 'page'<br/>
 * Supported options are:<br/>
 * <ul>
 * <li>name - The name of the article view</li>
 * <li>el - The mount point</li>
 * <li>style - The style class</li>
 * <li>header - The header markup</li>
 * <li>headerEl - The header mount point</li>
 * <li>footer - The footer markup</li>
 * <li>footerEl - The footer mount point</li>
 * <li>body - The body markup</li>
 * <li>bodyEl - The body mount point (will generate a div)</li>
 * <li>sections - array of sections to prefill (see addSection API for format)</li>
 * </ul>
 * @memberof Presentation.Component
 * @extends Presentation.DecoratorView
 * @param {object} options Options to pass to the constructor
 * @example
 * const article = new Presentation.Component.Article(
 *                 { "el": "#mount", "header": "html", "footerEl": "#foot" });
 */
class Article extends DecoratorView {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!options.name) {
      options.name = DEFAULT_TAG;
    }
    // tag should be article
    options.tagName = DEFAULT_TAG;
    super(options);
    if (options && options.header) {
      this._header = options.header;
    } else {
      this._header = "";
    }
    if (options && options.headerEl) {
      this._headerEl = options.headerEl;
    } else {
      this._headerEl = "";
    }
    if (options && options.headerStyle) {
      this._headerStyle = options.headerStyle;
    } else {
      this._headerStyle = "";
    }
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
    if (options && options.footer) {
      this._footer = options.footer;
    } else {
      this._footer = "";
    }
    if (options && options.footerEl) {
      this._footerEl = options.footerEl;
    } else {
      this._footerEl = "";
    }
    if (options && options.footerStyle) {
      this._footerStyle = options.footerStyle;
    } else {
      this._footerStyle = "";
    }
    if (options && options.sections) {
      this._sections = options.sections;
    } else {
      this._sections = [];
    }
  };

  /**
   * Header property
   * @property {string} header
   */
  set header(header) {
    this._header = header;
  };

  get header() {
    return this._header;
  };

  /**
   * Footer for the article
   * @property {string} footer
   */
  set footer(footer) {
    this._footer = footer;
  };

  get footer() {
    return this._footer;
  };

  /**
   * The body content of the card (supports HTML)
   * @property {string} body
   */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };

  /**
   * The section array
   * @property {array} sections
   */
  set sections(sections) {
    if (sections && Array.isArray(sections)) {
      this._sections = sections;
    }
  };

  get sections() {
    return this._sections;
  };

  /**
   * @private
   */
  _formatSections() {
    const l = this._sections.length;
    let sections = "", i = 0;
    for (i = 0; i < l; i++) {
      sections += this._formatSection(this._sections[i]);
    }
    return sections;
  };

  /**
   * @private
   */
  _formatSection(section) {
    let sect = "";
    if (section && ( section.body || section.id || section.class )) {
      const cls = (section.class) ? ` class="${section.class}"` : "";
      const id = (section.id) ? ` id="${section.id}"` : "";
      const body = (section.body) ? section.body : "";
      sect = `<section${id}${cls}>${body}</section>`;
    }
    return sect;
  };

  /**
   * Add a section object to the article
   * @param {object} section a section object
   * @example Section Object format:
   * {
   *   "id" "something",
   *   "body" "html",
   *   "class" "something"
   * }
   */
  addSection(section) {
    this._sections.push(section);
  };

  /**
   * Clear the sections
   */
  clearSections() {
    this._sections.splice(0, this._sections.length);
  };

  /**
   * render - render the article
   */
  render() {
    if (this.el) {
      Dom.setValue(this.el, this._template());
      this.delegateEvents();
    }
    return this;
  };

  /**
   * template - sets content of the dialog, handled internally
   * @private
   */
  _template() {
    let header = "";
    if (this._header) {
      let hid = "", style = "";
      if (this._headerEl) {
        hid = ` id="${this._headerEl}"`;
      }
      if (this._headerStyle) {
        style = ` class="${this._headerStyle}"`;
      }

      header = `<header${hid}${style}>${this._header}</header>`;
    }
    let footer = "";
    if (this._footer) {
      let fid = "", style = "";
      if (this._footerEl) {
        fid = ` id="${this._footerEl}"`;
      }
      if (this._footerStyle) {
        style = ` class="${this._footerStyle}"`;
      }
      footer = `<footer${fid}${style}>${this._footer}</footer>`;
    }
    let body = "";
    if (this._body) {
      if (this._bodyEl) {
        body = `<div id="${this._bodyEl}">${this._body}</div>`;
      } else {
        body = `${this._body}`;
      }
    }
    return `${header}${body}${this._formatSections()}${footer}`;
  };
};

export default Article;

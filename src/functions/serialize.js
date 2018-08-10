/**
 * Serialize object into query parameters url string
 * @function serialize
 * @memberof Utilities
 * @param {object} obj Object to serialize
 * @returns {string} URL string
 */
const serialize = (obj) => {
  let str = [], p = null;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }
  return str.join("&");
};

export default serialize;

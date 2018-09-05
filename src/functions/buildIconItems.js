const buildIconItems = (name, data, tooltip) => {
  let items = "";
  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="spacer"></div>';
      } else {
        items = items + `
          <div id="${data[i].id}" data-${name}="${data[i].id}" data-click="${data[i].click}"${(tooltip) ? ' title="' + data[i].title + '"' : ''}>
            ${( (data[i].icon && !data[i].isImageLink) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : '' )}
            ${( (data[i].icon && data[i].isImageLink) ? ('<img href="' + data[i].icon + '" alt="' + data[i].title + '" />') : '' )}
          </div>
        `;
      }
    }
  }
  return items;
};

export default buildIconItems;

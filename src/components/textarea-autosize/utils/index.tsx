export const resizeTextarea = (target: HTMLTextAreaElement, options: { maxRows?: number }) => {
  if (typeof window === 'undefined') {
    return;
  }

  // Save old height value for later comparison
  const cachedHeight = parseFloat(target.style.height);

  // Clear height to measure the true scrollHeight
  target.style.height = "";

  const computedStyle = window.getComputedStyle(target);

  // Calculate the height not included in scrollHeight
  // (only works with box-sizing: border-box)
  const borderTopWidth = Math.round(parseFloat(computedStyle.borderTopWidth));
  const borderBottomWidth = Math.round(parseFloat(computedStyle.borderBottomWidth));
  const heightOffset = borderTopWidth + borderBottomWidth;

  const scrollHeight = target.scrollHeight;
  const desiredHeight = scrollHeight + heightOffset;

  // Caclulate max height if maxRows are set
  let currentValue: string | null = null;
  let currentRows: number | null = null;
  let maxHeight: number | null = null;

  if (options?.maxRows || options?.maxRows === 0) {
    currentRows = target.rows;
    target.rows = 1;
    currentValue = target.value;
    target.value = ('\r\n').repeat(options.maxRows > 0 ? options.maxRows - 1 : 0)
    maxHeight = target.scrollHeight + heightOffset;

    // Set values back
    target.value = currentValue;
    target.rows = currentRows;
  }

  // If the calculated height is different, updated the height
  if ((maxHeight && maxHeight !== desiredHeight) || desiredHeight !== cachedHeight) {
    const isMax = maxHeight ? desiredHeight > maxHeight : false;
    target.style.height = isMax ? maxHeight + 'px' : desiredHeight + "px";
  } else {
    target.style.height = cachedHeight + 'px';
  }
};

export const resizeTextarea = (target: HTMLTextAreaElement) => {
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

  // If the calculated height is different, updated the height
  if (scrollHeight + heightOffset !== cachedHeight) {
    target.style.height = scrollHeight + heightOffset + "px";
  } else {
    target.style.height = cachedHeight + 'px';
  }
};

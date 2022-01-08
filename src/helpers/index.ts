export function isInViewport(elementID: string) {
  const element = document.querySelector("#" + elementID);
  const rect = element && element.getBoundingClientRect();
  console.log(rect);
  if (rect) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  return false;
}

export function isInViewport(elementID: string) {
  const element = document.querySelector("#" + elementID);
  const rect = element && element.getBoundingClientRect();
  if (rect) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight / 2 || document.documentElement.clientHeight / 2) &&
      rect.right <=
        (window.innerWidth / 2 || document.documentElement.clientWidth / 2)
    );
  }
  return false;
}

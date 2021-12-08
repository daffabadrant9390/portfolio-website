export function addClass(e, classess) {
  e.classList && e.classList.add(...classess.split(" "));
}

export function removeClass(e, classess) {
  e.classList && e.classList.remove(...classess.split(" "));
}

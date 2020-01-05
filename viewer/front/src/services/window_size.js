const getWindowWidthSize = () => {
  let w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  width = w.innerWidth || e.clientWidth || g.clientWidth;

  return width;
};

const getWindowHeightSize = () => {
  let w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  height = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return height;
};

export default { getWindowWidthSize, getWindowHeightSize }
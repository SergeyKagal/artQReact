export function setImgUrl(categoryNum, questionNum) {
  return `https://github.com/SergeyKagal/image-data/blob/master/full/${
    categoryNum > 0 ? categoryNum : ''
  }${questionNum}full.jpg?raw=true`;
}

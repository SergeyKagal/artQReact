export function setImgUrl(categoryNum, questionNum) {
  return `https://github.com/SergeyKagal/image-data/blob/master/img/${
    categoryNum > 0 ? categoryNum : ''
  }${questionNum}.jpg?raw=true`;
}

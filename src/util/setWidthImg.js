export const setWidthImg = (imageList) => {
  let widthImg = [];
  let sum = 0;
  let indexArr = 0;

  imageList.map((item, index) => {
    let width = item.imageWidth / 250;

    sum += width;

    if (sum < 90) {
      return widthImg.push(width);
    } else {
      let widthEnd = 100 - (sum - width);
      sum = 0;
      indexArr = index;
      return widthImg.push(+widthEnd.toFixed(3));
    }
  });

  widthImg.unshift(indexArr);

  return widthImg;
};

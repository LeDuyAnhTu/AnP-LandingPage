function startProgress(){
    const topleftNumber = document.getElementById("topleft-number");
    const toprightNumber = document.getElementById("topright-number");

    let speed = 160;

    let topLeftInterval = null;
    let topleftIndex = 0;
    let topleftMax = 95;
    let topRightInterval = null;
    let topRightIndex = 0;
    let toprightMax = 150;

    topLeftInterval = setInterval(() => {
      if (topleftIndex >= topleftMax) {
        clearInterval();
      } else {
        topleftIndex++;
        topleftNumber.innerText = `${topleftIndex}%`;
      }
    }, 900 / topleftMax);

    topRightInterval = setInterval(() => {
      if (topRightIndex >= toprightMax) {
        clearInterval();
      } else {
        topRightIndex++;
        toprightNumber.innerText = `${topRightIndex}+`;
      }
    }, 900 / toprightMax);
}

startProgress();
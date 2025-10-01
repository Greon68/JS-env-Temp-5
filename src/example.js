export const func = (element) => {
  // let idInterval = null;
  let count = 555;
  let idInterval = setInterval(() => {
    element.textContent = count;
    console.log("count - ", count);
    count += 10;
    if (count > 640) {
      clearInterval(idInterval);
      // element.textContent = "";
    }
  }, 2000);
};

const convertIsoStringToDate = isoStringDate => {
  console.log(isoStringDate);
  const date = new Date(isoStringDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = `0${dt}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${dt}`;
};

export default convertIsoStringToDate;

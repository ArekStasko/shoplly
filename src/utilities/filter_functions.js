export const searchFunction = (data, searchValue, placeValue) => {
  return data.filter(
    (item) =>
      item.title
        .trim()
        .toLowerCase()
        .indexOf(searchValue.trim().toLowerCase()) > -1 &&
      item.place.trim().toLowerCase().indexOf(placeValue.trim().toLowerCase()) >
        -1
  );
};

export const filterData = (data, max, min, sortValue) => {
  let filteredData =
    max && min
      ? data.filter((item) => item.price >= min && item.price <= max)
      : data;

  if (sortValue === "highLow") {
    return filteredData.sort((a, b) => b.price - a.price);
  } else if (sortValue === "lowHigh") {
    return filteredData.sort((a, b) => a.price - b.price);
  }
};

export const filterCategory = (event, subcategory, items) => {
  const choosenItem = event.target.value.toLowerCase();
  const isValueIn = subcategory.indexOf(choosenItem);
  let newCat = subcategory;
  isValueIn === -1 ? newCat.push(choosenItem) : newCat.splice(isValueIn, 1);

  const filteredData = newCat.length
    ? items.filter(
        (item) => newCat.indexOf(item.subCategory.toLowerCase()) !== -1
      )
    : items;
  return [newCat, filteredData];
};

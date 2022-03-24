export const getPageArray = ({ pagination }) => {
  const { page, pageCount, pageSize } = pagination;
  const pageNumber = [];
  let pageArray = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumber.push(i);
  }

  if (page < 5) {
    pageArray = pageNumber.slice(0, 5);
  } else {
    pageArray = pageNumber.slice((page - 3) * pageSize, (page + 2) * pageSize);
  }

  return pageArray;
};

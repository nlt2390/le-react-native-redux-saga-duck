export const sortObjects = ({ objects = {}, order = 'ASC', sortAttr }) => {
  const lessOrder = {
    ASC: -1,
    DESC: 1,
  };

  const greaterOrder = {
    ASC: 1,
    DESC: -1,
  };

  const sortedObjects = [...objects];
  sortedObjects.sort((a, b) => {
    if (a[sortAttr] < b[sortAttr]) {
      return lessOrder[order];
    }
    if (a[sortAttr] > b[sortAttr]) {
      return greaterOrder[order];
    }
    return 0;
  });

  return sortedObjects;
};

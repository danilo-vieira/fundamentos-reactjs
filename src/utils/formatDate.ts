const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);

  const day = parsedDate.getUTCDate();
  const month = parsedDate.getUTCMonth();
  const year = parsedDate.getUTCFullYear();

  let testD = 0;
  let testM = 0;

  if (day < 10) {
    testD = 1;
  }

  if (month < 10) {
    testM = 1;
  }

  let finalDate = '';

  if (testD !== 0 && testM !== 0) {
    finalDate = `0${day}/0${month}/${year}`;
  }
  if (testD !== 0 && testM === 0) {
    finalDate = `0${day}/${month}/${year}`;
  }
  if (testD === 0 && testM !== 0) {
    finalDate = `${day}/0${month}/${year}`;
  } else {
    finalDate = `${day}/${month}/${year}`;
  }

  return finalDate;
};

export default formatDate;

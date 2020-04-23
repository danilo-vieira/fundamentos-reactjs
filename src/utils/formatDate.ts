const formatDate = (date: Date): string => {
  const parsedDate = new Date(date).toLocaleDateString('pt-BR');

  return parsedDate;
};

export default formatDate;

const formatDate = (date: Date): string =>
  new Date(date).toLocaleDateString('pt-BR');

export default formatDate;

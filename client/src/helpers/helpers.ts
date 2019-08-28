import moment from 'moment';

const removeBlankValues = (arr: Array<string>): Array<string> => {
  return arr.filter((x: string) => x.trim().length > 0);
};

const formatDate = (dateString: Date | null): string => {
  if (dateString) {
    return moment(dateString).format('MMMM Do YYYY');
  }
  return '';
};

export { formatDate, removeBlankValues };

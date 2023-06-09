export const addZero = (digit) => `${String(digit).length === 2 ? digit : '0' + digit}`;

export const formatDate = (dateObj) => {
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString(undefined, { month: 'short' });
  const year = dateObj.getFullYear();
  return `${addZero(day)} ${month}, ${year}`;
}
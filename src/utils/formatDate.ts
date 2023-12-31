export function formatDate(dataOriginal) {
  const data = new Date(dataOriginal);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

export const abbreviateDayOfWeek = (dayOfWeek) => {
  return dayOfWeek.slice(0, 3); 
};

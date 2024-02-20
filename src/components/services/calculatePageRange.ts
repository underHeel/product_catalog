export function calculatePageRange(
  currentPage: number,
  totalPages: number,
  displayCount: number,
) {
  let start = currentPage - displayCount / 2;
  const end = currentPage + displayCount / 2;

  if (end > totalPages) {
    start -= end - totalPages;
  }

  return [start, end];
}

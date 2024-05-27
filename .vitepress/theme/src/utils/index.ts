export function getTimeNum(date: { frontmatter: { date: string } }) {
  return new Date(date.frontmatter.date).getTime();
}

export function compareDate(
  a: {
    frontmatter: { date: string };
  },
  b: { frontmatter: { date: string } }
) {
  return getTimeNum(b) - getTimeNum(a);
}

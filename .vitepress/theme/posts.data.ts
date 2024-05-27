import { createContentLoader } from "vitepress";
import { compareDate } from "./src/utils";

interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  tags: string[];
  description: string;
  image: string | undefined;
  excerpt: string | undefined;
}

declare const data: Post[];
export { data };

export default createContentLoader("/**/*.md", {
  excerpt: true,
  transform(raw): Post[] {
    console.log(raw[0]);
    return (
      raw
        .filter((data) => data.frontmatter.isBlog !== true)
        // @ts-ignore
        .sort(compareDate)
        .map(({ url, frontmatter, excerpt }) => {
          const metaImage = frontmatter.meta.find((item: any) =>
            item.name.includes("image")
          )?.content;
          const image = frontmatter.image || metaImage;
          return {
            title: frontmatter.title,
            url,
            tags: frontmatter.tags,
            excerpt,
            image,
            description: frontmatter.description,
            date: formatDate(frontmatter.date),
          };
        })
    );
  },
});

function formatDate(raw: string): Post["date"] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

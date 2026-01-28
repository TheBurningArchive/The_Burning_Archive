import React from "react";
import Link from "next/link";

// Dati di esempio; in futuro potrai sostituirli con fetch da database o CMS
const articles = [
  {
    id: 1,
    title: "History of Cinema",
    date: "2025-12-10",
    category: "Cinema",
    readTime: "5 min",
    slug: "history-of-cinema"
  },
  {
    id: 2,
    title: "Philosophy Today",
    date: "2025-12-09",
    category: "Philosophy",
    readTime: "7 min",
    slug: "philosophy-today"
  }
];

export default function Articles() {
  return (
    <div className="container">
      <h1>Articles</h1>
      {articles.map(article => (
        <div key={article.id} className="article-preview">
          <h2>
            <Link href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </h2>
          <p>
            {article.date} | {article.category} | {article.readTime} read
          </p>
        </div>
      ))}
    </div>
  );
}

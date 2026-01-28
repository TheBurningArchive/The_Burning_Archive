import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export default function Post({ frontmatter, content }) {
  return (
    <div className="container">
      <header><h1>{frontmatter.title}</h1></header>
      <p>{frontmatter.date} | Category: {frontmatter.category} | Read: {frontmatter.readTime} min</p>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/posts'))
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('content/posts', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  const processedContent = await remark().use(html).process(content)
  return {
    props: {
      frontmatter,
      content: processedContent.toString()
    }
  }
}

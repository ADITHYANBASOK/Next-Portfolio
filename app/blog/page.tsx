import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const blogPosts = [
  {
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to set up a new Next.js 13 project and explore its new features.",
    date: "2023-05-15",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs-13"
  },
  {
    title: "Building Scalable APIs with GraphQL",
    excerpt: "Discover the benefits of GraphQL and how to implement it in your next project.",
    date: "2023-04-22",
    tags: ["GraphQL", "API", "Backend"],
    slug: "building-scalable-apis-with-graphql"
  },
  {
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to using CSS Grid for complex layouts.",
    date: "2023-03-10",
    tags: ["CSS", "Web Design", "Frontend"],
    slug: "mastering-css-grid-layout"
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
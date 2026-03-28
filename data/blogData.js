const blogData = [
  {
    id: 1,
    title: "Maximizing Space: A Guide to Efficient Junk Removal",
    category: "Junk Removal",
    description:
      "Discover tips and tricks for maximizing your space with our expert junk removal services. Learn how to declutter your home or office efficiently and effectively.",
    image: "assets/imgs/page/blog-single/b1.png",
    author: "BinBear",
    date: "2023-09-18",
    tags: ["Junk Removal", "Decluttering", "Home Organization"],
  },
  {
    id: 2,
    title: "Storage Unit Cleanouts",
    category: "Junk Removal",
    description:
      "<p>When a tenant of a storage unit facility defaults on their rent, the owner of the facility has the right to auction off the contents of a unit to the highest bidder, who often buys whatever lies behind the metal door sight unseen.</p>\\n" +
      "<p>But more often, the storage facility owner or manager is left with the task of clearing out the abandoned units in order to put them back on the market. An occupied, though abandoned, storage unit represents a loss of revenue for the facility owners.</p>",
    image: "assets/imgs/page/blog-single/b2.png",
    author: "BinBear",
    date: "2023-09-16",
    tags: ["Storage", "Cleanouts"],
  },
  {
    id: 3,
    title: "The Benefits of Professional Junk Removal",
    category: "Junk Removal",
    description:
      "<p>If you have an abandoned storage unit that needs to be cleared out, BinBear can be a huge asset. We are an experienced and dependable junk removal company that can help you get your unit back on the market quickly.</p>",
    image: "assets/imgs/page/blog-single/b3.png",
    author: "BinBear",
    date: "2023-09-15",
    tags: ["Junk Removal", "Professional Services"],
  },
]

const slugify = title =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

const normalizedBlogData = blogData.map(post => ({
  ...post,
  slug: post.slug ?? `blog-${post.id}-${slugify(post.title)}`,
  content: post.content ?? post.description,
}))

export const featuredArticle = normalizedBlogData[0] ?? null
export const recentArticles = normalizedBlogData.slice(1, 4)
export const topicsData = normalizedBlogData

export const getBlogBySlug = slug => {
  if (!slug) {
    return null
  }

  const idMatch = slug.match(/^blog-(\d+)/)

  if (idMatch) {
    const id = Number(idMatch[1])
    return normalizedBlogData.find(post => post.id === id) ?? null
  }

  return normalizedBlogData.find(post => post.slug === slug) ?? null
}

export default normalizedBlogData

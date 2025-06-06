import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Clock, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types';

// Mock data - in real app, this would come from API/database
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    slug: 'building-scalable-react-applications-typescript',
    excerpt: 'Learn how to build maintainable and scalable React applications using TypeScript, focusing on best practices and advanced patterns.',
    content: '',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    author: 'John Doe',
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['React', 'TypeScript', 'Frontend'],
    featured: true
  },
  {
    id: 2,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    slug: 'future-web-development-trends-2024',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to new frameworks and tools.',
    content: '',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    author: 'John Doe',
    publishedAt: '2024-01-10',
    readTime: 12,
    tags: ['Web Development', 'Trends', 'AI'],
    featured: true
  },
  {
    id: 3,
    title: 'Mastering CSS Grid: A Complete Guide',
    slug: 'mastering-css-grid-complete-guide',
    excerpt: 'A comprehensive guide to CSS Grid layout system, with practical examples and real-world use cases.',
    content: '',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    author: 'John Doe',
    publishedAt: '2024-01-05',
    readTime: 10,
    tags: ['CSS', 'Frontend', 'Layout'],
    featured: false
  },
  {
    id: 4,
    title: 'Building RESTful APIs with Node.js and Express',
    slug: 'building-restful-apis-nodejs-express',
    excerpt: 'Learn how to create robust and scalable RESTful APIs using Node.js and Express, with authentication and best practices.',
    content: '',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    author: 'John Doe',
    publishedAt: '2023-12-28',
    readTime: 15,
    tags: ['Node.js', 'Backend', 'API'],
    featured: false
  },
  {
    id: 5,
    title: 'Database Design Principles for Modern Applications',
    slug: 'database-design-principles-modern-applications',
    excerpt: 'Essential database design principles and patterns for building efficient and scalable modern applications.',
    content: '',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
    author: 'John Doe',
    publishedAt: '2023-12-20',
    readTime: 18,
    tags: ['Database', 'Design', 'Backend'],
    featured: false
  },
  {
    id: 6,
    title: 'Introduction to GraphQL: Beyond REST APIs',
    slug: 'introduction-graphql-beyond-rest-apis',
    excerpt: 'Discover the power of GraphQL and how it can improve your API design and data fetching strategies.',
    content: '',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    author: 'John Doe',
    publishedAt: '2023-12-15',
    readTime: 14,
    tags: ['GraphQL', 'API', 'Backend'],
    featured: true
  }
];

const allTags = Array.from(new Set(mockPosts.flatMap(post => post.tags)));

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const otherPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology, and design.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="sm:w-48">
              <SelectValue placeholder="Select tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Tags</SelectItem>
              {allTags.map(tag => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} featured />
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              {featuredPosts.length > 0 ? 'Latest Posts' : 'All Posts'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <p className="text-xl text-muted-foreground">No posts found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function BlogCard({ post, index, featured = false }: { 
  post: BlogPost; 
  index: number; 
  featured?: boolean; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={featured ? 'md:col-span-1' : ''}
    >
      <Link to={`/blog/${post.slug}`}>
        <Card className="h-full overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                featured ? 'h-56' : 'h-48'
              }`}
            />
            {featured && (
              <Badge className="absolute top-3 left-3">Featured</Badge>
            )}
          </div>
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className={`font-bold group-hover:text-primary transition-colors ${
              featured ? 'text-xl' : 'text-lg'
            }`}>
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {post.excerpt}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
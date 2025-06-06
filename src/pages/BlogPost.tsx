import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types';

// Mock data - in real app, this would come from API/database
const mockPost: BlogPost = {
  id: 1,
  title: 'Building Scalable React Applications with TypeScript',
  slug: 'building-scalable-react-applications-typescript',
  excerpt: 'Learn how to build maintainable and scalable React applications using TypeScript, focusing on best practices and advanced patterns.',
  content: `
    <h2>Introduction</h2>
    <p>TypeScript has become an essential tool for building large-scale React applications. In this comprehensive guide, we'll explore the best practices and patterns that will help you build maintainable and scalable applications.</p>
    
    <h2>Setting Up Your Project</h2>
    <p>When starting a new React project with TypeScript, it's important to set up your development environment correctly. Here are the key steps:</p>
    
    <h3>1. Project Initialization</h3>
    <p>Use Create React App with TypeScript template or Vite for faster development:</p>
    
    <pre><code>npx create-react-app my-app --template typescript
# or
npm create vite@latest my-app -- --template react-ts</code></pre>
    
    <h3>2. Configure TypeScript</h3>
    <p>Ensure your tsconfig.json is properly configured for strict type checking:</p>
    
    <pre><code>{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true
  }
}</code></pre>
    
    <h2>Component Architecture</h2>
    <p>Proper component architecture is crucial for scalability. Here are some key principles:</p>
    
    <h3>Type-Safe Props</h3>
    <p>Always define clear interfaces for your component props:</p>
    
    <pre><code>interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant, 
  size, 
  onClick, 
  disabled, 
  children 
}) => {
  // Component implementation
};</code></pre>
    
    <h3>Custom Hooks</h3>
    <p>Extract reusable logic into custom hooks with proper typing:</p>
    
    <pre><code>interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Implementation
  
  return { data, loading, error };
}</code></pre>
    
    <h2>State Management</h2>
    <p>For complex applications, proper state management is essential. TypeScript provides excellent support for type-safe state management.</p>
    
    <h3>Context API with TypeScript</h3>
    <p>Create type-safe context providers:</p>
    
    <pre><code>interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};</code></pre>
    
    <h2>Performance Optimization</h2>
    <p>TypeScript can help you write more performant React applications through better type checking and IDE support.</p>
    
    <h3>Memoization</h3>
    <p>Use React.memo, useMemo, and useCallback with proper typing:</p>
    
    <pre><code>interface ExpensiveComponentProps {
  data: DataType[];
  onItemClick: (id: string) => void;
}

const ExpensiveComponent = React.memo<ExpensiveComponentProps>(({ 
  data, 
  onItemClick 
}) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: true
    }));
  }, [data]);
  
  const handleClick = useCallback((id: string) => {
    onItemClick(id);
  }, [onItemClick]);
  
  return (
    // Component JSX
  );
});</code></pre>
    
    <h2>Testing</h2>
    <p>TypeScript makes testing easier by providing compile-time checks for your test code:</p>
    
    <pre><code>import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
  it('calls onClick handler when clicked', async () => {
    const mockOnClick = jest.fn();
    const user = userEvent.setup();
    
    render(
      <Button variant="primary" size="md" onClick={mockOnClick}>
        Click me
      </Button>
    );
    
    await user.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});</code></pre>
    
    <h2>Conclusion</h2>
    <p>Building scalable React applications with TypeScript requires attention to proper typing, component architecture, and performance considerations. By following these best practices, you'll create applications that are maintainable, reliable, and easy to work with as your team grows.</p>
    
    <p>Remember that TypeScript is a tool that grows with your application. Start with basic typing and gradually adopt more advanced patterns as your codebase evolves.</p>
  `,
  image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
  author: 'John Doe',
  publishedAt: '2024-01-15',
  readTime: 8,
  tags: ['React', 'TypeScript', 'Frontend'],
  featured: true
};

export default function BlogPostPage() {
  const { slug } = useParams();
  
  // In a real app, you would fetch the post based on the slug
  const post = mockPost;

  if (!post) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button asChild variant="ghost">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-lg max-w-none dark:prose-invert"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 not-prose">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-4 w-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <div className="mb-8 not-prose">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div 
            className="prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Found this article helpful?</h3>
              <p className="text-muted-foreground">Share it with others who might benefit from it.</p>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <Button variant="outline" size="sm">
                Share on Twitter
              </Button>
              <Button variant="outline" size="sm">
                Share on LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t"
        >
          <div className="flex justify-between">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                More Articles
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
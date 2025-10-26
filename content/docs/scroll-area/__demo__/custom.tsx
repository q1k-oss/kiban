import { ScrollArea, ScrollBar } from 'ethereal-ui';

export default () => (
  <div className="space-y-8">
    {/* Code Block Style */}
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Code Block Style</h4>
      <ScrollArea className="h-72 w-full rounded-md bg-black p-4 text-white">
        <pre className="font-mono text-sm">
          <code>{`// Example TypeScript code
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}</code>
        </pre>
        <ScrollBar 
          className="w-1.5 bg-white/10 hover:bg-white/20" 
          orientation="vertical"
        />
        <ScrollBar 
          className="h-1.5 bg-white/10 hover:bg-white/20" 
          orientation="horizontal"
        />
      </ScrollArea>
    </div>

    {/* Colorful Style */}
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Colorful Style</h4>
      <ScrollArea className="h-40 w-full rounded-md border border-primary/20 bg-primary/5">
        <div className="p-4 space-y-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="h-6 rounded-md bg-primary/10 animate-pulse" style={{ 
              width: `${Math.max(50, Math.floor(Math.random() * 100))}%`,
              animationDelay: `${i * 100}ms`
            }} />
          ))}
        </div>
        <ScrollBar 
          className="w-2 bg-transparent p-[3px]" 
          orientation="vertical"
        >
          <div className="h-full w-full rounded-full bg-primary/50" />
        </ScrollBar>
      </ScrollArea>
    </div>
  </div>
) 
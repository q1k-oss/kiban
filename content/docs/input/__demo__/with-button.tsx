import { Search, Send } from 'lucide-react';

import { Input, Button } from 'ethereal-ui';

export default () => (
  <div className="flex flex-col gap-4">
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit">
        Search
      </Button>
    </div>
    
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." className="rounded-r-none" />
      <Button type="submit" className="rounded-l-none">
        <Search className="h-4 w-4" />
      </Button>
    </div>
    
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" className="rounded-r-none" />
      <Button type="submit" className="rounded-l-none" variant="secondary">
        Subscribe
      </Button>
    </div>
    
    <div className="relative w-full max-w-sm">
      <Input type="text" placeholder="Send a message..." className="pr-12" />
      <Button 
        type="submit" 
        size="icon" 
        className="absolute right-1 top-1 h-7 w-7"
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
  </div>
) 
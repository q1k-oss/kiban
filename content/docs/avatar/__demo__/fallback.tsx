import { User } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'ethereal-ui';

export default () => (
  <div className="flex items-center gap-4">
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarFallback className="bg-secondary text-secondary-foreground">CD</AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarFallback className="bg-destructive text-destructive-foreground">EF</AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarFallback>
        <User className="h-5 w-5" />
      </AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarImage src="https://example.com/broken-image.jpg" alt="Broken image" />
      <AvatarFallback>404</AvatarFallback>
    </Avatar>
  </div>
) 
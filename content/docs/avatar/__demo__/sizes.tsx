import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'ethereal-ui';

export default () => (
  <div className="flex items-center gap-4">
    <Avatar className="h-6 w-6">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-xs">XS</AvatarFallback>
    </Avatar>
    
    <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-xs">SM</AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>
    
    <Avatar className="h-14 w-14">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-lg">LG</AvatarFallback>
    </Avatar>
    
    <Avatar className="h-20 w-20">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-xl">XL</AvatarFallback>
    </Avatar>
  </div>
) 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'ethereal-ui';

export default () => (
  <div className="flex items-center gap-4">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarImage src="https://github.com/colinhacks.png" alt="@colinhacks" />
      <AvatarFallback>CH</AvatarFallback>
    </Avatar>
    
    <Avatar>
      <AvatarImage src="https://github.com/theprimeagen.png" alt="@theprimeagen" />
      <AvatarFallback>TP</AvatarFallback>
    </Avatar>
  </div>
) 
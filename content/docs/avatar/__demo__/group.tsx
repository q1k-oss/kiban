import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'ethereal-ui';

export default () => (
  <div className="flex flex-col gap-6">
    {/* Basic avatar group with overlap */}
    <div className="flex -space-x-4">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/colinhacks.png" alt="@colinhacks" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/theprimeagen.png" alt="@theprimeagen" />
        <AvatarFallback>TP</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-muted">+3</AvatarFallback>
      </Avatar>
    </div>

    {/* Stacked avatar group */}
    <div className="flex flex-col items-center space-y-1">
      <div className="flex -space-x-2">
        <Avatar className="ring-2 ring-background">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <AvatarImage src="https://github.com/colinhacks.png" alt="@colinhacks" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <AvatarImage src="https://github.com/theprimeagen.png" alt="@theprimeagen" />
          <AvatarFallback>TP</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-sm text-muted-foreground">Project Team</span>
    </div>
  </div>
) 
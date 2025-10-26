import { Badge } from 'ethereal-ui';

export default () => (
  <div className="flex flex-wrap gap-2">
    <Badge className="bg-blue-500 hover:bg-blue-600">Blue</Badge>
    <Badge className="bg-amber-500 text-amber-950 hover:bg-amber-600">Amber</Badge>
    <Badge className="bg-emerald-500 hover:bg-emerald-600">Green</Badge>
    <Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>
    
    <Badge className="rounded-full">Rounded</Badge>
    <Badge className="rounded-sm">Square</Badge>
    
    <Badge className="px-5 py-1.5 text-sm font-bold">Large</Badge>
    <Badge className="px-1.5 py-0 text-[10px]">Tiny</Badge>
    
    <Badge className="border-2 border-primary bg-background text-primary hover:bg-primary/10">
      Outlined
    </Badge>
    
    <Badge className="animate-pulse bg-gradient-to-r from-pink-500 to-purple-500">
      Gradient
    </Badge>
  </div>
) 
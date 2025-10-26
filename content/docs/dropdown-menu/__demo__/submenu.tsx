import { 
  Menu, 
  File, 
  Copy, 
  Archive, 
  Trash, 
  Share, 
  UserPlus, 
  FileUp, 
  FileDown, 
  FilePlus, 
  FileText, 
  FileX 
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Button,
} from 'ethereal-ui';

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="flex items-center gap-2">
        <Menu className="h-4 w-4" />
        File Menu
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-64">
      <DropdownMenuLabel>File Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <File className="mr-2 h-4 w-4" />
        <span>New File</span>
        <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <FilePlus className="mr-2 h-4 w-4" />
          <span>New From Template</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-48">
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Document</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Spreadsheet</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Presentation</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FileText className="mr-2 h-4 w-4" />
              <span>Developer Templates</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>React Component</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>API Endpoint</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Database Schema</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        <span>Make a Copy</span>
        <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Share className="mr-2 h-4 w-4" />
          <span>Share</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-48">
          <DropdownMenuItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite Users</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileUp className="mr-2 h-4 w-4" />
            <span>Upload to Cloud</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileDown className="mr-2 h-4 w-4" />
            <span>Download</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Archive className="mr-2 h-4 w-4" />
        <span>Archive</span>
        <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-red-500 focus:text-red-500">
        <Trash className="mr-2 h-4 w-4" />
        <span>Delete</span>
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
) 
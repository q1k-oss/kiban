import { Folder, File, FileText, Image, Video, Package, Link } from 'lucide-react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextMenuLabel,
} from 'ethereal-ui';

export default () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-60 w-full items-center justify-center rounded-md border border-dashed text-sm">
      <div className="flex flex-col items-center gap-2">
        <Folder className="h-10 w-10 text-muted-foreground" />
        <span>Projects Folder</span>
        <span className="text-xs text-muted-foreground">Right click to view options</span>
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuItem>
        <Folder className="mr-2 h-4 w-4" />
        Open Folder
      </ContextMenuItem>
      <ContextMenuItem>
        <FileText className="mr-2 h-4 w-4" />
        New File
        <ContextMenuShortcut>⌘N</ContextMenuShortcut>
      </ContextMenuItem>
      
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <File className="mr-2 h-4 w-4" />
          New Item
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuLabel>Create New</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            Text Document
          </ContextMenuItem>
          <ContextMenuItem>
            <Image className="mr-2 h-4 w-4" />
            Image
          </ContextMenuItem>
          <ContextMenuItem>
            <Video className="mr-2 h-4 w-4" />
            Video
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Package className="mr-2 h-4 w-4" />
              Advanced
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Project Template
              </ContextMenuItem>
              <ContextMenuItem>
                Database Schema
              </ContextMenuItem>
              <ContextMenuItem>
                Configuration File
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuSubContent>
      </ContextMenuSub>
      
      <ContextMenuSeparator />
      
      <ContextMenuItem>
        <Link className="mr-2 h-4 w-4" />
        Create Shortcut
        <ContextMenuShortcut>⌘⇧N</ContextMenuShortcut>
      </ContextMenuItem>
      
      <ContextMenuSeparator />
      
      <ContextMenuItem>
        Properties
        <ContextMenuShortcut>⌘I</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
) 
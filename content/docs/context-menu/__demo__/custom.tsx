'use client'

import { Edit, Copy, Trash, Share, Download, Heart, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  ContextMenuLabel,
  Button,
} from 'ethereal-ui';

export default () => {
  const [liked, setLiked] = useState(false);
  
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-80 w-full flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 p-6 text-white shadow-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold">Beautiful Sunset</h3>
          <p className="mt-1 text-sm text-white/80">Photo by John Doe</p>
          <div className="mt-4 flex justify-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              onClick={(e) => {
                e.preventDefault();
                setLiked(!liked);
              }}
            >
              <Heart className={`mr-1 h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <Share className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
        <div className="mt-2 text-center text-sm text-white/70">
          Right click to view more options
        </div>
      </ContextMenuTrigger>
      
      <ContextMenuContent className="w-64 overflow-hidden rounded-xl border-none bg-white/90 backdrop-blur-lg shadow-xl">
        <ContextMenuLabel className="px-4 pt-4 pb-2 text-base font-semibold text-gray-800">
          Image Options
        </ContextMenuLabel>
        
        <div className="grid grid-cols-4 gap-2 p-2">
          <ContextMenuItem className="flex h-16 flex-col items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-800">
            <Edit className="h-5 w-5 text-blue-500" />
            <span className="mt-1 text-xs">Edit</span>
          </ContextMenuItem>
          
          <ContextMenuItem className="flex h-16 flex-col items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-800">
            <Copy className="h-5 w-5 text-violet-500" />
            <span className="mt-1 text-xs">Copy</span>
          </ContextMenuItem>
          
          <ContextMenuItem className="flex h-16 flex-col items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-800">
            <Share className="h-5 w-5 text-green-500" />
            <span className="mt-1 text-xs">Share</span>
          </ContextMenuItem>
          
          <ContextMenuItem className="flex h-16 flex-col items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-800">
            <Download className="h-5 w-5 text-amber-500" />
            <span className="mt-1 text-xs">Download</span>
          </ContextMenuItem>
        </div>
        
        <ContextMenuSeparator className="my-1 opacity-30" />
        
        <ContextMenuItem className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-800">
          <MoreHorizontal className="mr-2 h-4 w-4 text-gray-500" />
          <span>More Options</span>
        </ContextMenuItem>
        
        <ContextMenuItem className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 focus:bg-red-50 focus:text-red-600">
          <Trash className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
} 
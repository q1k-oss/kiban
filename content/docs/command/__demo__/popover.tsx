'use client'

import { Search } from 'lucide-react';
import { useState } from 'react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from 'ethereal-ui';

// Sample data
const actions = [
  {
    category: 'Navigation',
    items: [
      { id: 'home', name: 'Go to Home', shortcut: '⌘ H', keywords: ['homepage', 'main', 'dashboard'] },
      { id: 'settings', name: 'Open Settings', shortcut: '⌘ S', keywords: ['preferences', 'config', 'options'] },
      { id: 'profile', name: 'View Profile', shortcut: '⌘ P', keywords: ['account', 'user', 'me'] },
    ],
  },
  {
    category: 'Actions',
    items: [
      { id: 'new', name: 'Create New Document', shortcut: '⌘ N', keywords: ['file', 'add', 'create'] },
      { id: 'save', name: 'Save Changes', shortcut: '⌘ S', keywords: ['update', 'store'] },
      { id: 'export', name: 'Export File', shortcut: '⌘ E', keywords: ['download', 'extract'] },
      { id: 'share', name: 'Share Document', shortcut: '⌘ ⇧ S', keywords: ['collaborate', 'send'] },
    ],
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Fuzzy search function
  const matchesSearch = (item: any) => {
    const searchLower = search.toLowerCase();
    if (!searchLower) return true;
    
    if (item.name.toLowerCase().includes(searchLower)) return true;
    
    return item.keywords.some((keyword: string) => 
      keyword.toLowerCase().includes(searchLower)
    );
  };

  return (
    <div className="flex justify-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 w-60">
            <Search className="h-4 w-4" />
            <span>Search actions...</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96 p-0" align="start">
          <Command className="rounded-lg border shadow-md">
            <CommandInput 
              placeholder="Search actions..."
              value={search}
              onValueChange={setSearch}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              
              {actions.map((group) => {
                const filteredItems = group.items.filter(matchesSearch);
                
                if (filteredItems.length === 0) return null;
                
                return (
                  <CommandGroup key={group.category} heading={group.category}>
                    {filteredItems.map((item) => (
                      <CommandItem 
                        key={item.id} 
                        value={item.id}
                        onSelect={() => {
                          console.log(`Selected: ${item.name}`);
                          setOpen(false);
                        }}
                      >
                        <span>{item.name}</span>
                        <span className="ml-auto text-xs text-muted-foreground">
                          {item.shortcut}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                );
              })}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
} 
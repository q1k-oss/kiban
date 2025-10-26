'use client'

import { Sliders } from 'lucide-react';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
} from 'ethereal-ui';

type Preference = {
  id: string;
  title: string;
  enabled: boolean;
};

export default () => {
  const [preferences, setPreferences] = useState<Preference[]>([
    { id: 'notifications', title: 'Email Notifications', enabled: true },
    { id: 'updates', title: 'Product Updates', enabled: true },
    { id: 'offers', title: 'Special Offers', enabled: false },
    { id: 'newsletter', title: 'Weekly Newsletter', enabled: false },
  ]);

  const togglePreference = (id: string) => {
    setPreferences(
      preferences.map((pref) =>
        pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
      )
    );
  };

  const activeCount = preferences.filter((pref) => pref.enabled).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Sliders className="h-4 w-4" />
          Preferences
          {activeCount > 0 && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Communication Preferences</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {preferences.map((pref) => (
          <DropdownMenuCheckboxItem
            key={pref.id}
            checked={pref.enabled}
            onCheckedChange={() => togglePreference(pref.id)}
          >
            {pref.title}
          </DropdownMenuCheckboxItem>
        ))}
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5 text-xs text-muted-foreground">
          You have {activeCount} active {activeCount === 1 ? 'notification' : 'notifications'}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
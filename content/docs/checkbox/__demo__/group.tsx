'use client'

import { useState } from 'react';

import { Checkbox } from 'ethereal-ui';

export default () => {
  const [selected, setSelected] = useState<string[]>([]);

  const items = [
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    { id: 'svelte', label: 'Svelte' },
    { id: 'angular', label: 'Angular' },
    { id: 'solid', label: 'Solid' },
  ];

  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <label className="text-sm font-medium">
          Which frontend frameworks have you used?
        </label>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox 
                id={item.id} 
                checked={selected.includes(item.id)}
                onCheckedChange={() => handleToggle(item.id)}
              />
              <label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Selected: {selected.length ? selected.map(id => {
          const item = items.find(i => i.id === id);
          return item?.label;
        }).join(', ') : 'None'}
      </div>
    </div>
  );
} 
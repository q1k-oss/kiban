'use client'

import { Volume, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

import { Slider } from 'ethereal-ui';

export default () => {
  const [volume, setVolume] = useState([50]);
  const [brightness, setBrightness] = useState([75]);
  
  // Function to get the appropriate volume icon based on the value
  const getVolumeIcon = (value: number) => {
    if (value === 0) return <VolumeX className="h-5 w-5 text-muted-foreground" />;
    if (value <= 50) return <Volume className="h-5 w-5 text-primary" />;
    return <Volume2 className="h-5 w-5 text-primary" />;
  };
  
  return (
    <div className="space-y-8">
      {/* Volume Slider with Icon */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Volume</label>
          <span className="text-sm font-medium">{volume}%</span>
        </div>
        <div className="flex items-center gap-3">
          {getVolumeIcon(volume[0])}
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            value={volume}
            onValueChange={setVolume}
            className="flex-1"
          />
        </div>
      </div>
      
      {/* Brightness Slider with Custom Colors */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Brightness</label>
          <span className="text-sm font-medium">{brightness}%</span>
        </div>
        <Slider
          defaultValue={[75]}
          max={100}
          step={1}
          value={brightness}
          onValueChange={setBrightness}
          className="w-full data-[state=active]:bg-amber-500"
        />
      </div>
      
      {/* Discrete Steps with Labels */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Temperature</label>
        <Slider
          defaultValue={[2]}
          min={0}
          max={4}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Cold</span>
          <span>Cool</span>
          <span>Normal</span>
          <span>Warm</span>
          <span>Hot</span>
        </div>
      </div>
    </div>
  );
} 
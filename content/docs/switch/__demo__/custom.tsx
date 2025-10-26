'use client'

import { Moon, Sun, Zap, Volume2, VolumeX, Wifi, WifiOff } from 'lucide-react';
import { useState } from 'react';

import { Switch } from 'ethereal-ui';

export default () => {
  const [theme, setTheme] = useState(false);
  const [sound, setSound] = useState(true);
  const [wifi, setWifi] = useState(true);
  const [powerSaver, setPowerSaver] = useState(false);
  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {theme ? (
            <Moon className="h-5 w-5 text-indigo-500" />
          ) : (
            <Sun className="h-5 w-5 text-amber-500" />
          )}
          <label 
            htmlFor="theme-mode" 
            className="text-sm font-medium leading-none"
          >
            {theme ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
        <Switch 
          id="theme-mode"
          checked={theme} 
          onCheckedChange={setTheme}
          className="data-[state=checked]:bg-indigo-500 data-[state=unchecked]:bg-amber-500"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {sound ? (
            <Volume2 className="h-5 w-5 text-green-500" />
          ) : (
            <VolumeX className="h-5 w-5 text-red-500" />
          )}
          <label 
            htmlFor="sound-toggle" 
            className="text-sm font-medium leading-none"
          >
            Sound
          </label>
        </div>
        <Switch 
          id="sound-toggle"
          checked={sound} 
          onCheckedChange={setSound}
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {wifi ? (
            <Wifi className="h-5 w-5 text-blue-500" />
          ) : (
            <WifiOff className="h-5 w-5 text-gray-500" />
          )}
          <label 
            htmlFor="wifi-toggle" 
            className="text-sm font-medium leading-none"
          >
            Wi-Fi
          </label>
        </div>
        <Switch 
          id="wifi-toggle"
          checked={wifi} 
          onCheckedChange={setWifi}
          className="data-[state=checked]:bg-blue-500"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className={`h-5 w-5 ${powerSaver ? 'text-yellow-500' : 'text-gray-500'}`} />
          <div>
            <label 
              htmlFor="power-saver" 
              className="text-sm font-medium leading-none"
            >
              Power Saver
            </label>
            <p className="text-xs text-muted-foreground mt-1">
              Reduces performance to extend battery life
            </p>
          </div>
        </div>
        <Switch 
          id="power-saver"
          checked={powerSaver} 
          onCheckedChange={setPowerSaver}
          className="h-6 w-11 data-[state=checked]:bg-yellow-500 data-[state=unchecked]:bg-gray-300"
        />
      </div>
    </div>
  );
} 
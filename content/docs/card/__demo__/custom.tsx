import { Sparkles, Shield, Zap, Settings } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "ethereal-ui";

export default function CardCustomDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Gradient Border Card */}
      <Card className="relative overflow-hidden border-none bg-card before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500">
        <CardHeader className="text-center">
          <Sparkles className="h-10 w-10 mx-auto text-purple-500" />
          <CardTitle className="mt-2">Premium Features</CardTitle>
          <CardDescription>Access exclusive premium features</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Priority support</li>
            <li>✓ Advanced analytics</li>
            <li>✓ Custom integrations</li>
            <li>✓ Team collaboration</li>
          </ul>
        </CardContent>
        <CardFooter className="justify-center">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
            Upgrade Now
          </Button>
        </CardFooter>
      </Card>
      
      {/* Glass Card */}
      <Card className="backdrop-blur-md bg-white/20 border-white/30 shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-500" />
            <CardTitle>Security Center</CardTitle>
          </div>
          <CardDescription>Manage your account security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Two-factor authentication</span>
            <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full">Enabled</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Password strength</span>
            <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-5/6 bg-green-500"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Login devices</span>
            <span className="text-xs text-muted-foreground">3 active</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Settings
          </Button>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Zap className="h-4 w-4 mr-1" />
            Scan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
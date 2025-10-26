import { BarChart3, Users, Settings, LayoutDashboard } from 'lucide-react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from 'ethereal-ui';

export default () => (
  <Tabs defaultValue="dashboard" className="w-full">
    <TabsList className="flex h-12 bg-muted/50 rounded-xl p-1">
      <TabsTrigger 
        value="dashboard" 
        className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <LayoutDashboard className="h-4 w-4" />
        <span className="hidden sm:inline">Dashboard</span>
      </TabsTrigger>
      <TabsTrigger 
        value="analytics" 
        className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <BarChart3 className="h-4 w-4" />
        <span className="hidden sm:inline">Analytics</span>
      </TabsTrigger>
      <TabsTrigger 
        value="users" 
        className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <Users className="h-4 w-4" />
        <span className="hidden sm:inline">Users</span>
      </TabsTrigger>
      <TabsTrigger 
        value="settings" 
        className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <Settings className="h-4 w-4" />
        <span className="hidden sm:inline">Settings</span>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="dashboard">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>View your project overview and key metrics.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm font-medium">Total Projects</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm font-medium">Active Tasks</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm font-medium">Team Members</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm font-medium">Completion</p>
              <p className="text-2xl font-bold">67%</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View Details</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="analytics">
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>View performance metrics and statistics.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-muted/50 rounded-lg flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Analytics charts would appear here</p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="users">
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage users and permissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-muted/50 rounded-lg flex items-center justify-center">
            <p className="text-sm text-muted-foreground">User management interface would appear here</p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="settings">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your app settings and preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-muted/50 rounded-lg flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Settings form would appear here</p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
) 
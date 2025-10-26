import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'ethereal-ui';

export default () => (
  <div className="flex flex-col sm:flex-row gap-4 w-full">
    <Tabs defaultValue="general" orientation="vertical" className="w-full">
      <TabsList className="flex flex-row sm:flex-col h-auto sm:h-auto sm:w-48 bg-muted/50 p-1 rounded-lg">
        <TabsTrigger 
          value="general" 
          className="w-full justify-start text-left px-3 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          General
        </TabsTrigger>
        <TabsTrigger 
          value="appearance" 
          className="w-full justify-start text-left px-3 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          Appearance
        </TabsTrigger>
        <TabsTrigger 
          value="notifications" 
          className="w-full justify-start text-left px-3 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          Notifications
        </TabsTrigger>
        <TabsTrigger 
          value="advanced" 
          className="w-full justify-start text-left px-3 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          Advanced
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 p-1">
        <TabsContent value="general" className="p-4 border rounded-lg mt-0 sm:mt-0">
          <h3 className="text-lg font-medium mb-2">General Settings</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Profile Information</p>
              <p className="text-sm text-muted-foreground">
                Update your basic profile information such as email address and name.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Language Preferences</p>
              <p className="text-sm text-muted-foreground">
                Choose your preferred language for the interface.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="appearance" className="p-4 border rounded-lg mt-0 sm:mt-0">
          <h3 className="text-lg font-medium mb-2">Appearance Settings</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Theme Selection</p>
              <p className="text-sm text-muted-foreground">
                Choose between light mode, dark mode, or system default.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Density Settings</p>
              <p className="text-sm text-muted-foreground">
                Adjust the density of the interface elements.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="p-4 border rounded-lg mt-0 sm:mt-0">
          <h3 className="text-lg font-medium mb-2">Notification Settings</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">
                Configure which email notifications you receive.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Push Notifications</p>
              <p className="text-sm text-muted-foreground">
                Manage push notifications for the mobile and desktop app.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="advanced" className="p-4 border rounded-lg mt-0 sm:mt-0">
          <h3 className="text-lg font-medium mb-2">Advanced Settings</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">API Access</p>
              <p className="text-sm text-muted-foreground">
                Manage API keys and access tokens.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Data Export</p>
              <p className="text-sm text-muted-foreground">
                Export all your data or specific portions.
              </p>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  </div>
) 
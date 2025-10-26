import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'ethereal-ui';

export default () => (
  <Tabs defaultValue="account" className="w-full">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account" className="p-4 border rounded-lg mt-2">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Account Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and set your email preferences.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="password" className="p-4 border rounded-lg mt-2">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Password Settings</h3>
        <p className="text-sm text-muted-foreground">
          Change your password and manage your account security preferences.
        </p>
      </div>
    </TabsContent>
  </Tabs>
) 
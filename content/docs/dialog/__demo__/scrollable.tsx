import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  Button,
} from 'ethereal-ui';

// Generate fake terms and conditions
const generateTerms = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Ethereal Garden. These Terms of Service govern your use of our platform and services. By accessing or using our services, you agree to be bound by these Terms."
    },
    {
      title: "2. Definitions",
      content: "Throughout these Terms, 'we', 'us', and 'our' refer to Ethereal Garden. 'Service' refers to the applications, website, content, and other services provided by Ethereal Garden. 'User', 'you', and 'your' refer to you, the person accessing or using the Service."
    },
    {
      title: "3. Account Registration",
      content: "To use certain features of the Service, you must register for an account. You must provide accurate and complete information and keep your account information updated. You are responsible for the security of your account and password. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation."
    },
    {
      title: "4. User Content",
      content: "Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness. You retain any ownership rights to content you submit, post or display on or through the Service."
    },
    {
      title: "5. Privacy Policy",
      content: "Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Service is subject to our Privacy Policy."
    },
    {
      title: "6. Termination",
      content: "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
    },
    {
      title: "7. Limitation Of Liability",
      content: "In no event shall Ethereal Garden, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
    },
    {
      title: "8. Changes",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
    }
  ];
  
  return sections.map(section => (
    <div key={section.title} className="mb-4">
      <h3 className="text-base font-semibold mb-2">{section.title}</h3>
      <p className="text-sm text-muted-foreground">{section.content}</p>
    </div>
  ));
};

export default () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Terms and Conditions</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[525px]">
      <DialogHeader>
        <DialogTitle>Terms of Service</DialogTitle>
        <DialogDescription>
          Please read these terms carefully before using our service.
        </DialogDescription>
      </DialogHeader>
      <div className="max-h-[60vh] overflow-y-auto pr-6 -mr-6">
        <div className="space-y-4 py-4 text-sm">
          {generateTerms()}
        </div>
      </div>
      <DialogFooter className="flex justify-between items-center border-t pt-4 mt-4">
        <div className="text-sm text-muted-foreground">
          Last updated: October 2023
        </div>
        <Button>Accept Terms</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
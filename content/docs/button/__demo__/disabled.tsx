import { Button } from 'ethereal-ui';

export default () => (
  <div className="flex flex-row gap-4 flex-wrap">
    <Button variant="default" disabled>
      Primary Button
    </Button>
    <Button variant="secondary" disabled>
      Secondary Button
    </Button>
    <Button variant="dashed" disabled>
      Dashed Button
    </Button>
    <Button variant="outline" disabled>
      Outline Button
    </Button>
    <Button variant="ghost" disabled>
      Ghost Button
    </Button>
    <Button variant="link" disabled>
      Link Button
    </Button>
    <Button variant="destructive" disabled>
      Destructive Button
    </Button>
  </div>
)
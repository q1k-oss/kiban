import { Button, cn } from '@happect/ethereal-ui';
import { ISingleBlogPromptProp } from '../types/type';

export const SingleBlogPrompt = ({
  blogPrompt,
  className,
}: ISingleBlogPromptProp) => {
  return (
    <div
      className={cn(
        'p-6 border border-[#F49D5699] rounded-md  font-dm-mono',
        className,
      )}
    >
      <p className="text-secondary-text text-sm font-medium   leading-6">
        {blogPrompt}
      </p>
      <div className="w-full flex items-center justify-end mt-4">
        <Button className="border border-border-3 bg-button-fill-3 text-xs h-fit w-fit hover:bg-button-fill-3 font-dm-mono">
          Build an Agent
        </Button>
      </div>
    </div>
  );
};

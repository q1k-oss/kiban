'use client';

import { ClipboardCopyIcon } from "lucide-react";
import { useCopyToClipboard } from 'usehooks-ts';

export const CopyToClipboard = ({
  text,
  getText,
}: {
  text?: string;
  getText?: () => Promise<string | undefined>;
}) => {
  const [_, copy] = useCopyToClipboard()

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  }

  const handleCopyDir = async () => {
    if (
      typeof text === 'string'
      && text?.length > 0
    ) {
      handleCopy(text)();
    } else if (
      typeof getText === 'function'
    ) {
      const text = await getText();
      handleCopy(text ?? '')();
    }
  }

  return (
    <button
      onClick={handleCopyDir}
      className='p-2 border rounded text-sm'
    >
      <ClipboardCopyIcon size={20} className='text-fd-primary'  />
    </button>
  );
}
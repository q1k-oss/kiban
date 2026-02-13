import React from 'react';

import {cn} from '../../../../../utils/cn'
import { AppIcon } from "../../../../app-icon";
import { HtmlRendererConfig } from '../type';

const CodeBlockRenderer: React.FC<{
  language: string;
  code: string;
  config?: HtmlRendererConfig['codeBlock'];
}> = ({ language, code, config }) => {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard write failed silently
    }
  };

  const lines: string[] = code.split('\n');

  return (
    <div className={cn('relative my-6', config?.wrapperClassName)}>
      {config?.showLanguage && language && (
        <div
          className={cn(
            'text-base rounded-t-lg border-b border-stroke',
            config.headerLanguageClassName,
          )}
        >
          {language}
        </div>
      )}
      {config?.copyButton && (
        <div className="absolute top-2 right-2 z-10">
          {copied && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-secondary-text text-black whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200">
              Copied!
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-secondary-text" />
            </span>
          )}
          <button
            onClick={handleCopy}
            className={cn(
              'text-white border-none py-2 px-4 rounded cursor-pointer text-sm',
              config.copyButtonClassName,
            )}
          >
            {copied ? <AppIcon iconName="check" size={18}/> : <AppIcon iconName="copy" size={18}/>}
          </button>
        </div>
      )}
      <pre
        className={cn(
          'bg-transparent rounded-lg overflow-x-auto font-mono m-0 whitespace-pre-wrap break-words',
          config?.className,
        )}
        style={config?.style}
      >
        <code className="whitespace-pre-wrap break-words">
          {config?.lineNumbers ? (
            <table className="w-full border-collapse">
              <tbody>
                {lines.map((line, index) => (
                  <tr key={index}>
                    <td className="text-[#858585] pr-4 text-right select-none align-top min-w-[3ch]">
                      {index + 1}
                    </td>
                    <td className="pl-4 whitespace-pre-wrap break-words">
                      {line}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            code
          )}
        </code>
      </pre>
    </div>
  );
};

export { CodeBlockRenderer };

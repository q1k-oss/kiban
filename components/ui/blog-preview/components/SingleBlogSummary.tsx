import React from 'react';

import { cn } from '../../../utils/cn';
import { ISingleBlogSummaryProp } from '../types/type';

export const SingleBlogSummary = ({ blogSummary, className }: ISingleBlogSummaryProp) => {
  return (
    <div className={cn("p-6 italic", className)}>
      <h4 className="font-bold mb-4 text-lg">Summary</h4>
      <p className="text-secondary-text">{blogSummary}</p>
    </div>
  );
};

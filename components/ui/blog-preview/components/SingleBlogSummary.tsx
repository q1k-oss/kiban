import React from 'react';

import { ISingleBlogSummaryProp } from '../types/type';

export const SingleBlogSummary = ({ blogSummary }: ISingleBlogSummaryProp) => {
  return (
    <div className="border-2 rounded-xl border-[#F49D5699] p-6 italic">
      <h4 className="font-bold mb-4 text-lg">Summary</h4>
      <p className="text-secondary-text">{blogSummary}</p>
    </div>
  );
};

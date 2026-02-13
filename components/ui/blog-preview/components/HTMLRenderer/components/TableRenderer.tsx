import React from 'react';

import {cn} from '../../../../../utils/cn'
import { HtmlRendererConfig } from '../type';

interface TableRendererProps {
  type: 'table' | 'thead' | 'tbody' | 'tr' | 'th' | 'td';
  innerHtml: string;
  config?: HtmlRendererConfig['table'];
  renderContent: (html: string) => React.ReactNode;
}

const TableRenderer: React.FC<TableRendererProps> = ({
  type,
  innerHtml,
  config,
  renderContent,
}) => {
  const content = renderContent(innerHtml);

  switch (type) {
    case 'table': {
      const tableElement = (
        <table className={cn(config?.className)}>{content}</table>
      );

      if (config?.responsive) {
        return (
          <div className={cn('overflow-x-auto my-6')}>{tableElement}</div>
        );
      }

      return tableElement;
    }

    case 'thead':
      return <thead className={cn(config?.theadClassName)}>{content}</thead>;

    case 'tbody':
      return <tbody className={cn(config?.tbodyClassName)}>{content}</tbody>;

    case 'tr':
      return <tr className={cn(config?.trClassName)}>{content}</tr>;

    case 'th':
      return <th className={cn(config?.thClassName)}>{content}</th>;

    case 'td':
      return <td className={cn(config?.tdClassName)}>{content}</td>;

    default:
      return null;
  }
};

export { TableRenderer };

import React from 'react';

import {cn} from '../../../../../utils/cn'
import { HtmlRendererConfig } from '../type';

interface TableRendererProps {
  type: 'table' | 'thead' | 'tbody' | 'tr' | 'th' | 'td';
  innerHtml: string;
  config?: HtmlRendererConfig['table'];
  renderContent: (html: string) => React.ReactNode;
}

const tableStyles = `
  .blog-table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--button-fill-3);
    border-radius: 0.75rem;
  }
  .blog-table tr:first-child th:first-child,
  .blog-table tr:first-child td:first-child {
    border-top-left-radius: 0.75rem;
  }
  .blog-table tr:first-child th:last-child,
  .blog-table tr:first-child td:last-child {
    border-top-right-radius: 0.75rem;
  }
  .blog-table tr:last-child td:first-child,
  .blog-table tr:last-child th:first-child {
    border-bottom-left-radius: 0.75rem;
  }
  .blog-table tr:last-child td:last-child,
  .blog-table tr:last-child th:last-child {
    border-bottom-right-radius: 0.75rem;
  }
`;

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
        <>
          <style>{tableStyles}</style>
          <table className={cn('blog-table', config?.className)}>
            {content}
          </table>
        </>
      );

      if (config?.responsive) {
        return (
          <div className="overflow-x-auto my-6">{tableElement}</div>
        );
      }

      return <div className="my-6">{tableElement}</div>;
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

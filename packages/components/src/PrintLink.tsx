import React, { useContext } from 'react';
import { Link, LinkProps } from '@salt-ds/core';
import '@salt-ds/lab';
import { PrintContext } from './PrintContext';

interface PrintLinkProps
  extends Omit<LinkProps, 'children' | 'href'>,
    Required<Pick<LinkProps, 'href'>> {
  prefix?: 'tel:' | 'mailto:';
  query?: string;
  children?: string;
}

export const PrintLink: React.FC<PrintLinkProps> = ({
  prefix,
  query,
  children,
  href,
  ...rest
}: PrintLinkProps) => {
  const { printMode } = useContext(PrintContext);
  return printMode ? (
    <>
      {children ? (
        `${children} - ${href}`
      ) : (
        <>
          <span style={{ width: '1ch' }} /> {href}
        </>
      )}
    </>
  ) : (
    <Link {...rest} href={`${prefix ?? ''}${href}${query ?? ''}`}>
      {children || (prefix ? href : 'website')}
    </Link>
  );
};

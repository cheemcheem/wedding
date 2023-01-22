import { Link, LinkProps } from '@jpmorganchase/uitk-lab';
import React, { useContext } from 'react';
import { PrintContext } from './PrintContext';

interface PrintLinkProps
  extends Omit<LinkProps, 'children' | 'href'>,
    Required<Pick<LinkProps, 'href'>> {
  prefix?: 'tel:' | 'mailto:';
  children?: string;
}

export const PrintLink: React.FC<PrintLinkProps> = ({
  prefix,
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
    <Link {...rest} href={`${prefix ?? ''}${href}`}>
      {children || (prefix ? href : 'website')}
    </Link>
  );
};

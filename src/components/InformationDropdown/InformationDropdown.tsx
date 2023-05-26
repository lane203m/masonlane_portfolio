import React from 'react';
import { ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './InformationDropdown.scss';

interface InformationDropdownProps {
  label?: string; 
  children?: ReactNode;
}

export const InformationDropdown = ({
  label,
  children,
  ...props
}: InformationDropdownProps) => {
  return (
    <Accordion defaultActiveKey="1" flush>
      <Accordion.Item eventKey="0" className='bg-transparent'>
        <Accordion.Header className='border-bottom' >{label}</Accordion.Header>
        <Accordion.Body className='color-off-white'>
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

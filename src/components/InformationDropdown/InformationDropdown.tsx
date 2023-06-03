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
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0" className='border-0 bg-transparent'>
        <Accordion.Header>
        <h5 className='color-off-white'>
          {label} 
        </h5>
        </Accordion.Header>
        <Accordion.Body className='border-top color-off-white'>
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

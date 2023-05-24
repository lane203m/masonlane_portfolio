import React from 'react';
import './LinkButton.css';
import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkButtonProps {
  onClick?: () => void | ((e: React.MouseEvent<HTMLElement>) => void);
  icon?: IconProp;
}

export const LinkButton = ({
  onClick,
  icon,
  ...props
}: LinkButtonProps): ReactElement => {
  return (
    <>
      <button className={`zoom h-100`} onClick={onClick}>
        <FontAwesomeIcon className='fa-2xl' icon={icon ? icon : ['fas', 'notdef'] }></FontAwesomeIcon>
      </button>
      
    </>
  );
};

import React from 'react';
import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import './StyledButtonStyles.scss';
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void | ((e: React.MouseEvent<HTMLElement>) => void);

  isActive?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const StyledButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  isActive,
  onClick,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <div style={{display:'initial'}} className={`pe-0`}><button className={`color-off-white border-color-off-white px-0 ${isActive ? 'underline-animation-override' : 'hover-underline-animation'}`} onClick={onClick}>{label}</button></div>
  );
};

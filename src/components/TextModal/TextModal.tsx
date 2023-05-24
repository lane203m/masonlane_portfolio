import React, { ReactNode } from 'react';
import './TextModalStyles.css';


interface TextModalProps {
  label?: string; 
  children?: ReactNode;
}

export const TextModal = ({
  label,
  children,
  ...props
}: TextModalProps) => {
  return (
    <>
      <div className='p-5 color-off-white'>
        <div className="col-12">
          <div className="col-12 bg-image text-center border" style={{borderRadius:'10px'}}>
            <h2 className='p-3'>{label}</h2>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { ReactNode } from 'react';
import './TextModalStyles.css';
import { getDimensions } from '../Utilities/Utilities';


interface TextModalProps {
  label?: string; 
  children?: ReactNode;
}

export const TextModal = ({
  label,
  children,
  ...props
}: TextModalProps) => {
  const dimensions = getDimensions();

  const isMobile = dimensions.width < 550

  return (
    <>
      <div className={`p-0 color-off-white`} >
        <div className="col-12">
          <div className="col-12 text-center background-color-dark-50" style={{backdropFilter: 'blur(10px)'}}>
            <h2 className='px-3 pt-4 pb-2'>{label}</h2>
            <div className='row justify-content-center'>
              <div className='col-lg-8 p-4 pt-0' >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

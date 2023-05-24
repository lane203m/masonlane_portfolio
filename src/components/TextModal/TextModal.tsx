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
      <div className={`${isMobile ? 'p-0 py-5' : 'p-5'} color-off-white`} >
        <div className="col-12">
          <div className="col-12 text-center" style={{backdropFilter: 'blur(10px)', borderRadius:isMobile ? '0px':'10px', backgroundColor:'rgba(30, 30, 30, 0.5'}}>
            <h2 className='px-3 pt-4 pb-2'>{label}</h2>
            <div className='p-3' >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

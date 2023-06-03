import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { TextModal } from '../../../components/TextModal/TextModal';
import { PortfolioItem } from '../../../components/PortfolioItem/PortfolioItem';
import { getDimensions } from '../../../components/Utilities/Utilities';

interface PortfolioContentsProps {
}





export const PortfolioContents = ({
  ...props
}: PortfolioContentsProps): ReactElement => {

  const [isMobile, setIsMobile] = useState(false);

  const dimensions = getDimensions();
  
  useEffect(() => {
    if(dimensions.width < 550){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [])

  useEffect(() => {
    if(dimensions.width < 550){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [dimensions.width])

  return (
    <div className='w-100 bg-dark dark-box-shadow px-0 pt-4'>
      <div className='row color-off-white'> 
        <h2 className='py-2 text-center background-color-dark' style={{borderRadius:'7px'}}>My Projects</h2>
      </div>
      <div className='container'>
        <div className='row px-3 px-sm-0'>
          <div className='col'>
            <div className='row px-lg-5'>
            {
              [9,8,7,6,5,4,3,2,1].map((x, y) =>
              (
                <div className={`${isMobile? 'col-12' : 'col-12 col-md-6 col-xl-4'} py-4 px-0 `} key={`PortfolioItem-${y}`}>
                    <PortfolioItem portfolioItem={{}}></PortfolioItem>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
};
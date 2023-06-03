import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { TextModal } from '../../../components/TextModal/TextModal';
import { getDimensions } from '../../../components/Utilities/Utilities';

interface AboutMeProps {
}

export const AboutMe = ({
  ...props
}: AboutMeProps): ReactElement => {

  const dimensions = getDimensions();

  const [isMobile, setIsMobile] = useState(false);
  
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
    <div className='py-5 mt-5'>
      <TextModal label='About Me'>
        <div className={`${isMobile ? 'px-0' : 'px-4'} text-start`}>
          <p>
            Hi There, 
          </p>
          <p>
            My name is mason lane and this is a section where I will talk about myself. I will write about my technical ability, experience and interes. It will be about one paragraph long and require this much space to explain what I know in length and look  decent while also visually appealing. The site should be technologically appealing.
          </p>
          <ul>
            <li>it may slo be in some kind of bullet form where I explain somthing</li>
            <li>and that is cool because it means </li>
          </ul>
          <p>
            Thank you for visiting,
          </p>
          <p>
            Mason Lane
          </p>
        </div>
      </TextModal>
    </div>
  );
};
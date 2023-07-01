import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { TextModal } from '../../../components/TextModal/TextModal';
import { getDimensions } from '../../../components/Utilities/Utilities';
import { IAboutMeData } from '../../../domain/models/portfolio';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface AboutMeProps {
  aboutMeData: IAboutMeData;
}

export const AboutMe = ({
  aboutMeData,
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
    <div className='py-5 mt-5' id='aboutMe'>
      <TextModal label='About Me'>
        <div className={`${isMobile ? 'px-0' : 'px-4'} text-start`}>
          <ReactMarkdown>{`${aboutMeData?.aboutMeText}`}</ReactMarkdown>
          
        </div>
      </TextModal>
    </div>
  );
};
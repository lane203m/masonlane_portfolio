import React from 'react';
import { ReactElement } from 'react';
import { TextModal } from '../../../components/TextModal/TextModal';
import { LinkButtonGrid } from '../../../components/LinkButtonGrid/LinkButtonGrid';
import { LinkButton } from '../../../components/LinkButton/LinkButton';
import { IContactData } from '../../../domain/models/portfolio';

interface ContactProps {
  contactData: IContactData
}

export const Contact = ({
  contactData,
  ...props
}: ContactProps): ReactElement => {

  const onClick = ({url}:{url:string}) => {
    window.open(url, "_blank", "noreferrer");
  }


  return (
    <div className='py-5 mb-5' id={'contact'}>
      <TextModal label='Contact'>
        <div className='pb-4'>
          <LinkButtonGrid justifyCenter>
            {contactData?.buttonLinks && contactData.buttonLinks.map((link, i) => {   
                return (<LinkButton key={`contact-link-${i}`} icon={link?.fontAwesomeItemProp} onClick={()=>{onClick({url: link.redirectLink})}}></LinkButton>) 
              }
            )}
          </LinkButtonGrid>
        </div>
        <p>{contactData?.personalEmail}</p>
        <p>{contactData?.phoneNumber}</p>
        <p>{contactData?.regionData?.city}, {contactData?.regionData?.province}, {contactData?.regionData?.country}</p>
      </TextModal>
    </div>
  );
};
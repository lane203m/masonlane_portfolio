import React from 'react';
import { ReactElement } from 'react';
import { TextModal } from '../../../components/TextModal/TextModal';
import { LinkButtonGrid } from '../../../components/LinkButtonGrid/LinkButtonGrid';
import { LinkButton } from '../../../components/LinkButton/LinkButton';

interface ContactProps {
}

export const Contact = ({
  ...props
}: ContactProps): ReactElement => {
  return (
    <div className='py-5 mb-5' id={'contact'}>
      <TextModal label='Contact'>
        <div className='pb-4'>
          <LinkButtonGrid justifyCenter>
            <LinkButton icon={["fab", "itch-io"]}></LinkButton>
            <LinkButton icon={["fab", "itch-io"]}></LinkButton>
            <LinkButton icon={["fab", "itch-io"]}></LinkButton>
          </LinkButtonGrid>
        </div>
        <p>mlane0921@hotmail.com</p>
        <p>306-539-3522</p>
        <p>Regina, SK, Canada</p>
      </TextModal>
    </div>
  );
};
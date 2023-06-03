import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { HeaderBar } from '../../../components/HeaderBar/HeaderBar';
import { StyledButton } from '../../../components/StyledButton/StyledButton';

import { Link, useLocation, useNavigate } from 'react-router-dom';

interface PortfolioHeaderProps {
}

export const PortfolioHeader = ({
  ...props
}: PortfolioHeaderProps): ReactElement => {
  const navigate = useNavigate();

  const [isOnContact, setIsOnContact] = useState(false);
  const [isOnPortfolio, setIsOnPortfolio] = useState(false);
  const [isOnAboutMe, setIsOnAboutMe] = useState(false);

  const [contact] = useState('contact');
  const [portfolio] = useState('portfolio');
  const [aboutMe] = useState('aboutMe');

  const [routingId, setRoutingId] = useState('aboutMe');

  const onClick = (routingId: string) => {
    setTimeout(() => {
      const element = document.getElementById(routingId);
      if (element) {
        navigate(`/#${routingId}`);        
        element.scrollIntoView();
      }
    }, 0);
  }

  useEffect(() => {
    setIsOnContact(false);
    setIsOnPortfolio(false);
    setIsOnAboutMe(false);
    switch (routingId) {
      case contact: {
        setIsOnContact(true)
        navigate(`/#${contact}`);
        break;
      }
      case portfolio: {
        setIsOnPortfolio(true)
        navigate(`/#${portfolio}`);
        break;
      }
      case aboutMe: {
        setIsOnAboutMe(true)
        navigate(`/#${aboutMe}`);
        break;
      }
    }
  }, [routingId])



  useEffect(() => {
    window.addEventListener('scroll', function() {
      
      const observable = {
        contactElement: document.getElementById(contact),
        portfolioElement: document.getElementById(portfolio),
        aboutMeElement: document.getElementById(aboutMe)
  
      }
      const pos = {
        contactElement: observable?.contactElement?.getBoundingClientRect(),
        portfolioElement: observable?.portfolioElement?.getBoundingClientRect(),
        aboutMeElement: observable?.aboutMeElement?.getBoundingClientRect()
      }

      if (pos.contactElement && (pos.contactElement.top+100 < window.innerHeight && pos.contactElement.bottom-100 >= 0)) {
        setRoutingId(contact);

      } else if (pos.aboutMeElement && (pos.aboutMeElement.top+100 < window.innerHeight && pos.aboutMeElement.bottom-100 >= 0)) {
       setRoutingId(aboutMe)

      } else if (pos.portfolioElement && (pos.portfolioElement.top+100 < window.innerHeight && pos.portfolioElement.bottom-100 >= 0)) {
        setRoutingId(portfolio);
      }
    })
  }, [])


  return (
    <div>
      <HeaderBar label='Mason Lane'>
        <StyledButton key={'aboutMe'} isActive={isOnAboutMe} label={'Test Button Longer'} onClick={() => onClick(aboutMe)}/>
        <StyledButton key={'portfolio'} isActive={isOnPortfolio} label={'Test Button'} onClick={() => onClick(portfolio)}/>
        <StyledButton key={'contact'} isActive={isOnContact} label={'Test Button'} onClick={() => {onClick(contact);}}/>
      </HeaderBar>
    </div>
  );
};
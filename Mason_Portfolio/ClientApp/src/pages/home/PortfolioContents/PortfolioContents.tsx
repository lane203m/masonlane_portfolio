import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { PortfolioItem } from '../../../components/PortfolioItem/PortfolioItem';
import { getDimensions } from '../../../components/Utilities/Utilities';
import './PortfolioContents.scss';
import { IPortfolioItemData } from '../../../domain/models/portfolio';

interface PortfolioContentsProps {
  portfolioItems: IPortfolioItemData[],
}


interface TableRowsProps {
  portfolioItems: IPortfolioItemData[],
  columnSize: number,
}




export const PortfolioContents = ({
  portfolioItems,
  ...props
}: PortfolioContentsProps): ReactElement => {

  const [columnSize, setColumnSize] = useState(1);

  const dimensions = getDimensions();

  useEffect(() => {
    if(dimensions.width < 768){
      setColumnSize(1);
    }
    else if(dimensions.width < 1300){
      setColumnSize(2);
    }
    else{
      setColumnSize(3);
    }
  }, [])

  useEffect(() => {
    if(dimensions.width < 768){
      setColumnSize(1);
    }
    else if(dimensions.width < 1300){
      setColumnSize(2);
    }
    else{
      setColumnSize(3);
    }
  }, [dimensions.width])

  return (
    <div className='w-100 background-color-dark dark-box-shadow px-0' id='portfolio'>
      <div className='row pb-0 px-0 m-0 color-off-white '> 
        <h2 className='py-3 m-0 text-center background-color-half-dark border-bottom border-success'>My Work</h2>
      </div>
      <ContentsTableRows portfolioItems={portfolioItems} columnSize={columnSize}/>
    </div>
  );
};

export const ContentsTableRows = ({
  portfolioItems,
  columnSize
}: TableRowsProps): ReactElement => {

  const [rowArray, setRowArray] = useState<any>([]);

  useEffect(() => {
    let tempArray = [];
    for(var i = 0; i<portfolioItems?.length; i++){
      if(columnSize === 3){
        tempArray.push(
          <div className={`row justify-content-center py-5 m-0 rowStripe`} key={`PortfolioItemSet-${i}`}>
            <div className={`col-auto`} key={`PortfolioItem-${i}`}>
              <PortfolioItem portfolioItem={portfolioItems[i]}></PortfolioItem>
            </div>
            {i+1 < portfolioItems.length &&
            <div className={`col-auto px-5`} key={`PortfolioItem-${i+1}`}>
              <PortfolioItem portfolioItem={portfolioItems[i+1]}></PortfolioItem>
            </div>
            }
            {i+2 < portfolioItems.length &&
            <div className={`col-auto`} key={`PortfolioItem-${i+2}`}>
              <PortfolioItem portfolioItem={portfolioItems[i+2]}></PortfolioItem>
            </div>
            }
          </div>
        )

        i = i+2
      }
      if(columnSize === 2){
        tempArray.push(
          <div className={`row justify-content-center py-5 m-0 rowStripe`} key={`PortfolioItemSet-${i}`}>
            <div className={`col-auto pe-4`} key={`PortfolioItem-${i}`}>
              <PortfolioItem portfolioItem={portfolioItems[i]}></PortfolioItem>
            </div>
            {i+1 < portfolioItems.length &&
            <div className={`col-auto ps-4`} key={`PortfolioItem-${i+1}`}>
              <PortfolioItem portfolioItem={portfolioItems[i+1]}></PortfolioItem>
            </div>
            }
          </div>
        )

        console.log(i)

        i++;
      }
      if(columnSize === 1){
        tempArray.push(
          <div className={`row justify-content-center py-5 px-0 m-0 rowStripe`} key={`PortfolioItemSet-${i}`}>
            <div className={`col-auto`} key={`PortfolioItem-${i}`}>
              <PortfolioItem portfolioItem={portfolioItems[i]}></PortfolioItem>
            </div>
          </div>
        )
      }
    }

    setRowArray(tempArray);
  }, [columnSize, portfolioItems])

  return (
    <>
      {rowArray}
    </>
  );
}
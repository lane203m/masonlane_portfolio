import { useQuery, useQueryClient } from "react-query";
import {IPortfolioData} from "../models/portfolio";
import { mockPortfolioData } from "../mockData/mockPortfolio";

interface IPortfolioDataRequest{
  portfolioData: IPortfolioData;
  isLoading: Boolean;
}

export const useGetPortfolioData = (): IPortfolioDataRequest => {
    const {
      isLoading: isLoading,
      data: portfolioData
    } = useQuery('GetPortfolioData', async () => {
        const response = await fetch('portfoliodata');
        const data = await response.json();
        return (data);
    });
    
    return ({portfolioData, isLoading});
}


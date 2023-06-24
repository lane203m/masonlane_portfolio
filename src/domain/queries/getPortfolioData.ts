import { useQuery, useQueryClient } from "react-query";
import {IPortfolioData} from "../models/portfolio";
import { mockPortfolioData } from "../mockData/mockPortfolio";


export const useGetPortfolioData = (): IPortfolioData => {
    const {
      data: portfolioData
    } = useQuery('GetPortfolioData', () => mockPortfolioData);
    
    return (portfolioData);
}


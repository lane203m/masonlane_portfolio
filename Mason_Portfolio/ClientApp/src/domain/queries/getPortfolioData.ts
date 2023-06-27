import { useQuery, useQueryClient } from "react-query";
import {IPortfolioData} from "../models/portfolio";
import { mockPortfolioData } from "../mockData/mockPortfolio";


export const useGetPortfolioData = (): IPortfolioData => {
    const {
      data: portfolioData
    } = useQuery('GetPortfolioData', async () => {
        console.log('test')
        const response = await fetch('portfoliodata');
        console.log(response)
        const data = await response.json();
        console.log(data)
        return (data);
    });
    
    return (portfolioData);
}


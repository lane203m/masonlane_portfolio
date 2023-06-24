export const mockPortfolioItemData = JSON.parse(`
  {
    "itemId": "42",
    "itemName": "MyProject1",
    "itemDescription": "Here is some text to describe my project",
    "itemLinks": [{
      "redirectLink": "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
      "fontAwesomeItemProp": ["fab", "youtube"]
    }, {
      "redirectLink": "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
      "fontAwesomeItemProp": ["fab", "youtube"]
    }, {
      "redirectLink": "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
      "fontAwesomeItemProp": ["fab", "youtube"]
    }],
    "itemImage" : "https://img.itch.zone/aW1hZ2UvMjAwNzgwNS8xMTgwNjE0Ny5wbmc=/original/eHDzIP.png"
  }
`);

export const mockAboutMeData = JSON.parse(`
  {
    "aboutMeText": "This is some about me text"
  }
`);

export const mockContactData = JSON.parse(`
    {
      "iconLinks": [{
          "redirectLink": "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
          "fontAwesomeItemProp": ["fab", "itch-io"]
        },
        {
          "redirectLink": "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
          "fontAwesomeItemProp": ["fab", "youtube"]
        },
        {
          "redirectLink": "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
          "fontAwesomeItemProp": ["fab", "github"]
        }
      ],
      "phoneNumber": "999-999-9999",
      "personalEmail": "mockEmail@mockMail.com",
      "regionData": {
        "city": "Regina",
        "province": "SK",
        "country": "Canada"
      }
    }
`);


export const mockPortfolioData = JSON.parse(`
  {
    "portfolioItems" : [
      ${JSON.stringify(mockPortfolioItemData)},
      ${JSON.stringify(mockPortfolioItemData)},
      ${JSON.stringify(mockPortfolioItemData)}
    ],
    "aboutMeData": ${JSON.stringify(mockAboutMeData)},
    "contactData": ${JSON.stringify(mockContactData)}
  }
`)
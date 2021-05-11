//3 Kiểu : Situation, Solution, News
var colorSet=new am4core.ColorSet();
var events=[{
    "title": "The W.H.O. declared a global health emergency.",
    "category": "Solution","date": new Date(2020, 0, 30),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
    
  },{
    "title": "The Trump administration restricted travel from China.",
    "category": "Solution","date": new Date(2020, 1, 02),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },{
    "title": "The E.U. barred most travelers from outside the bloc ",
    "category": "Solution","date": new Date(2020, 2, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },{
    "title": "India announced a 21-day lockdown.",
    "category": "Solution","date": new Date(2020, 2, 24),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  }, {
    "title": "Airlines announced rules requiring face masks",
    "category": "Solution","date": new Date(2020, 3, 30),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "Iran announced new lockdown measures.",
    "category": "Solution","date": new Date(2020, 6, 1),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Hong Kong shut down schools amid a third wave.",
    "category": "Solution","date": new Date(2020, 6, 10),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "Tokyo raised its pandemic alert level.",
    "category": "Solution","date": new Date(2020, 6, 15),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "India reached a million coronavirus cases, and lockdowns were reimposed.",
    "category": "Solution","date": new Date(2020, 6, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "The C.D.C. began developing a plan to distribute a coronavirus vaccine",
    "category": "Solution","date": new Date(2020, 7, 16),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "The U.K. approved Pfizer’s coronavirus vaccine.",
    "category": "Solution","date": new Date(2020, 11, 2),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Biden said he will ask Americans to wear masks for 100 days.",
    "category": "Solution","date": new Date(2020, 11, 3),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "The U.K. began vaccinations.",
    "category": "Solution","date": new Date(2020, 11, 8),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "The F.D.A. approved a vaccine by Pfizer.",
    "category": "Solution","date": new Date(2020, 11, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "England entered a national lockdown.",
    "category": "Solution","date": new Date(2020, 10, 5),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "Israel imposed a second national lockdown.",
    "category": "Solution","date": new Date(2020, 8, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "The F.D.A. approved Moderna’s Covid vaccine.",
    "category": "Solution","date": new Date(2020, 11, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "London entered a severe lockdown, ordered by Boris Johnson.",
    "category": "Solution","date": new Date(2020, 11, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },

        {
            "title": "Chinese authorities treated dozens of cases of pneumonia of unknown cause.",
            "category": "News","color":colorSet.getIndex(5),
            "date":new Date(2019, 11, 31)
            ,"center": "bottom","link":"http://www.youtube.com/embed/eCfDxZxTBW4",
          },{
            "title": "The first coronavirus death was reported outside China.",
            "category": "News","color":colorSet.getIndex(5),"date":new Date(2020, 1, 07),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
          },{
            "title": "France announced the first coronavirus death in Europe.",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 1, 14),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
          },{
            "title": "Latin America reported its first case.",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 1, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
          },{
            "title": "The United States reported a death.",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 1, 29),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
          },  {
            "title": "Prime Minister Boris Johnson moved into intensive care",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 6),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
          } , {
    "title": "Officials discovered earlier known U.S. coronavirus deaths in California",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 21),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "The European Union, pressured by China, watered down a report on disinformation",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 24),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "Officials discovered earlier known U.S. coronavirus deaths in California",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 21),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "The European Union, pressured by China, watered down a report on disinformation",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 24),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "The E.U. said it would reopen borders.",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 5, 30),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },  {
    "title": "More than five million Americans lost health insurance",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 6, 13),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
{
    "title": "China reported its first death","category": "Situation","color":colorSet.getIndex(10),
    "date": new Date(2020, 0, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },{
    "title": "Other countries, including the United States, confirmed cases","category": "News","color":colorSet.getIndex(5),
    "date":new Date(2020, 0, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },{
    "title": "Wuhan, a city of more than 11 million, was cut off by the Chinese authorities.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 0, 23),"Solution": "bottom",
  },{
    "title": "Latin America began to feel the effects.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 2, 16),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },{
    "title": "The United States led the world in confirmed cases",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 2, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Cases topped a million, and millions lost their jobs",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 3, 2),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Cases surged in Russia",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 3, 10),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },

  {
    "title": "The global death toll surpassed 200,000",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 3, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
 
  {
    "title": "The coronavirus reached France in December, doctors said, rewriting the epidemic’s timeline",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 5),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Japan and Germany, two of the world’s largest economies, entered recessions",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Infections in Latin America continued to rise",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Coronavirus deaths in the U.S. passed 100,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 27),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Coronavirus tore into regions previously spared.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 5, 4),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Coronavirus cases in Africa topped 200,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 5, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Southern U.S. states saw sharp rise in cases.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 5, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },

  {
    "title": "The U.S. saw July cases more than double the total of any other month.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 7, 1),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "One day before the United States surpassed 150,000 deaths.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 7, 3),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },

  {
    "title": "Global virus deaths surpassed 800,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 7, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "India became the country with the second-highest number of cases with more than 4 million.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 8, 6),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },

  {
    "title": "The U.S. death toll surpassed 200,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 8, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "Global deaths reached 1 million.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 8, 28),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },

  {
    "title": "The U.S. surpassed 10 million infections.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 10, 8),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
  {
    "title": "The U.S. death toll hit 250,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 10, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },

  {
    "title": "The U.S. death toll surpassed 300,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 11, 14),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html",
  },
]

  
    

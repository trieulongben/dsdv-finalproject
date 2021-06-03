//3 Kiểu : Situation, Solution, News
var colorSet=new am4core.ColorSet();
var events=[{
    "title": "The W.H.O. declared a global health emergency.",
    "category": "Solution","date": new Date(2020, 0, 30),"center": "bottom","image":"images/2020/v1/Mar-15/jpg"
  },{
    "title": "The Trump administration restricted travel from China.",
    "category": "Solution","date": new Date(2020, 1, 02),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/trump.webp",
  },{
    "title": "The E.U. barred most travelers from outside the bloc ",
    "category": "Solution","date": new Date(2020, 2, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Orly_airport_Paris.jpg",
  },{
    "title": "India announced a 21-day lockdown.",
    "category": "Solution","date": new Date(2020, 2, 24),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v1/Feb-24.jpg",
  }, {
    "title": "Airlines announced rules requiring face masks",
    "category": "Solution","date": new Date(2020, 3, 30),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/mask.jpg",
  },  {
    "title": "Iran announced new lockdown measures.",
    "category": "Solution","date": new Date(2020, 6, 1),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Iran.jpg",
  },
  {
    "title": "Hong Kong shut down schools amid a third wave.",
    "category": "Solution","date": new Date(2020, 6, 10),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/HongKong.jpg",
  },  {
    "title": "Tokyo raised its pandemic alert level.",
    "category": "Solution","date": new Date(2020, 6, 15),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Tokyo.jpg",
  },
  {
    "title": "India reached a million coronavirus cases, and lockdowns were reimposed.",
    "category": "Solution","date": new Date(2020, 6, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/India.jpg",
  },  {
    "title": "The C.D.C. began developing a plan to distribute a coronavirus vaccine",
    "category": "Solution","date": new Date(2020, 7, 16),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/July-16.jpg",
  },  {
    "title": "The U.K. approved Pfizer’s coronavirus vaccine.",
    "category": "Solution","date": new Date(2020, 11, 2),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/pfizer.jpeg",
  },
  {
    "title": "Biden said he will ask Americans to wear masks for 100 days.",
    "category": "Solution","date": new Date(2020, 11, 3),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Biden.jpg",
  },
  {
    "title": "The U.K. began vaccinations.",
    "category": "Solution","date": new Date(2020, 11, 8),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/vaccine.jpg",
  },
  {
    "title": "The F.D.A. approved a vaccine by Pfizer.",
    "category": "Solution","date": new Date(2020, 11, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/FDA.jpg",
  },  {
    "title": "England entered a national lockdown.",
    "category": "Solution","date": new Date(2020, 10, 5),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/England.jpg",
  },  {
    "title": "Israel imposed a second national lockdown.",
    "category": "Solution","date": new Date(2020, 8, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v1/Aug-18.jpg",
  },  {
    "title": "The F.D.A. approved Moderna’s Covid vaccine.",
    "category": "Solution","date": new Date(2020, 11, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/moderna.jpg",
  },
  {
    "title": "London entered a severe lockdown, ordered by Boris Johnson.",
    "category": "Solution","date": new Date(2020, 11, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/London.jpg",
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            "title": "Chinese authorities treated dozens of cases of pneumonia of unknown cause.",
            "category": "News","color":colorSet.getIndex(5),
            "date":new Date(2019, 11, 31)
            ,"center": "bottom","link":"http://www.youtube.com/embed/eCfDxZxTBW4","image":"images/2020/v1/Dec-31-19.jpg",
          },{
            "title": "The first coronavirus death was reported outside China.",
            "category": "News","color":colorSet.getIndex(5),"date":new Date(2020, 1, 07),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Philippines.jpg",
          },{
            "title": "France announced the first coronavirus death in Europe.",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 1, 14),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/France.jpg",
          },{
            "title": "Latin America reported its first case.",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 1, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Brazil.jpg",
          },{
            "title": "The United States reported a death.",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 1, 29),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/US.webp",
          },  {
            "title": "Prime Minister Boris Johnson moved into intensive care",
            "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 6),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/BorisJohnson.jpg",
          } ,  {
    "title": "Officials discovered earlier known U.S. coronavirus deaths in California",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 21),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/California.jpg",
  },
  {
    "title": "The European Union, pressured by China, watered down a report on disinformation",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 3, 24),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/disinformation.jpg",
  },  {
    "title": "The E.U. said it would reopen borders.",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 5, 30),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/borders.jpg",
  },  {
    "title": "More than five million Americans lost health insurance",
    "category": "News","color":colorSet.getIndex(5),"date": new Date(2020, 6, 13),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/health.jpeg",
  },////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
    "title": "China reported its first death","category": "Situation","color":colorSet.getIndex(10),
    "date": new Date(2020, 0, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/china1st.webp",
  },{
    "title": "Other countries, including the United States, confirmed cases","category": "News","color":colorSet.getIndex(5),
    "date":new Date(2020, 0, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/others.PNG",
  },{
    "title": "Wuhan, a city of more than 11 million, was cut off by the Chinese authorities.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 0, 23),"Solution": "bottom","image":"images/2020/v1/Jan-23.jpg",
  },{
    "title": "Latin America began to feel the effects.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 2, 16),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Latin.jpg",
  },{
    "title": "The United States led the world in confirmed cases",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 2, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/US1st.jpg",
  },
  {
    "title": "Cases topped a million, and millions lost their jobs",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 3, 2),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/lossjob.jpeg",
  },
  {
    "title": "Cases surged in Russia",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 3, 10),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Russia.jpg",
  },

  {
    "title": "The global death toll surpassed 200,000",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 3, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/gdeath200k.jpg",
  },
 
  {
    "title": "The coronavirus reached France in December, doctors said, rewriting the epidemic’s timeline",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 5),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/covidFrance.jpg",
  },
  {
    "title": "Japan and Germany, two of the world’s largest economies, entered recessions",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/eco.png",
  },
  {
    "title": "Infections in Latin America continued to rise",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/caselatin.png",
  },
  {
    "title": "Coronavirus deaths in the U.S. passed 100,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 4, 27),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath100k.jpg",
  },
  {
    "title": "Coronavirus tore into regions previously spared.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 5, 4),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/middleast.jpg",
  },
  {
    "title": "Coronavirus cases in Africa topped 200,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 5, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/africacase200k.jpeg",
  },
  {
    "title": "Southern U.S. states saw sharp rise in cases.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 5, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/UScase.png",
  },

  {
    "title": "The U.S. saw July cases more than double the total of any other month.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 7, 1),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/UScaseJuly.png",
  },
  {
    "title": "One day before the United States surpassed 150,000 deaths.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 7, 3),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath150k.jpg",
  },

  {
    "title": "Global virus deaths surpassed 800,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 7, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/gdeath800k.jpg",
  },
  {
    "title": "India became the country with the second-highest number of cases with more than 4 million.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 8, 6),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Indiacase4M.jpg",
  },

  {
    "title": "The U.S. death toll surpassed 200,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 8, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath200k.jpg",
  },
  {
    "title": "Global deaths reached 1 million.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 8, 28),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/gdeath1M.jpg",
  },

  {
    "title": "The U.S. surpassed 10 million infections.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 10, 8),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/UScase10M.jng",
  },
  {
    "title": "The U.S. death toll hit 250,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 10, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath250k.jpg",
  },

  {
    "title": "The U.S. death toll surpassed 300,000.",
    "category": "Situation","color":colorSet.getIndex(10),"date": new Date(2020, 11, 14),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath300k.jpg",
  },
]

  
    

//3 Kiểu : Good news, React, Bad News
var colorSet=am4core.color();
var events=[{
    "title": "The W.H.O. declared a global health emergency.",
    "category": "React","date": new Date(2020, 0, 30),"center": "bottom","image":"images/2020/v1/Mar-15/jpg",
    "description": "Amid thousands of new cases in China, a “public health emergency of international concern” was officially declared by the W.H.O. China’s Foreign Ministry spokeswoman said that it would continue to work with the W.H.O. and other countries to protect public health, and the U.S. State Department warned travelers to avoid China.",

  },{
    "title": "The Trump administration restricted travel from China.",
    "category": "React","date": new Date(2020, 1, 02),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/trump.webp",
    "description": "The Trump administration suspended entry into the United States by any foreign nationals who had traveled to China in the past 14 days, excluding the immediate family members of American citizens or permanent residents. By this date, 213 people had died and nearly 9,800 had been infected worldwide..",
  },{
    "title": "The E.U. barred most travelers from outside the bloc ",
    "category": "React","date": new Date(2020, 2, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Orly_airport_Paris.jpg",
    "description": "European leaders voted to close off at least 26 countries to nearly all visitors from the rest of the world for at least 30 days. The ban on nonessential travel from outside the bloc was the first coordinated response to the epidemic by the European Union..",
  },{
    "title": "India announced a 21-day lockdown.",
    "category": "React","date": new Date(2020, 2, 24),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v1/Feb-24.jpg",
    "description": "India announced a 21-day lockdown.",
  }, {
    "title": "Airlines announced rules requiring face masks",
    "category": "React","date": new Date(2020, 3, 30),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/mask.jpg",
    "description": "Airlines announced rules requiring face masks.",
  },  {
    "title": "Iran announced new lockdown measures.",
    "category": "React","date": new Date(2020, 6, 1),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Iran.jpg",
    "description": "Iran announced new lockdown measures",
  },
  {
    "title": "Hong Kong shut down schools amid a third wave.",
    "category": "React","date": new Date(2020, 6, 10),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/HongKong.jpg",
    "description": "Hong Kong, a city of seven million, has reported more than 1,400 cases and seven deaths. But on July 10, it shut down its school system as it worked to contain a third wave of infections, which official reports included 38 new cases. The third wave, which comes after infections surged in March and were contained by May, was a setback for a city that had largely returned to normal, with restaurants enjoying packed crowds and workers returning to offices.",
  },  {
    "title": "Tokyo raised its pandemic alert level.",
    "category": "React","date": new Date(2020, 6, 15),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Tokyo.jpg",
    "description": "Days after new cases hit record highs, Tokyo raised its alert level to “red,” its highest. In the week before, Tokyo recorded two consecutive daily records with a peak of 243 cases on July 10. Since February, the sprawling metropolis of 14 million had reported a total of just under 8,200 cases and 325 deaths.",
  },
  {
    "title": "India reached a million coronavirus cases, and lockdowns were reimposed.",
    "category": "React","date": new Date(2020, 6, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/India.jpg",
    "description": "India on July 17 surpassed one million confirmed infections and 25,000 deaths. The milestones came as several states and cities had reimposed total and partial lockdowns and as the country ranked third in the world in infections behind the United States and Brazil. While India’s caseloads continued to climb, researchers at the Massachusetts Institute of Technology estimated that by the end of next year, India would have the worst outbreak in the world.",
  },  {
    "title": "The C.D.C. began developing a plan to distribute a coronavirus vaccine",
    "category": "React","date": new Date(2020, 7, 16),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/July-16.jpg",
    "description": "The C.D.C. began consulting with California, Florida, Minnesota and North Dakota as well as Philadelphia to develop plans for distributing a coronavirus vaccine. The agency chose the communities for a pilot program because they represent different kinds of challenges as the U.S. government prepared to begin the largest such campaign ever undertaken.",
  },  {
    "title": "The U.K. approved Pfizer’s coronavirus vaccine.",
    "category": "React","date": new Date(2020, 11, 2),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/pfizer.jpeg",
    "description": "Britain gave emergency authorization on Dec. 2 to Pfizer’s coronavirus vaccine, leaping ahead of the United States to become the first Western country to allow mass inoculations..",
  },
  {
    "title": "Biden said he will ask Americans to wear masks for 100 days.",
    "category": "React","date": new Date(2020, 11, 3),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Biden.jpg",
    "description": "President-elect Joseph R. Biden Jr. said that on his first day as president, he would ask Americans to wear masks for 100 days. “Just 100 days to mask,” Mr. Biden said in an interview on CNN. “Not forever. 100 days. And I think we’ll see a significant reduction.",
  },
  {
    "title": "The U.K. began vaccinations.",
    "category": "React","date": new Date(2020, 11, 8),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/vaccine.jpg",
    "description": "The first person to receive a coronavirus vaccination in the U.K. was Margaret Keenan, a 90-year-old former jewelry shop assistant, followed by an 81-year-old man, William Shakespeare.",
  },
  {
    "title": "The F.D.A. approved a vaccine by Pfizer.",
    "category": "React","date": new Date(2020, 11, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/FDA.jpg",
    "description": "The F.D.A. authorized Pfizer’s Covid-19 vaccine for emergency use on Dec. 11, clearing the way for millions of highly vulnerable people to begin receiving the vaccine within days. The authorization was a historic turning point in a pandemic that had taken more than 290,000 lives in the United States. The same vaccine was also approved by Mexico, Canada, Saudi Arabia and other countries.",
  },  {
    "title": "England entered a national lockdown.",
    "category": "React","date": new Date(2020, 10, 5),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/England.jpg",
    "description": "Prime Minister Boris Johnson of Britain announced new restrictions that went into effect on Nov. 5 and ended Dec. 2, including the closing of pubs, restaurants and most retail stores in England. The government’s scientific advisory panel, known as SAGE, estimated in a report dated Oct. 14 that there were between 43,000 and 75,000 new infections a day in England, a rate above the worst-case scenarios calculated only weeks before that.",
  },  {
    "title": "Israel imposed a second national lockdown.",
    "category": "React","date": new Date(2020, 8, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v1/Aug-18.jpg",
    "description": "On Sept. 18, the eve of the Jewish New Year holiday, Israel began a national lockdown that extended for three weeks. It was a sign of the government’s failure to contain the spread of the coronavirus. The second lockdown came nearly four months after Israel’s first lockdown.",
  },  {
    "title": "The F.D.A. approved Moderna’s Covid vaccine.",
    "category": "React","date": new Date(2020, 11, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/moderna.jpg",
    "description": "The F.D.A. authorized Pfizer’s Covid-19 vaccine for emergency use on Dec. 11, clearing the way for millions of highly vulnerable people to begin receiving the vaccine within days. The authorization was a historic turning point in a pandemic that had taken more than 290,000 lives in the United States. The same vaccine was also approved by Mexico, Canada, Saudi Arabia and other countries.",
  },
  {
    "title": "London entered a severe lockdown, ordered by Boris Johnson.",
    "category": "React","date": new Date(2020, 11, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/London.jpg",
    "description": "Alarmed by a new, faster-spreading variant of the coronavirus, Prime Minister Boris Johnson abruptly imposed a wholesale lockdown on London and most of England’s southeast that began Dec. 20. Countries across Europe and beyond began closing their borders to travelers from the U.K.",
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            "title": "Chinese authorities treated dozens of cases of pneumonia of unknown cause.",
            "category": "Bad News","color":am4core.color("C2213A"),
            "date":new Date(2019, 11, 31)
            ,"center": "bottom","link":"http://www.youtube.com/embed/eCfDxZxTBW4","image":"images/2020/v1/Dec-31-19.jpg",
          },{
            "title": "The first coronavirus death was reported outside China.",
            "category": "Bad News","color":am4core.color("C2213A"),"date":new Date(2020, 1, 07),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Philippines.jpg",
            "description": "A 44-year-old man in the Philippines died after being infected, officials said, the first death reported outside China. By this point, more than 360 people had died.",
          },{
            "title": "France announced the first coronavirus death in Europe.",
            "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 1, 14),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/France.jpg",
            "description": "An 80-year-old Chinese tourist died on Feb. 14 at a hospital in Paris, in what was the first coronavirus death outside Asia, the authorities said. It was the fourth death from the virus outside mainland China, where about 1,500 people had died, most of them in Hubei Province.",
          },{
            "title": "Latin America reported its first case.",
            "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 1, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Brazil.jpg",
            "description": "Brazilian health officials said that a 61-year-old São Paulo man, who had returned recently from a business trip to Italy, tested positive for the coronavirus. It was the first known case in Latin America. ",
          },{
            "title": "The United States reported a death.",
            "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 1, 29),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/US.webp",
            "description": "On Feb. 29, the authorities announced that a patient near Seattle had died from the coronavirus, in what was believed to be the first coronavirus death in the United States at the time. In fact, two people had died earlier, though their Covid-19 diagnoses were not discovered until months later.",
          },  {
            "title": "Prime Minister Boris Johnson moved into intensive care",
            "category": "React","date": new Date(2020, 3, 6),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/BorisJohnson.jpg",
            "description": "Ten days after going public with his coronavirus diagnosis, Prime Minister Boris Johnson of Britain was moved into intensive care. The decision was a precaution, according to the British government, who also said he had been in good spirits. Mr. Johnson had also asked the foreign secretary, Dominic Raab, to deputize for him “where necessary.” He was released on April 12.",
          } ,  {
    "title": "Officials discovered earlier known U.S. coronavirus deaths in California",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 3, 21),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/California.jpg",
    "description": "Officials in Santa Clara County, Calif., announced that two residents there died of the coronavirus on Feb. 6 and Feb. 17, making them the earliest known victims of the pandemic in the United States. The new information, gained from autopsies of the residents, moved the timeline of the virus’s spread in country weeks earlier than previously understood.",
  },
  {
    "title": "The European Union, pressured by China, watered down a report on disinformation",
    "category": "React","date": new Date(2020, 3, 24),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/disinformation.jpg",
    "description": "The E.U. appeared to succumb to pressure from Beijing and softened criticism of China in a report on disinformation about the coronavirus pandemic. While the initial report was not particularly harsh, European officials delayed and then rewrote the document to dilute the focus on China, a vital trading partner.",
  },  {
    "title": "The E.U. said it would reopen borders.",
    "category": "React","date": new Date(2020, 5, 30),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/borders.jpg",
    "description": "The European Union prepared to open to visitors from 15 countries on July 1, but not to travelers from the United States, Brazil or Russia. The move puts into effect a complex policy that seeks to balance health concerns with politics, diplomacy and the desperate need for tourism revenue. Australia, Canada and New Zealand were among the approved list of countries. Travelers from China will be permitted if China reciprocates.",
  },  {
    "title": "More than five million Americans lost health insurance",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 6, 13),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/health.jpeg",
    "description": "The coronavirus pandemic stripped an estimated 5.4 million Americans of their health insurance between February and May, a period in which more adults became uninsured because of job losses than have ever lost coverage in a single year, according to a study.",
  },////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
    "title": "China reported its first death","category": "Bad News","color":am4core.color("C2213A"),
    "date": new Date(2020, 0, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/china1st.webp",
    "description": "On Jan. 11, Chinese state media reported the first known death from an illness caused by the virus, which had infected dozens of people. The 61-year-old man who died was a regular customer at the market in Wuhan. The report of his death came just before one of China’s biggest holidays, when hundreds of millions of people travel across the country.",
  },{
    "title": "Other countries, including the United States, confirmed cases","category": "Bad News","color":am4core.color("C2213A"),
    "date":new Date(2020, 0, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/others.PNG",
    "description": "The first confirmed cases outside mainland China occurred in Japan, South Korea and Thailand, according to the W.H.O.’s first situation report. The first confirmed case in the United States came the next day in Washington State, where a man in his 30s developed symptoms after returning from a trip to Wuhan.",
  },{
    "title": "Wuhan, a city of more than 11 million, was cut off by the Chinese authorities.",
    "category": "React","date": new Date(2020, 0, 23),"Solution": "bottom","image":"images/2020/v1/Jan-23.jpg",
    "description": "The Chinese authorities closed off Wuhan by canceling planes and trains leaving the city, and suspending buses, subways and ferries within it. At this point, at least 17 people had died and more than 570 others had been infected, including in Taiwan, Japan, Thailand, South Korea and the United States.",
  },{
    "title": "Latin America began to feel the effects.",
    "category": "React","date": new Date(2020, 2, 16),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Latin.jpg",
    "description": "Several countries across Latin America imposed restrictions on their citizens to slow the spread of the virus. Venezuela announced a nationwide quarantine that began on March 17. Ecuador and Peru implemented countrywide lockdowns, while Colombia and Costa Rica closed their borders. ",
  },{
    "title": "The United States led the world in confirmed cases",
    "category": "React","date": new Date(2020, 2, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/US1st.jpg",
    "description": "The United States officially became the country hardest hit by the pandemic, with at least 81,321 confirmed infections and more than 1,000 deaths. This was more reported cases than in China, Italy or any other country at the time.",
  },
  {
    "title": "Cases topped a million, and millions lost their jobs",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 3, 2),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/lossjob.jpeg",
    "description": "In just a few weeks, the pandemic put nearly 10 million Americans out of work, including a staggering 6.6 million people who applied for unemployment benefits in the last week of March. The speed and scale of the job losses was without precedent: Until March, the worst week for unemployment filings was 695,000 in 1982.",
  },
  {
    "title": "Cases surged in Russia",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 3, 10),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Russia.jpg",
    "description": "The number of people hospitalized in Moscow with Covid-19 doubled from the previous week, with two-thirds of the country’s 12,000 reported cases in Moscow. The increase in cases pushed Moscow’s health care system to its limit, well before an expected peak.",
  },

  {
    "title": "The global death toll surpassed 200,000",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 3, 26),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/gdeath200k.jpg",
    "description": "By April 26, the coronavirus pandemic had killed more than 200,000 people and sickened more than 2.8 million worldwide, according to data collected by The New York Times. The actual toll is higher by an unknown degree, and will remain so for some time.",
  },
 
  {
    "title": "The coronavirus reached France in December, doctors said, rewriting the epidemic’s timeline",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 4, 5),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/covidFrance.jpg",
    "description": "French doctors said that they had discovered that a patient treated for pneumonia in late December had the coronavirus. If the diagnosis is verified, it would suggest that the virus appeared in Europe nearly a month earlier than previously understood and days before Chinese authorities first reported the new illness to the World Health Organization. The first report of an infection in Europe was on Jan. 24 in France.",
  },
  {
    "title": "Japan and Germany, two of the world’s largest economies, entered recessions",
    "category": "React","date": new Date(2020, 4, 17),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/eco.png",
    "description": "Japan, the world’s third-largest economy after the United States and China, fell into a recession for the first time since 2015. Its economy shrank by an annualized rate of 3.4 percent in the first three months of the year.",
  },
  {
    "title": "Infections in Latin America continued to rise",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 4, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/caselatin.png",
    "description": "On May 22, Brazil overtook Russia in reporting the second-highest count of infections worldwide, reaching more than 330,000. Peru and Chile ranked among the hardest-hit countries in the world in terms of infections per capita, around 1 in 300. Data from Ecuador indicated that it was suffering one of the worst outbreaks in the world. The United States remained the global epicenter, with more than 1.6 million cases and the number of deaths nearing 100,000.",
  },
  {
    "title": "Coronavirus deaths in the U.S. passed 100,000.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 4, 27),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath100k.jpg",
    "description": "Four months after the government confirmed the first known case, more than 100,000 people who had the coronavirus were recorded dead in the United States. The death toll was far higher than in any other nation around the world.",
  },
  {
    "title": "Coronavirus tore into regions previously spared.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 5, 4),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/middleast.jpg",
    "description": "The number of known cases across the globe grew faster than ever, with more than 100,000 new infections a day. Densely populated, low- and middle-income countries across the Middle East, Latin America, Africa and South Asia were hit the hardest, suggesting Bad News for strongmen and populists who once reaped political points by vaunting low infection rates as evidence of their leadership’s virtues.",
  },
  {
    "title": "Coronavirus cases in Africa topped 200,000.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 5, 11),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/africacase200k.jpeg",
    "description": "The W.H.O. said that it took Africa 98 days to reach 100,000 coronavirus cases, but only 18 days for that figure to double. While the sharp rise in cases could be explained by an increase in testing, the agency said, more than half of the 54 countries on the continent were experiencing community transmissions. Ten countries were driving the rise in numbers and accounted for nearly 80 percent of all cases. South Africa has a quarter of the total cases.",
  },
  {
    "title": "Southern U.S. states saw sharp rise in cases.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 5, 20),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/UScase.png",
    "description": "On June 20, for the third straight day, Florida and South Carolina broke their single-day records for new cases. The news came as infection levels for Missouri and Nevada also reached new highs. On June 19, the United States reported more than 30,000 new infections, its highest since May 1, with cases rising in 19 states across the South, West and Midwest.",
  },

  {
    "title": "The U.S. saw July cases more than double the total of any other month.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 7, 1),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/UScaseJuly.png",
    "description": "The United States recorded more than 1.9 million new infections in July, nearly 42 percent of the more than 4.5 million cases reported nationwide since the pandemic began and more than double the number documented in any other month, according to data compiled by The New York Times. The previous monthly high to this point came in April, when more than 880,000 new cases were recorded.",
  },
  {
    "title": "One day before the United States surpassed 150,000 deaths.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 7, 3),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath150k.jpg",
    "description": "One day before the United States surpassed 150,000 deaths from the coronavirus, Mr. Trump appeared resigned to the toll, saying in an interview with Axios, “It is what it is.”",
  },

  {
    "title": "Global virus deaths surpassed 800,000.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 7, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/gdeath800k.jpg",
    "description": "The global death toll from the coronavirus surpassed 800,000 on Aug. 22. The tally rose as new infections flared in Europe and high numbers of deaths were recorded in the United States, India, South Africa and most of Latin America.",
  },
  {
    "title": "India became the country with the second-highest number of cases with more than 4 million.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 8, 6),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/Indiacase4M.jpg",
    "description": "India, home to the world’s fastest growing coronavirus outbreak, surpassed Brazil to become the country with the second-highest number of cases. The total number of cases in the country on Sept. 6 was more than 4.2 million. Brazil was then ranked third with more than 4.1 million cases.",
  },

  {
    "title": "The U.S. death toll surpassed 200,000.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 8, 22),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath200k.jpg",
    "description": "The death toll in the United States from the coronavirus pandemic passed 200,000 on Sept. 22. More deaths had been announced in the United States than in any other country.",
  },
  {
    "title": "Global deaths reached 1 million.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 8, 28),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/gdeath1M.jpg",
    "description": "In the 10 months since a mysterious pneumonia began striking residents of Wuhan, China, Covid-19 had killed more than one million people worldwide — an agonizing toll compiled from official counts, yet one that far understates how many had really died.",
  },

  {
    "title": "The U.S. surpassed 10 million infections.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 10, 8),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/UScase10M.jng",
    "description": "The United States reached 10 million coronavirus cases on Nov. 8, with the last million added in 10 days time. The grim benchmark arrived as the country struggled to contain outbreaks in the third and most widespread wave of infection since the pandemic began.",
  },
  {
    "title": "The U.S. death toll hit 250,000.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 10, 18),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath250k.jpg",
    "description": "The United States on Nov. 18 reached yet another grim milestone, 250,000 coronavirus-related deaths. That number was expected to sharply increase as infections surged nationwide, particularly in the Midwest and Mountain States.",
  },

  {
    "title": "The U.S. death toll surpassed 300,000.",
    "category": "Bad News","color":am4core.color("C2213A"),"date": new Date(2020, 11, 14),"center": "bottom","link":"https://www.nytimes.com/article/coronavirus-timeline.html","image":"images/2020/v2/USdeath300k.jpg",
    "description": "The coronavirus death toll in the United States surpassed 300,000 on Dec. 14. It was another wrenching record that came less than four weeks after the nation’s virus deaths reached a quarter of a million. Covid-19 surpassed heart disease as the leading cause of death in the United States, the Centers for Disease Control and Prevention director Robert Redfield said.",
  },
]

  
    

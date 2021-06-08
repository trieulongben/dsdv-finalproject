var racingbars;
$.getJSON('data/confirmed.json').success(function(res) {
                    let racingbar = new barChartRace({
                        target: '#racingbar',
                        title: 'Bar Chart for COVID-19'

                    })
                    console.log(res);
                    let histories = formatHistory(res.locations[0].history)
                    histories.forEach(history => {
                        racingbar.sets.push(history)
                    })
                    racingbars=racingbar;
                    mergeData(res.locations).forEach(country => {
                        racingbar.sets.forEach(date => {
                            const dateVal = moment(date, 'MMM D YY').format('M/D/YY')
                            const dateDay = moment(dateVal, 'M/D/YY').dayOfYear()
                            const dateBefore = moment().dayOfYear(dateDay - 1).format('M/D/YY')
                            const colorVal = d3.hsl(Math.random() * 360, 0.75, 0.75)
                            racingbar.series.push({
                                date: date,
                                value: country.history[dateVal],
                                //code: country.country_code,
                                name: country.country,
                                img: "flags/"+country.country_code.toLowerCase()+".svg",
                                color: colorVal,
                                lastValue: country.history[dateBefore] ? country.history[dateBefore] : 0
                            })
                        })
                        racingbar.scores[country.country] = country.latest
                    })
                    
                    let yIndex = racingbar.yIndex;
                    racingbar.date = racingbar.sets[yIndex];

                    racingbar.setSlice = racingbar.series.filter(d => d.date == racingbar.date && !isNaN(d.value))
                        .sort((a,b) => b.value - a.value)
                        
        
                    racingbar.setSlice.forEach((d,i) => d.rank = i);
                    
        
                })
                
                function formatHistory(history) {
                    return Object.keys(history).map(key => {
                        return moment(key, 'M/D/YY').format('MMM D YY')
                    }, [])
                }
                
                function mergeData(arr) {
                    let mergeMap = new Map();
                    arr.forEach(item => {
                        let countryProp = item.country
                        let historyProp = item.history
                        if(mergeMap.has(countryProp)) {
                            for(timeline in item.history) {
                                historyProp[timeline] += item.history[timeline]
                            }
                            mergeMap.set(countryProp, {
                                "country_code": item.country_code,
                                country: item.country,
                                history: historyProp,
                                latest: item.latest
                            })
                        } else {
                            mergeMap.set(countryProp, {
                                "country_code": item.country_code,
                                country: item.country,
                                history: item.history,
                                latest: item.latest
                            })
                        }
                    })
                    return Array.from(mergeMap.values());
                }
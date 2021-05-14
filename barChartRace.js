class barChartRace {

    constructor(options = {}) {
        this.el = document.querySelector(options.target) || options.target;
        this.title = options.title || '';
        this.ranks = options.ranks || [
            { y: 115, text: '#1' },
            { y: 166, text: '#2' },
            { y: 218, text: '#3' },
            { y: 270, text: '#4' },
            { y: 319, text: '#5' },
            { y: 371, text: '#6' },
            { y: 422, text: '#7' },
            { y: 474, text: '#8' },
            { y: 525, text: '#9' },
            { y: 577, text: '#10' }
        ];
        this.tickDuration = options.tickDuration || 500;
        this.delayDuration = options.delayDuration || 500; //4000
        this.top = options.top || 10;
        this.height = options.height || 600;
        this.width = options.width || 1366 - 80;
        this.margin = options.margin || {
            top: 80,
            right: 0,
            bottom: 5,
            left: 80
        };
        this.barPadding = options.barPadding || (this.height - (this.margin.bottom + this.margin.top)) / (this.top * 5);
        this.sets = options.sets || [];
        this.setSlice = options.setSlice || [];
        this.series = options.series || [];
        this.scores = options.scores || {};
        this.x = this.xScaleLinear();
        this.y = this.yScaleLinear();
        this.xAxis = this.d3AxisTop();
        this.date = options.date || 'Jan 22',
            this.info = options.info || {
                'Jan 23 20': {
                    image: 'images/Jan-23.jpg',
                    text: 'China imposed a lockdown in Wuhan and other cities in Hubei province'
                },
                'Feb 15 20': {
                    image: 'images/Feb-15.jpg',
                    text: 'the US announced it would evacuate Americans aboard the Diamond Princess'

                },
                'Feb 23 20': {
                    image: 'images/Feb-23.jpg',
                    text: 'the US announced it would evacuate Americans aboard the Diamond Princess'

                },
                'Mar 11 20': {
                    image: 'images/Mar-11.jpg',
                    text: 'the WHO declared the coronavirus outbreak a pandemic'
                },

                'Mar 16 20': {
                    image: 'images/Mar16.jpg',
                    text: 'one Fifth of All Students Worldwide are out of School'
                },
                'Mar 21 20': {
                    image: 'images/Mar21.jpg',
                    text: 'china reports no new Coronavirus cases for its Third Consecutive Day'
                },
                'Mar 29 20': {
                    image: 'images/Mar29.jpg',
                    text: 'Japan Postpones 2020 Summer Olympics'
                },
                'Apr 04 20': {
                    image: 'images/Apr04.jpg',
                    text: 'Worldwide coronavirus cases exceed one million'
                },
                'Apr 12 20': {
                    image: 'images/Apr12.jpg',
                    text: 'the United States has the most Coronavirus deaths in the World'
                },
                'Apr 20 20': {
                    image: 'images/Apr20.jpg',
                    text: 'Austria becomes one of the first European countries to Reopen'
                },
                'Apr 27 20': {
                    image: 'images/Apr-27.jpg',
                    text: 'Mobile Morgue outside a hospital in Hackensack, New Jersey, United States'
                },
                'May 06 20': {
                    image: 'images/May06.jpg',
                    text: 'Global Cases Top 3.5 Million'
                },
                'May 14 20': {
                    image: 'images/May14.jpg',
                    text: 'Hydroxychlorquine is Proven Ineffective'
                },
                'May 19 20': {
                    image: 'images/May-19.jpg',
                    text: 'more than 5.1 million cases have been reported worldwide'
                },
                'May 30 20': {
                    image: 'images/May30.jpg',
                    text: 'four months after first case, U.S. Deaths pass 100,000'
                },
                'Jun 06 20': {
                    image: 'images/Jun06.jpg',
                    text: 'Countries Begin to Reopen'
                },

                'Jun 14 20': {
                    image: 'images/Jun14.jpg',
                    text: 'The United States Sees a Rise in Cases'
                },
                'Jun 22 20': {
                    image: 'images/Jun22.jpg',
                    text: 'FDA Revokes Use of Hydroxychloroquine'
                },
                'Jun 30 20': {
                    image: 'images/Jun30.jpg',
                    text: 'Vaccine Trials in Africa Begin'
                },
                'Jul 08 20': {
                    image: 'images/Jul08.jpg',
                    text: 'Cases in Brazil and the United States Continue to Spike'
                },
                'Jul 16 20': {
                    image: 'images/Jul16.jpg',
                    text: 'White House Orders Hospitals to Bypass CDC'
                },
                'Jul 24 20': {
                    image: 'images/Jul24.jpg',
                    text: 'India Passes One Million Cases'
                },
                'Aug 01 20': {
                    image: 'images/Aug01.jpg',
                    text: 'Mexico  Reports the Third-Highest Death Toll in the World '
                },
                'Aug 09 20': {
                    image: 'images/Aug09.jpg',
                    text: 'COVID-19 Cases in the Philippines pass 100,000 '
                },'Jul 24 20': {
                    image: 'images/Jul24.jpg',
                    text: 'India Passes One Million Cases'
                },
                'Aug 01 20': {
                    image: 'images/Aug01.jpg',
                    text: 'Mexico  Reports the Third-Highest Death Toll in the World '
                },
                'Aug 09 20': {
                    image: 'images/Aug09.jpg',
                    text: 'COVID-19 Cases in the Philippines pass 100,000 '
                },
                'Aug 17 20': {
                    image: 'images/Aug17.jpg',
                    text: 'Russia Approves Vaccine '
                },
                'Aug 25 20': {
                    image: 'images/Aug25.jpg',
                    text: 'First Case of Reinfection Reported '
                },
                'Sep 02 20': {
                    image: 'images/Sep02.jpg',
                    text: 'COVID-19 Cases in Europe Reach March Levels '
                },
                'Sep 10 20': {
                    image: 'images/Sep10.jpg',
                    text: 'Over 500,000 U.S. Children Are Diagnosed With COVID-19 '
                },
                'Sep 18 20': {
                    image: 'images/Sep18.jpg',
                    text: 'India reports over 83,000 new daily cases'
                },
                'Sep 26 20': {
                    image: 'images/Sep26.jpg',
                    text: 'United States Passes 7 Million COVID-19 Cases '
                },
                'Oct 04 20': {
                    image: 'images/Oct04.jpg',
                    text: 'President Trump Diagnosed with COVID-19 '
                },
                'Oct 11 20': {
                    image: 'images/Oct11.jpg',
                    text: 'White House Outbreak Reaches 34 People '
                },
                'Oct 19 20': {
                    image: 'images/Oct19.jpg',
                    text: 'Johnson & Johnson Pauses Vaccine Trial '
                },
                'Oct 27 20': {
                    image: 'images/Oct27.jpg',
                    text: 'Italy Imposes Harshest Lockdown Since March '
                },
                'Nov 04 20': {
                    image: 'images/Nov04.jpg',
                    text: 'The United States Passes 100,000 Cases in One Day; '
                },
                'Nov 11 20': {
                    image: 'images/Nov11.jpg',
                    text: '50 Million Cases Globally '
                },
                'Nov 18 20': {
                    image: 'images/Nov18.jpg',
                    text: 'Pfizer-BioNTech Announce 94 Percent Vaccine Efficacy '
                },
                'Nov 26 20': {
                    image: 'images/Nov26.jpg',
                    text: 'Samoa Announces Its First Case  '
                },
                'Nov 26 20': {
                    image: 'images/Nov26.jpg',
                    text: 'Samoa Announces Its First Case  '
                },
                'Dec 04 20': {
                    image: 'images/Dec04.jpg',
                    text: 'UK Grants First Emergency Use Authorization to Pfizer-BioNTech Vaccine  '
                },
                'Dec 04 20': {
                    image: 'images/Dec04.jpg',
                    text: 'UK Grants First Emergency Use Authorization to Pfizer-BioNTech Vaccine  '
                },
                'Dec 13 20': {
                    image: 'images/Dec13.jpg',
                    text: 'UK Grants First Emergency Use Authorization to Pfizer-BioNTech Vaccine  '
                },
                'Dec 20 20': {
                    image: 'images/Dec20.jpg',
                    text: 'EU Countries Impose Travel Restrictions on UK;  '
                },
                'Dec 20 20': {
                    image: 'images/Dec20.jpg',
                    text: 'EU Countries Impose Travel Restrictions on UK;  '
                },
                'Dec 28 20': {
                    image: 'images/Dec28.jpg',
                    text: 'Brazil Completes Phase III SinoVac Trials  '
                },
                'Jan 05 21': {
                    image: 'images/jan05.jpg',
                    text: 'Brazil Completes Phase III SinoVac Trials  '
                },
                'Jan 13 21': {
                    image: 'images/jan13.jpg',
                    text: 'The United States Passes 4,000 COVID-19 Deaths  '
                },
                'Jan 21 21': {
                    image: 'images/jan21.jpg',
                    text: 'Global Death Toll Passes 2 Million  '
                },
                'Jan 29 21': {
                    image: 'images/jan29.jpg',
                    text: 'U.S. COVID-19 Cases Decline By 16 Percent  '
                },
                'Feb 05 21': {
                    image: 'images/feb05.jpg',
                    text: 'COVAX to Distribute 2 Million Doses to North Korea  '
                },
                'Feb 14 21': {
                    image: 'images/feb14.jpg',
                    text: 'COVID-19 Vaccine Will Not be Required For Olympic Athletes  '
                },
                'Feb 22 21': {
                    image: 'images/feb22.jpg',
                    text: 'The United States Passes 500,000 Deaths  '
                },
                'Mar 03 21': {
                    image: 'images/mar03.jpg',
                    text: 'Pfizer Considers a Booster Shot  '
                },
                'Mar 11 21': {
                    image: 'images/mar11.jpg',
                    text: 'Daily COVID-19 Tests Decline by 25 Percent  '
                },
                'Feb 14 21': {
                    image: 'images/feb14.jpg',
                    text: 'COVID-19 Vaccine Will Not be Required For Olympic Athletes  '
                },
                'Feb 22 21': {
                    image: 'images/feb22.jpg',
                    text: 'The United States Passes 500,000 Deaths  '
                },
                'Mar 03 21': {
                    image: 'images/mar03.jpg',
                    text: 'Pfizer Considers a Booster Shot  '
                },
                'Mar 11 21': {
                    image: 'images/mar11.jpg',
                    text: 'Daily COVID-19 Tests Decline by 25 Percent  '
                },
                'Mar 19 21': {
                    image: 'images/mar19.jpg',
                    text: 'EU and UK Want Vaccine Passports   '
                },
                'Mar 27 21': {
                    image: 'images/mar27.jpg',
                    text: 'COVID Infections Surge Around the World   '
                },
                'Apr 03 21': {
                    image: 'images/apr03.jpg',
                    text: 'WHO Report Released and EU Clashes Over Vaccines   '
                },
                'Apr 11 21': {
                    image: 'images/apr11.jpg',
                    text: 'Cases Surge in India; Concerns Remain Over AstraZeneca   '
                },
                'Apr 19 21': {
                    image: 'images/apr19.jpg',
                    text: 'Vaccines Expire in Africa   '
                },
                'Apr 27 21': {
                    image: 'images/apr27.jpg',
                    text: 'Global COVID-19 Cases Increase for the Eighth Consecutive Week   '
                },
                'May 05 21': {
                    image: 'images/may05.jpg',
                    text: 'India Crisis Deepens   '
                },
                'May 13 21': {
                    image: 'images/may13.jpg',
                    text: 'COVAX Vaccine Supply Grows   '
                },
            
            };
        this.yIndex = options.yIndex || 0;
        this.svg = d3.select(this.el).append("svg").attr("width", this.width).attr("height", this.height);
        this.timeYear = this.svg.append('text').attr('x', this.width - this.margin.right - 400).attr('y', 48).html(this.date).style('text-anchor', 'end').attr('style', 'font-size: 44px; font-weight: 700; opacity: 0.75;');
        this.infoText = this.svg.append('text').attr('x', this.width - this.margin.right - 710).attr('y', this.height - 30).style('text-anchor', 'end').attr('style', 'font-size: 16px; font-weight: 500; opacity: 0.95;');
        this.infoImage = this.svg.append('image').attr('x', this.width - this.margin.right - 100).attr('y', this.height - 100).attr('height', 250).attr('width', 300).attr('transform', 'translate(-150,-200)').attr('style', 'fill: light-grey;');

        this.vector();
    }

    vector() {
        let svg = this.svg;
        svg.append('text').attr("x", 45).attr('y', 45).html(this.title).attr('style', 'font-size: 28px; font-weight: 700; opacity: 0.75;');

        svg.append('g').attr('class', 'axis xAxis').attr('transform', `translate(0, ${this.margin.top})`).call(this.xAxis).selectAll('.tick line').classed('origin', d => d == 0);

        svg.selectAll('rect.bar').data(this.setSlice, d => d.name).enter().append('rect').attr('class', 'bar').attr('x', this.x(0) + 1).attr('width', d => x(d.lastValue) - x(0)).attr('y', d => this.y(d.rank) + 5).attr('height', this.y(1) - this.y(0) - this.barPadding).style('fill', d => d.color);

        const group = svg.selectAll('svg.label').data(this.setSlice, d => d.name).enter().append('svg').attr('class', 'label').attr('x', d => this.x(d.lastValue) - 8).attr('y', d => this.y(d.rank) + 5 + ((this.y(1) - this.y(0)) / 2) + 1);
        group.append('text').attr('class', 'label').attr('dx', -40).attr('dy', 20).html(d => d.name)
        group.append('image').attr('class', 'flag').attr('width', 35).attr('height', 25).attr('x', -35).attr('y', 3).attr("xlink:href", d => d.img)

        svg.selectAll('text.valueLabel').data(this.setSlice, d => d.name).enter().append('text').attr('class', 'valueLabel').attr('x', d => this.x(d.lastValue) + 5).attr('y', d => this.y(d.rank) + 10).text(d => d3.format(',.0f')(d.lastValue));

        this.rank();
    }

    rank() {
        let svg = this.svg.append("g");
        svg.append("rect").attr('width', 80).attr('height', 600).attr('x', 0).attr('y', 46).attr('fill', '#2A2F34');
        this.ranks.forEach(item => {
            svg.append("text").attr("x", 25).attr("y", item.y).html(item.text).attr('style', 'font-size: 26px; font-weight: 700; fill: #ffffff;');
        });
    }

    xScaleLinear() {
        return d3.scaleLinear().domain([0, d3.max(this.setSlice, d => d.value)]).range([this.margin.left, this.width - this.margin.right - 65]);
    }

    yScaleLinear() {
        return d3.scaleLinear().domain([this.top, 0]).range([this.height - this.margin.bottom, this.margin.top]);
    }

    d3AxisTop() {
        return d3.axisTop().scale(this.x).ticks(this.width > 500 ? 5 : 2).tickSize(-(this.height - this.margin.top - this.margin.bottom)).tickFormat(d => d3.format(',')(d));
    }

    updateInfoLabel() {
        if (this.info[this.date]) {
            this.infoText.html(`On ${this.date}20, ${this.info[this.date].text}.`);
            this.infoImage.attr("xlink:href", this.info[this.date].image);
        }
    }

    update() {
        var interval = d3.interval(e => {

            this.setSlice = this.series.filter(d => d.date == this.date && !isNaN(d.value))
                .sort((a, b) => b.value - a.value)
                .slice(0, this.top);

            this.setSlice.forEach((d, i) => d.rank = i);

            this.x.domain([0, d3.max(this.setSlice, d => d.value)]);

            this.svg.select('.xAxis')
                .transition()
                .duration(this.tickDuration)
                .ease(d3.easeLinear)
                .call(this.xAxis);

            let bars = this.svg.selectAll('.bar').data(this.setSlice, d => d.name);

            bars
                .enter()
                .append('rect')
                .attr('class', d => `bar ${d.name.replace(/\s/g, '_')}`)
                .attr('x', this.x(0) + 1)
                .attr('width', d => this.x(d.value) - this.x(0) - 20)
                .attr('y', d => this.y(this.top + 1) + 5)
                .attr('height', this.y(1) - this.y(0) - this.barPadding)
                .style('fill', d => d.color)
                .transition()
                .duration(this.tickDuration)
                .ease(d3.easeLinear)
                .attr('y', d => this.y(d.rank) + 5);

            bars
                .transition()
                .duration(this.tickDuration)
                .ease(d3.easeLinear)
                .attr('width', d => this.x(d.value) - this.x(0) - 21)
                .attr('y', d => this.y(d.rank) + 5);

            bars
                .exit()
                .transition()
                .duration(this.tickDuration)
                .ease(d3.easeLinear)
                .attr('width', d => this.x(d.value) - this.x(0) - 21)
                .attr('y', d => this.y(this.top + 1) + 5)
                .remove();

            let labels = this.svg.selectAll('svg.label')
                .data(this.setSlice, d => d.name);

            const group = labels
                .enter()
                .append('svg')
                .attr('class', 'label')
                .attr('x', d => this.x(d.value) - 28)
                .attr('y', d => this.y(this.top + 1) + 10)
                ;

            group
                .transition()
                .duration(this.tickDuration)
                .ease(d3.easeLinear)
                .attr('y', d => this.y(d.rank) + 10)
                ;

            group.append('text')
                .attr('class', 'label')
                .attr('dx', -40)
                .attr('dy', 20)
                .html(d => d.name)

            group.append('image')
                .attr('class', 'flag')
                .attr('width', 35)
                .attr('height', 20)
                .attr('x', -35)
                .attr('y', 3)
                //.attr('xlink:href', d => `https://disease.sh/assets/img/flags/${d.code}.png`)
                .attr("xlink:href", d => d.img)

            labels
                .transition()
                .duration(this.tickDuration)
                .ease(d3.easeLinear)
                .attr('x', d => this.x(d.value) - 28)
                .attr('y', d => this.y(d.rank) + 10);

            labels
                .exit()
                .transition()
                .duration(this.tickDuration)
                .ease(d3.easeLinear)
                .attr('x', d => this.x(d.value) - 28)
                .attr('y', d => this.y(this.top + 1) + 5)
                .remove();




            this.updateInfoLabel();
            this.rank();
            this.timeYear.html(this.date);

            this.yIndex++;
            if (this.yIndex >= this.sets.length) {
                interval.stop();
            }
            this.date = this.sets[this.yIndex];

        }, this.delayDuration);

        return interval;
    }

}

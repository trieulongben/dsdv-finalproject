
class barChartRace {

    constructor(options = {}) {
        this.el = document.querySelector(options.target) || options.target;
        this.title = options.title || '';
        this.ranks = options.ranks || [
            { y: 103, text: '#1' },
            { y: 129, text: '#2' },
            { y: 155, text: '#3' },
            { y: 181, text: '#4' },
            { y: 207, text: '#5' },
            { y: 233, text: '#6' },
            { y: 259, text: '#7' },
            { y: 284, text: '#8' },
            { y: 312, text: '#9' },
            { y: 335, text: '#10' }

        ];
        this.tickDuration = options.tickDuration || 500;
        this.delayDuration = options.delayDuration || 500; //4000
        this.top = options.top || 10;
        this.height = options.target.height || 350;
        this.width = options.target.width || 800;

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
        this.date = options.date || 'Jan 22 20',
            this.info = options.info || {
                'Jan 23 20': {
                    image: 'images/2020/v1/Jan-23.jpg',
                    text: 'China imposed a lockdown in Wuhan '
                },
                'Feb 15 20': {
                    image: 'images/2020/v1/Feb-15.jpg',
                    text: ' evacuate Americans aboard the Diamond Princess'

                },
                'Feb 23 20': {
                    image: 'images/2020/v1/Feb-23.jpg',
                    text: ' evacuate Americans aboard the Diamond Princess'

                },
                'Mar 11 20': {
                    image: 'images/2020/v1/Mar-11.jpg',

                    text: 'the WHO declared the coronavirus outbreak a pandemic'
                },

                'Mar 16 20': {
                    image: 'images/2020/Mar-16.jpg',
                    text: 'Latin America began to feel the effects.'
                },
                'Mar 21 20': {
                    image: 'images/2020/Mar-21.jpg',
                    text: 'china reports no new Coronavirus cases '
                },
                'Mar 29 20': {
                    image: 'images/2020/Mar-29.jpg',
                    text: 'Japan Postpones 2020 Summer Olympics'
                },
                'Apr 04 20': {
                    image: 'images/2020/Apr-4.jpg',
                    text: 'Worldwide coronavirus cases exceed one million'
                },
                'Apr 12 20': {
                    image: 'images/2020/Apr-12.jpg',
                    text: 'the United States has the most Coronavirus deaths.'
                },
                'Apr 20 20': {
                    image: 'images/2020/Apr-20.jpg',
                    text: 'Austria becomes one of the first countries to Reopen'
                },
                'Apr 27 20': {
                    image: 'images/2020/Apr-27.jpg',
                    text: 'Mobile Morgue outside a hospital in Hackensack.'
                },
                'May 06 20': {
                    image: 'images/2020/May-6.jpg',
                    text: 'Global Cases Top 3.5 Million'
                },
                'May 14 20': {
                    image: 'images/2020/May-14.jpg',
                    text: 'Hydroxychlorquine is Proven Ineffective'
                },
                'May 19 20': {
                    image: 'images/2020/May-19.jpg',
                    text: 'more than 5.1 million cases have been reported .'
                },
                'May 30 20': {
                    image: 'images/2020/May-30.jpg',
                    text: 'four months after first case, U.S. Deaths pass 100,000'
                },
                'Jun 06 20': {
                    image: 'images/2020/June-6.jpg',

                    text: 'Countries Begin to Reopen'
                },

                'Jun 14 20': {
                    image: 'images/2020/June-14.jpg',
                    text: 'The United States Sees a Rise in Cases'
                },
                'Jun 22 20': {
                    image: 'images/2020/June-22.jpg',
                    text: 'FDA Revokes Use of Hydroxychloroquine'
                },
                'Jun 30 20': {
                    image: 'images/2020/June-30.jpg',
                    text: 'Vaccine Trials in Africa Begin'
                },
                'Jul 08 20': {
                    image: 'images/2020/July-8.jpg',
                    text: 'Cases in the United States Continue to Spike'
                },
                'Jul 16 20': {
                    image: 'images/2020/July-16.jpg',
                    text: 'White House Orders Hospitals to Bypass CDC'
                },
                'Jul 24 20': {
                    image: 'images/2020/July-24.jpg',
                    text: 'India Passes One Million Cases'
                },
                'Aug 01 20': {
                    image: 'images/2020/Aug-1.jpg',
                    text: 'Mexico  Reports the Third-Highest Death Toll '
                },
                'Aug 09 20': {
                    image: 'images/2020/Aug-9.jpg',
                    text: 'COVID-19 Cases in the Philippines pass 100,000 '
                },
                'Aug 17 20': {
                    image: 'images/2020/Aug-17.jpg',
                    text: 'Russia Approves Vaccine '
                },
                'Aug 25 20': {
                    image: 'images/2020/Aug-25.jpg',
                    text: 'First Case of Reinfection Reported '
                },
                'Sep 02 20': {
                    image: 'images/2020/Sep-2.jpg',
                    text: 'COVID-19 Cases in Europe Reach March Levels '
                },
                'Sep 10 20': {
                    image: 'images/2020/Sep-10.jpg',
                    text: 'Over 500,000 U.S.Children Are Diagnosed With COVID-19 '
                },
                'Sep 18 20': {
                    image: 'images/2020/Sep-18.jpg',
                    text: 'India reports over 83,000 new daily cases'
                },
                'Sep 26 20': {
                    image: 'images/2020/Sep-26.jpg',
                    text: 'United States Passes 7 Million COVID-19 Cases '
                },
                'Oct 04 20': {
                    image: 'images/2020/Oct-4.jpg',
                    text: 'President Trump Diagnosed with COVID-19 '
                },
                'Oct 11 20': {
                    image: 'images/2020/Oct-11.jpg',
                    text: 'White House Outbreak Reaches 34 People '
                },
                'Oct 19 20': {
                    image: 'images/2020/Oct-19.jpg',
                    text: 'Johnson & Johnson Pauses Vaccine Trial '
                },
                'Oct 27 20': {
                    image: 'images/2020/Oct-27.jpg',
                    text: 'Italy Imposes Harshest Lockdown Since March '
                },
                'Nov 04 20': {
                    image: 'images/2020/Nov-4.jpg',
                    text: 'The United States Passes 100,000 Cases in One Day; '
                },
                'Nov 11 20': {
                    image: 'images/2020/Nov-11.jpg',
                    text: '50 Million Cases Globally '
                },
                'Nov 18 20': {
                    image: 'images/2020/Nov-18.jpg',
                    text: 'Pfizer-BioNTech Announce 94 Percent Vaccine Efficacy '
                },
                'Nov 26 20': {
                    image: 'images/2020/Nov-26.jpg',
                    text: 'Samoa Announces Its First Case  '
                },
                'Dec 04 20': {
                    image: 'images/2020/Dec-4.jpg',
                    text: 'UK Grants First Emergency Use Authorization to Vaccine  '
                },
                'Dec 13 20': {
                    image: 'images/2020/Dec-13.jpg',
                    text: 'UK Grants First Emergency Use Authorization to Vaccine  '
                },
                'Dec 20 20': {
                    image: 'images/2020/Dec-20.jpg',
                    text: 'EU Countries Impose Travel Restrictions on UK;  '
                },
                'Dec 28 20': {
                    image: 'images/2020/Dec-28.jpg',
                    text: 'Brazil Completes Phase III SinoVac Trials  '
                },/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                'Jan 05 21': {
                    image: 'images/2021/Jan-5.jpg',
                    text: 'Brazil Completes Phase III SinoVac Trials  '
                },
                'Jan 13 21': {
                    image: 'images/2021/Jan-13.jpg',
                    text: 'The United States Passes 4,000 COVID-19 Deaths  '
                },
                'Jan 21 21': {
                    image: 'images/2021/Jan-21.jpg',
                    text: 'Global Death Toll Passes 2 Million  '
                },
                'Jan 29 21': {
                    image: 'images/2021/Jan-29.jpg',
                    text: 'U.S. COVID-19 Cases Decline By 16 Percent  '
                },
                'Feb 05 21': {
                    image: 'images/2021/Feb-5.jpg',
                    text: 'COVAX to Distribute 2 Million Doses to North Korea '
                },
                'Feb 14 21': {
                    image: 'images/2021/Feb-14.jpg',
                    text: 'COVID-19 Vaccine Will Not be Required For Olympic '
                },
                'Feb 22 21': {
                    image: 'images/2021/Feb-22.jpg',
                    text: 'The United States Passes 500,000 Deaths  '
                },
                'Mar 03 21': {
                    image: 'images/2021/Mar-3.jpg',
                    text: 'Pfizer Considers a Booster Shot  '
                },
                'Mar 11 21': {
                    image: 'images/2021/Mar-11.jpg',
                    text: 'Daily COVID-19 Tests Decline by 25 Percent  '
                },
                'Mar 19 21': {
                    image: 'images/2021/Mar-19.jpg',
                    text: 'EU and UK Want Vaccine Passports   '
                },
                'Mar 27 21': {
                    image: 'images/2021/Mar-27.jpg',
                    text: 'COVID Infections Surge Around the World   '
                },
                'Apr 03 21': {
                    image: 'images/2021/Apr-3.jpg',
                    text: 'WHO Report Released and EU Clashes Over Vaccines   '
                },
                'Apr 11 21': {
                    image: 'images/2021/Apr-11.jpg',
                    text: 'Cases Surge in India Concerns Remain Over AstraZeneca '
                },
                'Apr 19 21': {
                    image: 'images/2021/Apr-19.jpg',
                    text: 'Vaccines Expire in Africa   '
                },
                'Apr 27 21': {
                    image: 'images/2021/Apr-27.jpg',
                    text: 'Global COVID-19 Cases Increase for the Eighth Week   '
                },
                'May 05 21': {
                    image: 'images/2021/May-5.jpg',
                    text: 'India Crisis Deepens   '
                },
                'May 13 21': {
                    image: 'images/2021/May-13.jpg',

                    text: 'COVAX Vaccine Supply Grows   '
                },
            
            };
            this.yIndex = options.yIndex || 0;
            this.svg = d3.select(this.el).append("svg").attr("width", this.width).attr("height", this.height);
            this.timeYear = this.svg.append('text').attr('x', this.width - this.margin.right - 430).attr('y', 70 ).html(this.date).style('text-anchor', 'end').attr('style', 'font-size: 25px; font-weight: 700; opacity: 0.75;fill: white;');
            this.infoText = this.svg.append('text').attr('x', this.width - this.margin.right - 400).attr('y', this.height - 30).style('text-anchor', 'end').attr('style', 'font-size: 12px; font-weight: 100; opacity: 0.95; fill: Orange;')
            this.infoImage = this.svg.append('image').attr('x', this.width - this.margin.right - 170).attr('y', this.height - 40).attr('height', 185).attr('width', 210).attr('transform', 'translate(-150,-200)').attr('style', 'fill: light-grey;');
    

        this.vector();
    }

    vector() {
        let svg = this.svg;
        svg.append('text').attr("x", 45).attr('y', 45).html(this.title).attr('style', 'font-size: 28px; font-weight: 700; opacity: 0.75;color:white');

        svg.append('g').attr('class', 'axis xAxis').attr('transform', `translate(0, ${this.margin.top})`).call(this.xAxis).selectAll('.tick line').classed('origin', d => d == 0);




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
            svg.append("text").attr("x", 35).attr("y", item.y -4).html(item.text).attr('style', 'font-size: 20px; font-weight: 700; fill: white;');

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

   

    updateByDate(inputDate) {
        console.log(this.sets.length)

            this.yIndex=inputDate;
            this.date = this.sets[this.yIndex]; //sets là array containt từ ngày Jan 22 đến Jun 5
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
                .attr('dx', + 10)                 
                .attr('dy', 10)                         //////////////////////////
                .attr('style', 'fill: white;')

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

        
        }


}

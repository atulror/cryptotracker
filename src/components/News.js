import React, { Component } from 'react';
import NavItem from './NavItem';
import Spinner2 from './Spinner2';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    articles = [
        {
            "source": { "id": "fox-news", "name": "Fox News" },
            "author": "Ryan Gaydos",
            "title": "Aaron Rodgers leads Packers to thrilling victory over 49ers - Fox News",
            "description": "Aaron Rodgers only needed 37 seconds.",
            "url": "https://www.foxnews.com/sports/aaron-rodgers-packers-thrilling-victory-49ers",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/f1023e34-Aaron-Rodgers.jpg",
            "publishedAt": "2021-09-27T03:53:19Z",
            "content": "Aaron Rodgers only needed 37 seconds.\r\nAfter the San Francisco 49ers scored on a 12-yard touchdown pass from Jimmy Garoppolo to Kyle Juszczyk put the team up one point, the Packers quarterback only n… [+1620 chars]"
        },
        {
            "source": { "id": "google-news", "name": "Google News" },
            "author": null,
            "title": "KC Chiefs coach Andy Reid ‘doing well’ in ‘stable condition,’ team says Sunday night - Kansas City Star",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiTmh0dHBzOi8vd3d3LmthbnNhc2NpdHkuY29tL3Nwb3J0cy9uZmwva2Fuc2FzLWNpdHktY2hpZWZzL2FydGljbGUyNTQ1NTE3NzcuaHRtbNIBTmh0dHBzOi8vYW1wLmthbnNhc2NpdHkuY29tL3Nwb3J0cy9uZmwva2Fuc2FzLWNpdHktY2hpZWZzL2FydGljbGUyNTQ1NTE3NzcuaHRtbA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-27T03:27:36Z",
            "content": null
        },
        {
            "source": { "id": "the-washington-post", "name": "The Washington Post" },
            "author": "Peter Marks",
            "title": "Tony Awards 2021: 'Moulin Rouge' wins best musical, and 'The Inheritance' snags best play - The Washington Post",
            "description": "The delayed awards celebrate Broadway shows that opened in the 2019-20 season before the coronavirus shutdown.",
            "url": "https://www.washingtonpost.com/entertainment/theater_dance/tony-awards-2021-moulin-rouge/2021/09/26/a88bb0be-1d4c-11ec-bcb8-0cb135811007_story.html",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/U4C7GDA7FAI6ZM6WRTPL4YGT4I.jpg&w=1440",
            "publishedAt": "2021-09-27T03:26:14Z",
            "content": "The complete list of Tony winners\r\nThe three nominated musicals closed on March 12, 2020, with the rest of Broadways 41 theaters in what turned into the longest shutdown in Broadway history. All thre… [+6700 chars]"
        },
        {
            "source": { "id": null, "name": "NPR" },
            "author": null,
            "title": "Social Democrats Beat Merkel's Bloc In German Elections - NPR",
            "description": "The center-left Social Democrats narrowly defeated outgoing Chancellor Angela Merkel's center-right Union bloc. The winning party must forge an alliance with its rivals to form a government.",
            "url": "https://www.npr.org/2021/09/26/1040818820/social-democrats-beat-merkels-bloc-in-german-elections",
            "urlToImage": "https://media.npr.org/assets/img/2021/09/26/ap21269588550721_wide-3202fc7a8711d42e9dba97396e8551d9808ef08e.jpg?s=1400",
            "publishedAt": "2021-09-27T03:22:23Z",
            "content": "Guests at the election party of Die Linke react at the Karl-Liebknecht-Haus after the publication of the first forecasts on the outcome of the 2021 federal election, in Berlin on Sunday.\r\nJan Woitas/… [+858 chars]"
        },
        {
            "source": { "id": null, "name": "Gizmodo.com" },
            "author": "Jody Serrano",
            "title": "Stop Trying to Unlock Your iPhone 13 With Your Apple Watch. It Won't Work - Gizmodo",
            "description": "Apple said on Sunday that the 'Unlock with Apple Watch' feature might not work on some iPhone 13s. It will fix the problem in a future software update.",
            "url": "https://gizmodo.com/you-should-stop-trying-to-unlock-your-iphone-13-with-yo-1847749668",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1e58f6a0581f766164d10580d902a7ec.jpg",
            "publishedAt": "2021-09-27T02:27:00Z",
            "content": "If youre tired trying to unlock your iPhone 13 with your Apple Watch only to fail miserably, dont worry: You are not alone.\r\nApple said on Sunday in a support note that its handy Unlock with Apple Wa… [+1653 chars]"
        },
        {
            "source": { "id": null, "name": "CNBC" },
            "author": "Ali Stafford",
            "title": "Ryder Cup 2020: Europe humiliated as Team USA cruise to history-making victory at Whistling Straits - CNBC",
            "description": "Europe slumped to the heaviest defeat in Ryder Cup history as Team USA impressed in the Sunday singles to claim a dominant 19-9 victory, Sky Sports reports.",
            "url": "https://www.cnbc.com/2021/09/27/ryder-cup-europe-humiliated-as-usa-cruises-to-record-breaking-win.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106947439-1632707188186-gettyimages-1235527700-Ryder_Cup.jpeg?v=1632707154",
            "publishedAt": "2021-09-27T02:14:00Z",
            "content": "Team USA took a six-point advantage into the final day in Wisconsin and required just 3.5 points in the Sunday singles to regain the trophy, with Steve Stricker's team in command throughout as they s… [+2478 chars]"
        },
        {
            "source": { "id": null, "name": "New York Post" },
            "author": "Patrick Reilly",
            "title": "Victim IDed in fatal Amtrak crash in Montana - New York Post ",
            "description": "A 28-year-old man has been identified as one of the three people who died in the Amtrak derailment in Montana on Saturday that also injured over 50 people.",
            "url": "https://nypost.com/2021/09/26/victim-ided-in-fatal-amtrak-crash-in-montana/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/09/amtrak-victim.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-09-27T02:10:00Z",
            "content": "A 28-year-old married man has been identified as one of the three people who died in the fatal Amtrak derailment in Montana on Saturday that also injured over 50 people.\r\nZach Schneider was traveling… [+4882 chars]"
        },
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Paul LeBlanc, CNN",
            "title": "Liz Cheney rebukes Republican critics: Trump 'doesn't believe in the rule of law' - CNN",
            "description": "GOP Rep. Liz Cheney, one of just two Republicans on the select committee investigating the January 6 insurrection, brushed off her GOP detractors in a new interview, stating pointedly that former President Donald Trump \"doesn't believe in the rule of law.\"",
            "url": "https://www.cnn.com/2021/09/26/politics/liz-cheney-donald-trump-january-6/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210512145749-cheney-closeup-super-tease.jpg",
            "publishedAt": "2021-09-27T01:49:00Z",
            "content": "Washington (CNN)GOP Rep. Liz Cheney, one of just two Republicans on the select committee investigating the January 6 insurrection, brushed off her GOP detractors in a new interview, stating pointedly… [+4801 chars]"
        },
        {
            "source": { "id": "google-news", "name": "Google News" },
            "author": null,
            "title": "Crypto Exchanges Stop Taking China Users as Beijing Widens Ban - Bloomberg Markets and Finance",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OWxJZGxhcGxNVXfSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-27T01:03:45Z",
            "content": null
        },
        {
            "source": { "id": null, "name": "Yahoo Entertainment" },
            "author": "Antoinette Siu",
            "title": "‘Jagged Little Pill’ Star Lauren Patten’s Tony Award Win Ignites Outrage - Yahoo Entertainment",
            "description": "Broadway production is being investigated by the labor union for alleged harmful environment for trans, non-binary communities",
            "url": "https://www.yahoo.com/entertainment/jagged-little-pill-star-lauren-004235887.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/NRdgAaqyvzFBja4rJR.94w--~B/aD01NzY7dz0xMDI0O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/thewrap.com/bed8cf9a5484df04b1756042c3c58465",
            "publishedAt": "2021-09-27T00:56:15Z",
            "content": "Star of “Jagged Little Pill,” Lauren Patten, took home a Tony on Sunday for Best Actress in a Musical, but her win sparked an internet firestorm.\r\nPatten’s award comes as the Actors’ Equity Associati… [+2876 chars]"
        },
        {
            "source": { "id": null, "name": "New York Times" },
            "author": "Catie Edmondson",
            "title": "Speaker Pelosi Delays Vote on Infrastructure Bill - The New York Times",
            "description": "Speaker Nancy Pelosi of California said that the House would take up the $1 trillion bill on Thursday, hours before government funding is scheduled to lapse.",
            "url": "https://www.nytimes.com/2021/09/26/us/politics/infrastructure-vote-pelosi.html",
            "urlToImage": "https://static01.nyt.com/images/2021/09/26/us/26dc-cong/26dc-cong-facebookJumbo.jpg",
            "publishedAt": "2021-09-27T00:45:40Z",
            "content": "Ms. Pelosis announcement that the House would aim to pass the infrastructure bill later in the week reflected the difficulty of the task that Democratic leaders face as they feverishly try to knit to… [+1039 chars]"
        },
        {
            "source": { "id": "politico", "name": "Politico" },
            "author": "Natasha Korecki, Laura Barrón-López",
            "title": "Joe Biden, welcome to the thunderdome - POLITICO",
            "description": "The president spent the weekend working the phones in hopes of getting his party to pass his domestic agenda.",
            "url": "https://www.politico.com/news/2021/09/26/joe-biden-thunderdome-514322",
            "urlToImage": "https://static.politico.com/d7/a9/bd0f00a64ab9a323df821b2013d0/210926-joe-biden-ap-773.jpg",
            "publishedAt": "2021-09-27T00:39:09Z",
            "content": "Allies are spending another $4 million in ads starting this week urging unity around two massive spending plans, according to numbers made available to POLITICO by Climate Power &amp; the League of C… [+6410 chars]"
        },
        {
            "source": { "id": null, "name": "New York Times" },
            "author": "Anne Barnard, Grace Ashford, Neil Vigdor",
            "title": "These Health Care Workers Would Rather Get Fired Than Get Vaccinated - The New York Times",
            "description": "Monday is the vaccination deadline for New York State health care workers. Thousands of refusers have failed to meet it.",
            "url": "https://www.nytimes.com/2021/09/26/nyregion/health-workers-vaccination.html",
            "urlToImage": "https://static01.nyt.com/images/2021/09/26/us/26nyvaccinemandate-3/26nyvaccinemandate-3-facebookJumbo.jpg",
            "publishedAt": "2021-09-26T23:50:45Z",
            "content": "Pope Francis and the leaders of many major religions have endorsed vaccine mandates.\r\nThe plaintiffs, like other health care workers opposing the mandate, contend that the state is not taking into ac… [+4417 chars]"
        },
        {
            "source": { "id": null, "name": "Behind the Steel Curtain" },
            "author": "Geoffrey Benedict",
            "title": "Najee Harris breaks Pittsburgh Steelers record in Bengals game - Behind the Steel Curtain",
            "description": "The Steelers running back set a new standard for receptions in a game.",
            "url": "https://www.behindthesteelcurtain.com/2021/9/26/22695458/najee-harris-breaks-pittsburgh-steelers-reception-record-against-the-bengals-henry-minarik",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/qKci2vaGQZxC8oDgZ_pqlbZ_46E=/0x0:2323x1216/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22880410/1342860533.jpg",
            "publishedAt": "2021-09-26T23:45:00Z",
            "content": "The Steelers offense struggled mightily in their loss to the Cincinnati Bengals. One of the few bright spots was the play of Najee Harris, who contributed 142 yards, leading the team in both rushing … [+2154 chars]"
        },
        {
            "source": { "id": "business-insider", "name": "Business Insider" },
            "author": "Sarah Al-Arshani",
            "title": "A Michigan doctor said 6 out of 8 patients who questioned his medical advice on COVID-19 have died - Yahoo News",
            "description": "\"The answer was to have been vaccinated — but they were not and now they're angry at the medical community for their failure,\" Dr. Matthew Trunsky said.",
            "url": "https://www.businessinsider.com/a-michigan-doctor-said-most-patients-decried-covid-19-died-2021-9",
            "urlToImage": "https://i.insider.com/6150f1062fb46b0019be28b7?width=1200&format=jpeg",
            "publishedAt": "2021-09-26T23:30:43Z",
            "content": "A Michigan pulmonologist recounted interactions with eight patients who were severely suffering from COVID-19 while they ignored the reality of the virus in a Facebook post.\r\nOn Friday, Dr. Matthew T… [+2224 chars]"
        },
        {
            "source": { "id": "google-news", "name": "Google News" },
            "author": null,
            "title": "Demi Lovato and Adam Lambert Duet \"Mad World\" | Global Citizen Live - Global Citizen",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9eFpxTExlbjEzZEHSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-26T23:17:35Z",
            "content": null
        },
        {
            "source": { "id": null, "name": "The Guardian" },
            "author": "Ben Quinn",
            "title": "Covid has wiped out years of progress on life expectancy, finds study - The Guardian",
            "description": "Pandemic behind biggest fall in life expectancy in western Europe since second world war, say researchers",
            "url": "https://amp.theguardian.com/society/2021/sep/27/covid-has-wiped-out-years-of-progress-on-life-expectancy-finds-study",
            "urlToImage": null,
            "publishedAt": "2021-09-26T23:01:00Z",
            "content": "Life expectancyPandemic behind biggest fall in life expectancy in western Europe since second world war, say researchers\r\nThe Covid pandemic has caused the biggest decrease in life expectancy in west… [+3651 chars]"
        },
        {
            "source": { "id": "google-news", "name": "Google News" },
            "author": null,
            "title": "Sunday 5 PM Tropical update: Hurricane Sam expected to track North - WWLTV",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ODNFc29xY19BcjDSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-26T22:53:49Z",
            "content": null
        },
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Jeffrey Toobin, CNN",
            "title": "The road to Aduhelm: What one ex-FDA adviser called 'probably the worst drug approval decision in recent US history' for an Alzheimer's treatment - CNN",
            "description": "Dr. Aaron Kesselheim had been on an advisory committee for the US Food and Drug Administration for a half-dozen years, but he had never been to a meeting like this one.",
            "url": "https://www.cnn.com/2021/09/26/politics/alzheimers-drug-aduhelm-fda-approval/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210910142140-dr-aaron-kesselheim-restricted-super-tease.jpg",
            "publishedAt": "2021-09-26T22:00:00Z",
            "content": "We strongly advocated approval on the basis of the available science, knowing full well that this is no cure. It is a really marginal advantage, but that marginal difference can make a real differenc… [+83 chars]"
        },
        {
            "source": { "id": "engadget", "name": "Engadget" },
            "author": "https://www.engadget.com/about/editors/jon-fingas",
            "title": "Hubble telescope helps find six 'dead' galaxies from the early universe - Engadget",
            "description": "The Hubble telescope and ALMA have found six 'dead' early galaxies that stopped forming stars unusually quickly..",
            "url": "https://www.engadget.com/hubble-dead-early-galaxies-210407505.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/ea5f0d20-1f08-11ec-bdff-de301f8df8a2",
            "publishedAt": "2021-09-26T21:04:34Z",
            "content": "You'd think large galaxies in the early universe would have had plenty of 'fuel' left for new stars, but a recent discovery suggests that wasn't always the case. Astronomers using the Hubble Space Te… [+1435 chars]"
        }
    ];

    static defaultProps = {
        country: "in",
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            cpage: 1,
            loading: true,
            pages: 0
        }
    }



    // commented to prevent reach limit of the API
    async componentDidMount() {
        this.props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=12778e1767df45438cfd4d814b5b6b22&category=${this.props.category}&pageSize=12&page=1`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            loading: false,
            pages: parsedData.totalResults
        })
        this.props.setProgress(100);
    }

    // getData = async (url) => {
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    // BUTTONS COMMENTED OUT TO ADD INFINITE SCROLL INSTEAD
    // prevBtn = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=12778e1767df45438cfd4d814b5b6b22&pageSize=12&page=${this.state.cpage - 1}`;
    //     this.getData(url);
    //     this.setState({
    //         cpage: this.state.cpage - 1
    //     })
    // }

    // nextBtn = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=12778e1767df45438cfd4d814b5b6b22&pageSize=12&page=${this.state.cpage + 1}`;
    //     this.getData(url);
    //     this.setState({
    //         cpage: this.state.cpage + 1,
    //     })
    // }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=12778e1767df45438cfd4d814b5b6b22&category=${this.props.category}&pageSize=12&page=${this.state.cpage + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            cpage: this.state.cpage + 1
        })
    };

    render() {
        let { isdark } = this.props;

        if (this.state.loading) {
            return (
                <Spinner />
            )
        }
        else {
            return (
                <>
                    {/* {this.state.loading && <Spinner2 />} */}

                    <h1 className="container fs-2 headline" style={{ textAlign: 'center', marginBottom: '30px' }}><i><strong>{`Top ${this.props.category[0].toUpperCase() + this.props.category.slice(1)} Headlines`}</strong></i></h1>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.pages}
                        loader={<Spinner2 />}
                    >

                        <div className="row my-3" style={{ width: "100%", overflow: 'hidden' }}>

                            {this.state.articles.map((val) => <div className="col-md-4 my-2" key={val.url}>
                                <NavItem title={val.title} discription={val.description} imgurl={val.urlToImage} source={val.source["name"]} newsurl={val.url} isdark={isdark} />
                            </div>)}

                        </div>



                    </InfiniteScroll>
                    <div className="container text-center endText">
                        {this.state.articles.length === this.state.pages ? "End Of Data" : ""}
                    </div>

                    {/* Enabling Infinte Scroll, so disabling buttons */}
                    {/* <div className="container d-flex justify-content-around my-5">

                        <button disabled={this.state.cpage <= 1} className="btn btn-primary" type="submit" onClick={this.prevBtn}>Prev</button>
                        <button disabled={this.state.cpage >= Math.ceil(this.state.pages / 12)} className="btn btn-primary" type="submit" onClick={this.nextBtn}>Next</button>
                    </div> */}
                </>
            )
        }
    }
}


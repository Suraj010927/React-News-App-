// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//  Import Bootstrap components
import { Spinner } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";

import "./News.css";

// import required modules
import { EffectCoverflow, Keyboard, Pagination, Navigation } from "swiper";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

//Local data cause i can't use api for server
import jsonDataIN from '../data/in.json';
import jsonDataUS from '../data/us.json';

export default class News extends Component {
  static defaultProps = {
    country: "in",
    direction: "horizontal",
  };

  static propTypes = {
    country: PropTypes.string,
    direction: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
  };
  
  

  constructor() {
    super();
    this.state = {
      articles: [],

      loading: false,
      page: 1,
      totalresult: null,
      swiperData: []
    };
    this.handleprevious = this.pageUpdate.bind(this);
    this.handlenext = this.handlenext.bind(this);
  }
  static apiKey =process.env.REACT_APP_API_KEY

  async pageUpdate() {
    this.setState({ loading: true });
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${News.apiKey}&page=${this.state.page}&pagesize=20`;
  //  const data = await fetch(url);
  //  const pdata = await data.json();

   const pdata = this.props.country === 'in' ? jsonDataIN : jsonDataUS;
  
    
    this.setState({
      
      articles: pdata.articles,
      totalresult: pdata.totalResults,
      loading: false
    }, () => {
      this.setState({
        swiperData: [...this.state.swiperData, ...this.state.articles]
      });
    });
    
  }
  

  async componentDidMount() {
    this.pageUpdate();
  }
  handlenext() {
    this.setState({ page: this.state.page + 1 }, () => {
      this.pageUpdate();
    });
  }
 
  render() {
    return (
      <div className="my-3">
        {this.state.loading && (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        <div className="container-fluid my-6">
          <Swiper
            effect={"coverflow"}
            direction={this.props.direction}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={this.props.direction === "vertical" ? 1 : 2}
            coverflowEffect={{
              zoom: true,

              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
              breakpoints: {
                576: {
                  spaceBetween: 30,
                },
                768: {
                  spaceBetween: 40,
                },
                992: {
                  spaceBetween: 50,
                },
              },
            }}
            keyboard={{
              enabled: true,
            }}
            onReachEnd={() => {
  if (!(this.state.page + 1 > Math.ceil(this.state.totalresult / 20))) {
    this.handlenext();
  }
}}

            pagination={true}
            modules={[EffectCoverflow, Pagination, Keyboard, Navigation]}
            className="mySwiper"
          >
            <div>
              {this.state.swiperData.length > 0 &&
                this.state.swiperData.map((e) => (
                 
                  
                  <SwiperSlide key={Date.now() + Math.random()}>
                    <NewsItem 
                      title={e.title}
                      image={e.urlToImage}
                      text={e.description}
                      url={e.url}
                    />
                  </SwiperSlide>
                ))}
            </div>
          </Swiper>
         
          </div>
        </div>
     
    );
  }
}

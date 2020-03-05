import React, { Component } from 'react';
import { connect } from "react-redux";
import { Carousel, WingBlank } from 'antd-mobile';
import { Icon } from 'antd-mobile';
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// import Swiper from "@/components/common/swiper.jsx";
import { loadGetTopSectionCityDate, loadGetHotShowDate, loadGetConcertDate, loadGetNominateDate } from "@/components/main/index/actionCreator";

import "./topSection.css";
class TopSection extends Component {
    constructor() {
        super();
        this.state = {
            bannerList:[], // 轮播图数据
            bannerListLength:-1, // 控制轮播图显隐
            classList:[], // 分类
            hotShowBannerList:[], // 热门演出轮播数据
            hotShowMoreUrl:"", // 热门演出全部数据
            hotShowBannerListLength:-1, // 控制热门演出显隐
            concertList:[], // 演唱会数据
            concertListLength:-1, // 控制演唱会显隐
            nominateDataList:[] , // 为你推荐数据
        }
    }
    render() {
        return (
            <div>
                {/* 轮播图 */}
                {
                    Boolean(this.state.bannerListLength)?(
                        <div className="banner">
                            <WingBlank>
                                <Carousel autoplay="true" autoplayInterval="1500" infinite="true">
                                    {this.state.bannerList.map((item,index) => (
                                        <a key={index} href={item.url} style={{ display: 'inline-block', width: '100%' }}>
                                            <img src={item.image_url} alt="" style={{ width: '100%', verticalAlign: 'top' }} />
                                        </a>
                                    ))}
                                </Carousel>
                            </WingBlank>
                        </div>
                    ):null
                }

                {/* 分类列表 */}
                <ul className="class">
                    {this.state.classList.map((item,index) => (
                        <li key={index}>
                            <a href={item.url}>
                                <img src={item.pic} alt="" />
                                <p>{item.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
                
                {/* vip折扣 */}
                <div className="vipDiscount">
                    <a href="https://m.juooo.com/vip/index/1">
                        <div className="left">VIP+会员尊享权益</div>
                        <div className="right">99元/年&nbsp;&gt;</div>
                    </a>
                </div>
                
                {/* 热门演出 */}
                {
                    Boolean(this.state.hotShowBannerListLength)?(
                        <div className="hotShow">
                            <div className="title">
                                <h4>热门演出</h4>
                                <div className="allHotShow">
                                    <a href={this.state.hotShowMoreUrl}>
                                        <p>全部</p>
                                        <Icon type="right" />
                                    </a>
                                </div>
                            </div>
                            <div className="hotShowBanner">
                                <div className="swiper-container" id="hot_swiper">
                                    <div className="swiper-wrapper">
                                        {this.state.hotShowBannerList.map((item,index) => (
                                            <div className="swiper-slide hotShowBannerBox" key={index}>
                                                <a href={item.schedular_url}>
                                                    <img src={item.pic} alt=""/>
                                                    <p>{item.show_name}</p>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):null
                }
                
                {/* 演唱会 */}
                {
                    Boolean(this.state.concertListLength)?(
                        <div className="concert">
                            {this.state.concertList.map((item,index) => (
                                <div className="concertList" key={index}>
                                    <div className="concertTitle">
                                        <a href={item.search_url}>
                                            <h3>{item.title}</h3>
                                            <span><Icon type="right" /></span>
                                        </a>
                                    </div>
                                    <div className="concertList_first">
                                        <div className="concertList_first_text">
                                            <a href={item.list[0].url}>
                                                <img src={item.list[0].pic} alt=""/>
                                                <div className="concertList_first_textR">
                                                    <p>
                                                        <span>{item.list[0].display_show_time}</span>
                                                        <span>&nbsp;{item.list[0].week}</span>
                                                    </p>
                                                    <h5>{item.list[0].schedular_name}</h5>
                                                    <p>
                                                        <span>{item.list[0].city_name}</span>&nbsp;|&nbsp;
                                                        <span>{item.list[0].venue_name}</span>
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="concertList_banner">
                                        <div className="swiper-container" id="concert_swiper">
                                            <div className="swiper-wrapper">
                                                {item.list.map((itm,idx) => (
                                                    <div className="swiper-slide concertList_banner_box" key={idx}>
                                                        <a href={itm.url}>
                                                            <img src={itm.pic} alt=""/>
                                                            <p>{itm.schedular_name}</p>
                                                            <span>{"￥" + parseInt(itm.low_price)}<b>&nbsp;起</b></span>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ):null
                }
                {/* 为你推荐 */}
                <ul className="nominate">
                    <div className="nominate_title">为你推荐</div>
                    {
                        this.state.nominateDataList.map((item,index) => (
                            <li key={index}>
                                <a href={item.url}>
                                    <img src={item.pic} alt=""/>
                                    <div className="nominate_content">
                                        <h5 dangerouslySetInnerHTML={{__html:item.name}} />
                                        <p className="nominate_content_time">
                                            {item.start_show_time.substring(0,10)+" - "+item.end_show_time.substring(5,10)}
                                        </p>
                                        <p className="nominate_content_price">
                                            <span>{"￥"+item.min_price}</span>&nbsp;起
                                        </p>
                                        <div className="nominate_content_ticket">
                                            {
                                                item.support_desc.map((itm,idx) => (
                                                    <span key={idx}>{itm}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                {/* 底部空白 */}
                <div className="footer"></div>
            </div>
        )
    }
    componentDidMount() {
        new Swiper('#hot_swiper', {
            slidesPerView: 3.5,
            spaceBetween: 30,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,  // 修改swiper的父元素时，自动初始化swiper
            // initialSlide :1
        });
        new Swiper('#concert_swiper', {
            // slidesPerView: 4,
            // spaceBetween: 30,
            // observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            // observeParents: true,  // 修改swiper的父元素时，自动初始化swiper
            // // initialSlide :1
        });
        // console.log(this.props.currentCity.toJS());
        var temp = {
            city_id:this.props.currentCity.toJS().city_id,
            abbreviation:this.props.currentCity.toJS().abbreviation
        }
        loadGetTopSectionCityDate(temp,(res) => {
            // console.log(res)
            var bannerList = res.data.slide_list;
            var classList = res.data.classify_list;
            this.setState({
                bannerList,
                bannerListLength:bannerList.length,
                classList
            })
        })
        loadGetHotShowDate(temp,(res) => {
            // console.log(res);
            var hotShowBannerList = res.data.hots_show_list;
            var hotShowMoreUrl = res.data.more_url;
            this.setState({
                hotShowBannerList,
                hotShowBannerListLength:hotShowBannerList.length,
                hotShowMoreUrl
            })
        })
        loadGetConcertDate(temp,(res) => {
            // console.log(res);
            var concertList = res.data;
            this.setState({
                concertList,
                concertListLength:concertList.length
            })
        })
        loadGetNominateDate(temp,(res) => {
            var nominateDataList = res.data.list;
            this.setState({
                nominateDataList
            })
            console.log(this.state.nominateDataList);
        })
    }
}


const mapStateToProps = state => {
    return {
        currentCity: state.getIn(["indexReducer","currentCity"]),
    };
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(TopSection);

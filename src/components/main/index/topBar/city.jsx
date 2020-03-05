/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from 'antd-mobile';
import { loadGetCityDate, loadGetHotCityDate, SET_CURRENT_CITY } from "@/components/main/index/actionCreator";

import "./topBar.css";
class City extends Component {
    constructor() {
        super();
        this.state = {
            cityList:[],
            hotCityList:[]
        }
    }
    toPath() {
        this.props.history.push("/index")
    }
    render() {
        return (
            <div>
                <div className="header-city">
                    <div className="icon"><Icon type="left" onClick={this.toPath.bind(this)} /></div>
                    <div className="title">城市选择</div>
                </div>
                <div className="city">
                    <div className="hotCity">
                        <p className="title">热门城市</p>
                        <ul>
                            {
                                this.state.hotCityList.map((item,index) => (
                                <li key={index} onClick={this.props.getCurrentCity.bind(this,item)}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="allCity">
                        <ul>
                            {
                                this.state.cityList.map((item,index) => (
                                    <li key={index}>
                                        <p className="initial">{item.id}</p>
                                        <ul className="ul">
                                            {
                                                item.list.map((value,idx) => (
                                                    <li className="row" key={idx} onClick={this.props.getCurrentCity.bind(this,value)}>
                                                        <p className="district">{value.name}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
    componentDidMount() {
        loadGetCityDate(res => {
            var cityList = [];
            for(var n in res.data) {
                cityList.push(res.data[n]); 
            }
            this.setState({
                cityList:cityList
            });
        });
        loadGetHotCityDate(res => {
            var hotCityList = [];
            for(var n in res.data) {
                hotCityList.push(res.data[n]); 
            }
            this.setState({
                hotCityList:hotCityList[0]
            });
        });
    }
}

const mapStateToProps = state => {
    return {
        current: state.getIn(["indexReducer","currentCity"]),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getCurrentCity(item) {
            var temp = {
                city_id:item.id || "0",
                abbreviation:item.Abbreviation || "",
                name:item.name
            }
            dispatch({
                type:SET_CURRENT_CITY,
                val:temp
            })
            this.props.history.goBack();
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(City)
import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { loadGetSearchDate, loadGetHotSearchDate } from "@/components/main/index/actionCreator";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: '', // 搜索框的值
            searchDataList:[], // 存放搜索到的数据
            hotSearchDataList:[], // 存放热门搜索的数据
            hotSearchBool:true, // 控制历史数据及热门搜索的显隐
            historySearchDataList:[], // 存放历史搜索的数据
        }
    }
    onChange= (value) => { // 受控表单
        this.setState({ value });
    };
    onClear= (value) => { // 清除内容
        this.setState({
            value:"",
            hotSearchBool:true
        });
    };
    onSubmit= (value) => { // 提交
        console.log(value);
        var historySearchDataList = [];
        historySearchDataList.push({"word":value});
        this.setState({
            value,
            historySearchDataList,
            hotSearchBool:false
        });
        console.log(this.state.historySearchDataList);
    };
    onCancel= () => { // 取消
        this.props.history.goBack();
    };
    getSearchValue(item) {
        loadGetSearchDate(item,(res) => { // 传参调用接口数据
            this.setState({
                searchDataList:res.data.list
            })
            // console.log(this.state.searchDataList);
        })
    }
    toSearch(val) {
        this.setState({
            value:val,
            hotSearchBool:false
        })
        this.getSearchValue(val);
    }
    render() {
        return (
            <div>
                {/* 搜索框 */}
                <div className="search">
                    <SearchBar
                        value={this.state.value}
                        placeholder="搜索热门演出"
                        onSubmit={this.onSubmit}
                        onClear={this.onClear}
                        onCancel={this.onCancel}
                        showCancelButton
                        onChange={this.onChange}
                        onBlur={this.getSearchValue.bind(this,this.state.value)}
                    />
                </div>
                {/* 热门搜索 */}
                {
                    this.state.hotSearchBool?(
                        <div className="hotSearch">
                            <h3>热门搜索</h3>
                            {
                                this.state.hotSearchDataList.map((item,index) => (
                                    <span key={index} onClick={this.toSearch.bind(this,item.word)}>{item.word}</span>
                                ))
                            }
                        </div>
                    ):null
                }
                
                {/* 数据列表 */}
                {
                    this.state.value !== "" ? (
                        <ul className="data">
                            {
                                this.state.searchDataList.map((item,index) => (
                                    <li key={index}>
                                        <a href={item.url}>
                                            <img src={item.pic} alt=""/>
                                            <div className="data_content">
                                                <h5 dangerouslySetInnerHTML={{__html:item.name}} />
                                                <p className="data_content_time">
                                                    {item.start_show_time.substring(0,10)+" - "+item.end_show_time.substring(5,10)}
                                                </p>
                                                <p className="data_content_price">
                                                    <span>{"￥"+item.min_price}</span>&nbsp;起
                                                </p>
                                                <div className="data_content_ticket">
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
                    ):null
                }
                
            </div>
        )
    }
    componentDidMount() {
        loadGetHotSearchDate((res) => {
            this.setState({
                hotSearchDataList:res.data
            })
        })
    }
}


export default withRouter(Search)

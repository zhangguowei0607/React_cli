import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from 'antd-mobile';

import "./topBar.css";
class TopBar extends React.PureComponent{
    render() {
        return (
            <div>
                <div className="header">
                    <div className="left">
                        <div className="icon">
                            <Icon type="left" />
                        </div>
                        <span onClick={this.toPathCity.bind(this)}><b>{this.props.currentCity.get("name")}</b></span>
                    </div>
                    <div className="right">
                        <input type="text" placeholder="搜索热门演出" onFocus={this.toSearch.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    toPathCity() { // 跳转到city组件
        this.props.history.push("/city");
    }
    toSearch() { // 跳转到search组件
        this.props.history.push("/search");
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TopBar));
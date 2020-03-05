import { fromJS,Map } from "immutable";
import { SET_CURRENT_CITY } from "./actionCreator";
const defaultState=fromJS({
    currentCity:{ //每点一次城市 都会重新发一次请求
        city_id:"0", // 默认0是全国
        abbreviation:"", // 城市缩写
        name:"全国" // 城市名称
    }
});
export default (state=defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case SET_CURRENT_CITY:
            // console.log(action.val);
            return state.update("currentCity",x=>x=Map(action.val)); 
    }
    return state;
}
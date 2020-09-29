// 引入UI组件（Counter）
import Counter from "../components/counter"

//引入connect,用于创建一个容器组件
import {connect} from "react-redux"
import {increment, decrement} from "../redux/action_creator";

//从redux中把state取出，通过props传递给UI组件
function mapReduxStateToProps(state) {
    //    该方法的返回值,会作为props参数传递给UI组件
    return {count: state} //此行代码相当于：<Counter count={state}/>
}


//从redux中把dispatch取出，以props传参的形式给UI组件
const mapReduxMethodToProps = dispatch => ({
    increment: value => dispatch(increment(value)),
    decrement: value => dispatch(decrement(value)),
})


/*
 1.如下代码会生成一个容器组件
 2.会映射redux中所保存的状态为props
 3.会建立与UI组件（Counter）的联系
 */
export default connect(mapReduxStateToProps,mapReduxMethodToProps)(Counter)
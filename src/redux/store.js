//引入createStore,用户创建redux最核心的store
import {createStore,applyMiddleware} from "redux"

//引入reducer，用户真正操作状态
import reducer from "./reducer"

//用户处理异步action
import thunk from "redux-thunk"

export default createStore(reducer,applyMiddleware(thunk))


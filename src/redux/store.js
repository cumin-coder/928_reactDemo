//引入createStore,用户创建redux最核心的store
import {createStore} from "redux"

//引入reducer，用户真正操作状态
import reducer from "./reducer"

export default createStore(reducer)


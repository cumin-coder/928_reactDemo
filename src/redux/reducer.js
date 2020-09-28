// redux中的reducer，用于真正去加工状态，获取到: preState，action
import {INCREMENT, DECREMENT} from "./action_types"
//初始值
const initCount = 0

export default function (PreState = initCount, action) {
    const {type, data} = action
    let newCount
    switch (type) {
        case INCREMENT:
            newCount = PreState + data
            return newCount
        case DECREMENT:
            newCount = PreState - data
            return newCount
        default:
            return PreState
    }
}
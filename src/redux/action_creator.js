//专门用户制造action对象
import {INCREMENT, DECREMENT} from "./action_types"

export const increment = (value) => ({type: INCREMENT, data: value * 1})
export const decrement = (value) => ({type: DECREMENT, data: value * 1})
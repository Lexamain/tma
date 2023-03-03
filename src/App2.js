/// redux

import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './redux/action'

function App() {
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Redux WorkShop </h1>

            <button onClick={() => dispatch(increment())}>increment</button>

                <span>{count}</span>
                
            <button onClick={() => dispatch(decrement())}>decrement</button>

        </div>
    )
}

export default App
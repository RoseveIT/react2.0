import {useDispatch} from "react-redux";
import {count2Action} from "../redux";

export default function Count2Tools() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count2Action.inc(2))}>inc</button>
            <button onClick={()=>dispatch(count2Action.dec(3))}>dec</button>
            <button onClick={()=>dispatch(count2Action.reset(5))}>reset</button>
        </div>
    );
}
import {useDispatch} from "react-redux";
import {count1Action} from "../redux";

export default function Count1Tools() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count1Action.inc())}>inc</button>
            <button onClick={()=>dispatch(count1Action.dec())}>dec</button>
            <button onClick={()=>dispatch(count1Action.reset())}>reset</button>
            <button onClick={()=>dispatch(count1Action.getAllUsers())}>users</button>
        </div>
    );
}
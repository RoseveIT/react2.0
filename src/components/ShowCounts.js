import {useSelector} from "react-redux";
import {count1Reducer} from "../redux";

export default function ShowCounts() {

    const {count1} = useSelector(state => state.count1Reducer);

    return (
        <div>
            <h1>Count1:{count1}</h1>
        </div>
    );
}
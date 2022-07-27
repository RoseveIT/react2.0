import {useSelector} from "react-redux";


export default function ShowCounts() {

    const {count1, users} = useSelector(state => state.count1Reducer);
    const {count2} = useSelector(state => state.count2Reducer);

    return (
        <div>
            <h1>Count1:{count1}</h1>
            <h1>Count2:{count2}</h1>
            <hr/>
            {JSON.stringify(users)}
        </div>
    );
}
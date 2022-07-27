import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

export default function CarForm() {
    const {reset, register, handleSubmit, setValue} = useForm();

    const {carForUpdate} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate])

    const submit = async (data) => {
        await dispatch(carActions.updateById({id:carForUpdate.id, car:data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('')}/>
            <input type="text" placeholder={'price'} {...register('')}/>
            <input type="text" placeholder={'year'} {...register('')}/>
            <button>Update</button>
        </form>
    );
}
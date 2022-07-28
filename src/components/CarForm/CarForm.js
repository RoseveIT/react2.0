import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

export default function CarForm() {
    const {reset, register, handleSubmit, setValue} = useForm();

    const {carUpdate} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (carUpdate){
            setValue('model', carUpdate.model)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    },[carUpdate])

    const submit = async (data) => {
        await dispatch(carActions.updateById({id:carUpdate.id, car:data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Update</button>
        </form>
    );
}
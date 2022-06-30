
import {useForm} from "react-hook-form";

function App() {

    let userId = [
        {id:1, name:'sass'},
        {id:2, name:'sassw'},
        {id:3, name:'sasqws'},
        {id:4, name:'sasfss'},
        {id:5, name:'savvss'},
        {id:6, name:'sasssees'},
        {id:7, name:'sasqqs'},
        {id:8, name:'sasrrs'},
        {id:9, name:'sasdsffs'},
        {id:10, name:'sassdsds'}
    ]

    let {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            title:'title',
            body:'body'
        }
    });
    
    
  return (
    <div>

      <form onSubmit={handleSubmit((data)=>{
          console.log(data);
      })}>
        <input type="text" {...register("title", {required:true})}/>
          {
              errors.title && <span>field is required</span>
          }
        <input type={"text"} {...register('body')}/>

          <select {...register('userId')}>
              {
                  userId.map(value => <option key={value.id} value={value.id}>{value.name}</option>)
              }
          </select>

        <button>save</button>
      </form>


    </div>
  );
}

export default App;

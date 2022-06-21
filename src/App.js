import Character from "./components/Character/Character";
import './components/Character/Character.css'
import CharacterRM from "./components/characterRM/CharacterRM";
function App() {
  return (
    <div className="App">
      <div>
          {/*<Character name={'Bart'} par={'Lorem ipsum dolor sit amet.'} img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>*/}
          {/*<Character name={'Homer'} par={'Lorem ipsum dolor sit amet.'} img={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>*/}
          {/*<Character name={'Lisa'} par={'Lorem ipsum dolor sit amet.'} img={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}/>*/}
          {/*<Character name={'Marge'} par={'Lorem ipsum dolor sit amet.'} img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>*/}
          {/*<Character name={'Maggie'} par={'Lorem ipsum dolor sit amet.'} img={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>*/}
           <CharacterRM/>
      </div>
    </div>
  );
}

export default App;

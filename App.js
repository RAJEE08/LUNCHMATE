import { LogIn  }from './LogIn';
import {Forget} from './Forget';
import { NewPassword } from './NewPassword';
import { SignUp } from './SignUp';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/Forget" element={<Forget/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/NewPassword" element={<NewPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;

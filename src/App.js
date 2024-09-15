import './App.css';
import {Theme} from '@radix-ui/themes'
import Question from './question';
import Article from './article';
import RadioGroupDemo from './radio';

function App() {
  return (
    
     <div>
      <Theme accentColor='gray' appearance='dark'>
        <RadioGroupDemo />
      </Theme>
     </div>
  );
}

export default App;

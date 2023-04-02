import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import ButtonClick from './components/ButtonClick';
import Input from './components/Input';
import LoggedIn from './state/LoggedIn';
import User from './state/User';
import UserTwo from './context/User';
import Counter from './state/Counter';
import Box from './context/Box';
import { ThemeContextProvider } from './context/ThemContext';
import { UserContextProvider } from './context/UserContext';
import Mutableref from './useref/Mutableref';
import Private from './auth/Private';
import Profile from './auth/Profile';
import { List } from './generics/List';
import RandomNumber from './restriction/RandomNumber';
import Toast from './templateLiterals/Toast';
import CustomButton from './wrappingHtml/CustomButton';
import CustomComponent from './html/CustomComponent';



function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
  ]
  return (
    <div className="App">
      <UserContextProvider>
        <ThemeContextProvider>
          <Greet name="Visuals" isLoggedIn={true} />
          <Person name={personName} />
          <PersonList names={nameList} />
          <Status status='success' />
          <Heading>Placeholder text</Heading>
          <Oscar>
            <Heading>Oscar foes to Leonardo Dicpario!</Heading>
          </Oscar>
          <ButtonClick handleClick={(event, id) => {
            console.log('Button Click', event, id);
          }} />
          <Input value='' handleChange={(event) => {
            console.log(event.target.value);
          }} />
          <LoggedIn />
          <User />
          <Counter />
          <Box />
          <UserTwo />
          <Mutableref />
          <Private isLoggedIn={false} component={Profile} />
          {/* <List items={['Batman', 'Superman', 'Wonder woman']} onClick={(item) => console.log(item)} />
          <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
          <List items={[
            {
              id: 1,
              first: 'Bruce',
              last: 'Wayne'
            },
            {
              id: 2,
              first: 'Clark',
              last: 'Kent'
            },
          ]} onClick={(item) => console.log(item)} />
          <RandomNumber value={10} isZero />
          <Toast position='center' />
          <CustomButton variant='red' onClick={() => console.log('Clicked')
          }>Primary Button</CustomButton>
          <CustomComponent name="Visuals" isLoggedIn={true} messageCount={10} />
        </ThemeContextProvider>
      </UserContextProvider>
    </div >
  );
}

export default App;

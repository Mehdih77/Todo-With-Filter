import './App.css';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import List from './components/List';

function App() {
  return (
    <div className="App">
    <h1>ToDo List</h1>
      <FormInput />
      <List />
      <Footer />
    </div>
  );
}

export default App;

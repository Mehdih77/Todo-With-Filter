import Footer from './components/Footer';
import FormInput from './components/FormInput';
import List from './components/List';
import TodoProvider from './context/TodoProvider';

function App() {
    return (
        <TodoProvider>
            <div className="App">
                <h1>ToDo List</h1>
                <FormInput/>
                <List/>
                <Footer/>
            </div>
        </TodoProvider>
    );
}

export default App;

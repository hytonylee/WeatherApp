import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <InputForm />
            </div>
        )
    }
}

export default App;
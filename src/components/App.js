import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    console.log('Hello');
    return (
        <div>
            <p>React here!</p>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));

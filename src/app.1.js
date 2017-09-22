
const title = <h1>Indecision App</h1>;
const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () =>  {
    count --;
    renderCounterApp();
};
const reset = () =>  {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>ReSet</button>
        </div>
    )

    ReactDOM.render(
        templateTwo, 
        appRoot
    );
};

renderCounterApp();
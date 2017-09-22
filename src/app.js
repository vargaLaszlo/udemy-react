// JSX - JavaScript XML

const title = <h1>Indecision App</h1>;



const app = {
    title: "Indecision App",
    subtitle: "An app to make indecisions",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    app.options = [];
    render();
}


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should Ido?</button>
            <button disabled={app.options.length === 0} onClick={removeAll}>Remove all</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            
        </div>
    );
    
    ReactDOM.render(
        template, 
        appRoot
    );
}

render();
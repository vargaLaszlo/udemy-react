
const app = {
    title: "Visibility Toggle"
}

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;  
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            
            </button>

            <p hidden={!visibility}>Lorem ipsum dolor sit amet!</p>
            
        </div>
    );
    
    ReactDOM.render(
        template, 
        appRoot
    );
}

render();
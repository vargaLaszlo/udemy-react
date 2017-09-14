// JSX - JavaScript XML

const title = <h1>Indecision App</h1>;
const appRoot = document.getElementById('app');


const app = {
    title: "Indecision App",
    subtitle: "An app to make indecisions",
    options: ["one", "Two"]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>a</li>
            <li>b</li>
        </ol>
    </div>
);

//-----------------------------------------------

const user = {
    name: "László",
    age: 41,
    location: "Budapest"
}

function getName(name) {
    return name ? name : "Anonimus";
}

function getAge(age) {
    return age >= 18 && (<p>Age: {age}</p>);
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{getName(user.name)}</h1>
        {getAge(user.age)}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(
    templateTwo, 
    appRoot
);
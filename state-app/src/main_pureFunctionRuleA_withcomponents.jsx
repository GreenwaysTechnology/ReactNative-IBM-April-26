import { createRoot } from 'react-dom/client';

//Every component is  based on pure function with respect to "props"
const Welcome = props => {
    // props.message = 'Hai'
    return <div>
        <h1>{props.message}</h1>
    </div>
}
const App = () => {
    return <>
        <Welcome message="hello" />
    </>
}


const root = createRoot(document.getElementById('root'));
root.render(<App />);


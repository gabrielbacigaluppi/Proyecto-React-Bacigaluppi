import "./Greeting.css";

function Greeting(props){
    const {children}=props;

    return(
        <h1 className="saludo">{children}</h1>
    )
}

export default Greeting;
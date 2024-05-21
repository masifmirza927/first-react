
import SecondComp from "./SecondComp";


function FirstComp (props) {

    return(
       <>
        <h1>First Component</h1>
        <h2>Hello, {props.name}, city: {props.city} </h2>
        <SecondComp name={props.name} />
       </>
    )
}

export default FirstComp;
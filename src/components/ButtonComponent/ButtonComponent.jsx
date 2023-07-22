import './ButtonComponent.css';

function ButtonComponent(props){
    const {children} = props;

    return (
        <>
            <button className='botonDetalle'>{children}</button>
        </>
    )
}

export default ButtonComponent;
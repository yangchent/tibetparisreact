const Button = (props) => {
    return (
        <>
            <button className={`py-1 px-6 font-medium text-white bg-mygreen rounded-md hover:bg-myorange transition 
            duration-300 ${props.classAdd}`} href={props.href} onClick={props.onClick}>
                {props.children}
            </button>
        </>
    );
};

export default Button;
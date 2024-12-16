const EventDemoComponent = () =>{
    const handleClick = () => {
        console.log("Hello Event")

    }

    const handleClickAgain = () =>{
        console.log("Event again")
    }

    return(
        <>
        <h2>Event Demo</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClickAgain}>Click Me</button>
        </>
    );
}

export default EventDemoComponent;
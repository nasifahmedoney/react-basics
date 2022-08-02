function Todo(props){
    function clickResponse(){
        console.log('clicked');
        console.log(props.text);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={clickResponse}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;
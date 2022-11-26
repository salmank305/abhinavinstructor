export const FormDetails = (props) => {
    return (
        <section>
            <h3>Details Entered</h3>
            <div>Name: {props.name}</div>
            {/* <div>email: </div>
            <div>Address: </div>
            <div>Gender: </div>
            <div>Name: </div> */}
            <button onClick={() => props.chToPar('abhinav')}>passData</button>
        </section>
    )
}


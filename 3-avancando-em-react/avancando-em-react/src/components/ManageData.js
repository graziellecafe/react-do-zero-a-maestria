import {useState} from 'react'; 

const ManageData = () => {
    const someData = 10; 
    const [number, setNumber] = useState(); 

    return (
        <div>
            <div>
                <p> Valor:{number} </p>
                <button onClick={() => setNumber(25)}> Mudar Valor</button>
            </div>
        </div>
    )
}

export default ManageData; 
import {useState} from 'react'; 

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

    const [users] = useState([
        { id: 1, name: "Grazielle", age: 29},
        { id: 2, name: "Ramon", age: 28},
        { id: 3, name: "José", age: 62},
    ]);

    return(
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender; 
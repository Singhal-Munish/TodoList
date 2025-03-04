import React, {useState} from 'react'

const Objects = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 3, name: 'Charlie', age: 28 }
       ]);

    const updateUserAge = (userId) => {
        setUsers(users.map(user =>
            user.id === userId ? { ...user, age: 34 } : user
        ));
        
    }

    return (
    <div>
        <ul>
            {
            users.map((user) => {
                return (
                    <div className="" key={user.id}>
                    <li className="mx-2" >{user.id} {user.name} {user.age}</li>    
                    <button type='submit' onClick={() => updateUserAge(user.id)}>Update Age</button>
                    </div>
                );
                })
            }
        </ul>
        
    </div>
  )
}

export default Objects
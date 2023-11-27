import React from 'react';
import { Link } from 'react-router-dom';

const User =() => {
    return (
        <div className ='userTable'>
            <Link to={"/add"}>Add User</Link>
            <table>
                <thread>
                    <tr>
                        <th>
                            
                        </th>
                    </tr>
                </thread>
            </table>
        </div>
    )
}

export default User
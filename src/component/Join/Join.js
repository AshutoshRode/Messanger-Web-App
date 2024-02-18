import { useState } from 'react';
import "../Join/Join.css";
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';

let user;

const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}
function Join() {
    const [name, setName] = useState("");
    // console.log(name);
    return (
        <div className='JoinPage'>
            <div className='JoinContainer'>
                <img src={logo} alt='logo' />
                <h1>Messanger Web-App</h1>
                <input onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" type='text' id='joinInput' />
                <Link onClick={(e) => !name ? e.preventDefault() : null} to="/chat"><button onClick={sendUser} className='joinBtn'>Login In</button></Link>
            </div>

        </div>
    )
}

export default Join
export { user }
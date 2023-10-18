import { useEffect, useState } from "react";

const User = ({name}) => {

    const [count, setcount] = useState(0);
    
    useEffect(() => {
        timer = setInterval(() => {
            console.log("Namaste OP")
        }, 1000);

        console.log("useEffect")

        return() => {
            clearInterval(timer);
            console.log("useEffect Return")
        }
    }),[];

    console.log("useEffect Render")

    return (   
    <div className="user-Card">
            <h1>Name: {name}</h1>
            <h2>Count: {count}</h2>
            <h2>Contact: Namaster React</h2>
            <h3>Address: Dheradun</h3>
            <button onClick={() => {
                setcount(1);
            }}>
                count Increease
            </button>
        </div>
    );
};
 export default User;
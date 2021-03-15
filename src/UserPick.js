import React from 'react';

const UserPick = ({setUserDone,value,setValue,setUser}) => {

    const submitRemove = e =>{
        e.preventDefault();
    }

    const valueInput = e =>{
        setValue(e.target.value);
    }

    const showValue = () =>{
        setUser(value);
        setUserDone(true);
    }

    return (
        <div className="container-user">
            <h1>Choose your username</h1>
            <form className="user-form" onClick={submitRemove}>
                <input type="text" placeholder="Username..." onChange={valueInput}/>
                <input type="submit" value={"Submit"} onClick={showValue}/>
            </form>
        </div>
    )
}

export default UserPick

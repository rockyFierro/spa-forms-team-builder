import React from 'react';

const Form =()=>{

    const logEvent = e =>{
        console.log(e);
    }
    return(
        <div className="formField">
            <form>
                <label>
                    <p>Username</p>
                    <input
                    type={"text"}
                    placeholder="js_sorcerer_01"
                    onChange={logEvent}/>
                </label>
                <label>
                    <p>Role</p>
                    <input
                        type="text"
                        placeholder="role"
                        onChange={logEvent}/>
                </label>
                <label>
                    <p>Email</p>
                    <input
                        type={"text"}
                        onChange={logEvent}
                        placeholder="js_sorcerer_01@codemagk.com"/>
                </label>
            </form>
        </div>
    )
}
export default Form;
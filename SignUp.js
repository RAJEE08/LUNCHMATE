
import './form.css';

export const SignUp = () =>{
    return(
        <div className="Page">
            <div className="Form1">
                <form>
                    <div className='Email4'>
                        <label id='title'>Sign Up</label><br/> <br/>
                        <div className='Content'>
                            <input type='text' id='tb' placeholder='  Name' required/>
                            <input type='text' id='tb3' placeholder='  Email' required/> <br/> <br/> <br/>
                            <input type='text' id='tb' placeholder='  Department' required/>
                            <input type='password' id='tb3' placeholder='  Password' required/> <br/> <br/> <br/>
                            <input type='text' id='tb' placeholder='  Contact Number' required/> <br/> <br/>
                            <input type='button' id='li' value='Sign Up'></input><br/><br/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
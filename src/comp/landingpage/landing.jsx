import React from 'react'
import "./landing.css"
export default function landing() {
    const clicked=()=>{

        alert("Login")
    }
    return (<div>
        <div className="container-fluid landing_page">

        <div className="container ">
            <div className="row two_divs">
                
                <div className="login_div col-lg-6">
                    <h2>Login to your account</h2>
                    <form>
                      <div class="form-group">
                        <label for="user">User Name : </label>
                        <input type="email" class="form-control" id="user" placeholder="Enter User Name" required/>
                      </div>
                      <div class="form-group">
                        <label for="pass">Password : </label>
                        <input type="password" class="form-control" id="pass" placeholder="Password with Alphabets and Numbers" required/>
                      </div>
                      <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="remember"/>
                        <label class="form-check-label" for="remember"> Remember Me </label>
                      </div>
                      <button type="submit" onClick={clicked} class="btn_login">Login</button>
                    </form>
                </div>
                <div className="disclamer_div col-lg-6">
                    <h4>DISCLAIMER FROM DEVELOPER</h4>
                    <br/>
                    <p>United Track System (Pvt.) Limited (UTS), WEBTRACK Application is being updated time to time, to improve user experience, reports and for additional features. Since UTS makes every effort to ensure security and accuracy of data and information, UTS, United International Group and its subsidiaries, hereby take no responsibility of errors.
                    For any further information, UTS 24 hours call center may be contacted at: UAN: 111-000-320</p>
                    <p>United Software & Technologies International (Pvt) Ltd - UIG</p>
                </div>
                
            </div>
        </div>
        </div>
    </div>)
}

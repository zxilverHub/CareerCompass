import { useState } from 'react'
import './login.css'

import facebook from './icons/facebook.png'
import google from './icons/Google.png'

function Login({option}) {
    const [showPass, setShowPass] = useState('password')

  return (
    <div className='log-in-page column'>
        <div className="email-input column">
            <label htmlFor="input-email">Email or phone number</label>
            <div className="email-main-input">
                <svg width="18" height="18" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 0.5H2.25C1.65326 0.5 1.08097 0.737053 0.65901 1.15901C0.237053 1.58097 0 2.15326 0 2.75V10.25C0 10.8467 0.237053 11.419 0.65901 11.841C1.08097 12.2629 1.65326 12.5 2.25 12.5H12.75C13.3467 12.5 13.919 12.2629 14.341 11.841C14.7629 11.419 15 10.8467 15 10.25V2.75C15 2.15326 14.7629 1.58097 14.341 1.15901C13.919 0.737053 13.3467 0.5 12.75 0.5ZM12.2475 2L7.5 5.5625L2.7525 2H12.2475ZM12.75 11H2.25C2.05109 11 1.86032 10.921 1.71967 10.7803C1.57902 10.6397 1.5 10.4489 1.5 10.25V2.9375L7.05 7.1C7.17982 7.19737 7.33772 7.25 7.5 7.25C7.66228 7.25 7.82018 7.19737 7.95 7.1L13.5 2.9375V10.25C13.5 10.4489 13.421 10.6397 13.2803 10.7803C13.1397 10.921 12.9489 11 12.75 11Z" fill="var(--secondary)"/>
                </svg>
                <input type="email" placeholder='Email or phone number' id='input-email' />
            </div>
        </div>

        <div className="input-password column">
            <label htmlFor="input-password">Password</label>
            <div className="password-main-input">
                <svg width="18" height="18" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.71429 11.4286C5.33541 11.4286 4.97204 11.2781 4.70413 11.0102C4.43622 10.7422 4.28571 10.3789 4.28571 10C4.28571 9.20714 4.92143 8.57143 5.71429 8.57143C6.09317 8.57143 6.45653 8.72194 6.72444 8.98985C6.99235 9.25776 7.14286 9.62112 7.14286 10C7.14286 10.3789 6.99235 10.7422 6.72444 11.0102C6.45653 11.2781 6.09317 11.4286 5.71429 11.4286ZM10 13.5714V6.42857H1.42857V13.5714H10ZM10 5C10.3789 5 10.7422 5.15051 11.0102 5.41842C11.2781 5.68633 11.4286 6.04969 11.4286 6.42857V13.5714C11.4286 13.9503 11.2781 14.3137 11.0102 14.5816C10.7422 14.8495 10.3789 15 10 15H1.42857C1.04969 15 0.686328 14.8495 0.418419 14.5816C0.15051 14.3137 0 13.9503 0 13.5714V6.42857C0 5.63571 0.635714 5 1.42857 5H2.14286V3.57143C2.14286 2.62423 2.51913 1.71582 3.1889 1.04605C3.85868 0.376274 4.76708 0 5.71429 0C6.18329 0 6.64771 0.0923778 7.08101 0.271859C7.51432 0.45134 7.90803 0.714409 8.23967 1.04605C8.57131 1.37769 8.83438 1.7714 9.01386 2.2047C9.19334 2.63801 9.28571 3.10242 9.28571 3.57143V5H10ZM5.71429 1.42857C5.14596 1.42857 4.60092 1.65434 4.19906 2.0562C3.79719 2.45806 3.57143 3.00311 3.57143 3.57143V5H7.85714V3.57143C7.85714 3.00311 7.63138 2.45806 7.22952 2.0562C6.82765 1.65434 6.28261 1.42857 5.71429 1.42857Z" fill="var(--secondary)"/>
                </svg>
                <input type={showPass} placeholder='Password' id='input-password' />

                <div className='show-password'>
                    {showPass=='password'?
                        <svg onClick={()=>setShowPass('text')} width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4205 1.80475C8.77883 1.76808 9.13927 1.7498 9.5 1.75C13.4644 1.75 16.64 3.92725 18 7C17.6708 7.74744 17.226 8.45111 16.6783 9.091M4.842 2.88925C3.108 3.823 1.765 5.26975 1 7C2.36 10.0728 5.5356 12.25 9.5 12.25C11.1423 12.2576 12.7548 11.863 14.158 11.11M7.698 5.41C7.46119 5.61895 7.27334 5.86701 7.14518 6.14002C7.01702 6.41302 6.95106 6.70563 6.95106 7.00113C6.95106 7.29663 7.01702 7.58923 7.14518 7.86224C7.27334 8.13524 7.46119 8.3833 7.698 8.59225C7.93481 8.8012 8.21594 8.96695 8.52535 9.08003C8.83476 9.19311 9.16638 9.25132 9.50128 9.25132C9.83617 9.25132 10.1678 9.19311 10.4772 9.08003C10.7866 8.96695 11.0677 8.8012 11.3046 8.59225" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.69995 1L16.3 13" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"/>
                        </svg> :

                        <svg onClick={()=>setShowPass('password')} width="20" height="14" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4674 1.5C5.06138 1.5 2.43853 6.37114 1.9731 7.33543C1.94791 7.38663 1.93481 7.44294 1.93481 7.5C1.93481 7.55706 1.94791 7.61337 1.9731 7.66457C2.43767 8.62886 5.06053 13.5 10.4674 13.5C15.8742 13.5 18.4962 8.62886 18.9617 7.66457C18.9869 7.61337 19 7.55706 19 7.5C19 7.44294 18.9869 7.38663 18.9617 7.33543C18.4971 6.37114 15.8742 1.5 10.4674 1.5Z" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.4673 10.0716C11.8875 10.0716 13.0387 8.9203 13.0387 7.50014C13.0387 6.07998 11.8875 4.92871 10.4673 4.92871C9.04714 4.92871 7.89587 6.07998 7.89587 7.50014C7.89587 8.9203 9.04714 10.0716 10.4673 10.0716Z" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    }
                </div>
            </div>
            <p className='forgot-password'>Forgot password?</p>
        </div>

        <div className="log-in-option column">
            <div className="log-in-button">Log in</div>
            <p className='change-registration-option'>
                Don't have account yet?
                <span className='change-option' onClick={()=>option(false)}>Sign up here</span>
            </p>
        </div>

        <div className="third-party-accounts column">
            <p className='or'>Or connect with</p>
            <div className="account-icons">
                <img src={facebook} alt="facebook" />
                <img src={google} alt="google" />
            </div>
        </div>
    </div>
  )
}

export default Login
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';


const Authenication = () => {

  return (
    <div className='authenication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authenication;
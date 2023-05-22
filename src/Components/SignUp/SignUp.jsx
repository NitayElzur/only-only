import './SignUp.css'
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
function SignUp() {
    const { handleSubmit, formState: {errors}, register } = useForm();
    const onSubmit = data => { console.log(data) };
    return (
        <div id='signUpMain'>
            <form onSubmit={handleSubmit(onSubmit)} id='signUpForm'>
                <Input name='Username' minLength={4} maxLength={20} register={register} errors={errors} type={'text'}/> 
                <Input name='Password' minLength={8} maxLength={20} register={register} errors={errors} pat={/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/} patMsg='Password contain atleast one: digit, lowercase letter, uppercase letter' type={`password`}/> 
                <Input name={'Email'} register={register} errors={errors} pat={/@gmail.com/} patMsg={'Email must be a gmail account'}/>
                <button id='formButton' className='boxButton'>Submit</button>
            </form>
        </div>
    )
}
export default SignUp;
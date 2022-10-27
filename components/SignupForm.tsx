import { useSubmit } from '../hooks'
import { SingupResponse } from '../types'
import { Input, HelperText } from './'

export const SignupForm = ()=>{
    const { onSubmit, error } = useSubmit<SingupResponse>('users')

    return <section className='form-section signup-form'> 
        <form className='form' onSubmit={onSubmit} >
            <h3 className='form-title'>Sign Up</h3>
            <Input name='firstname'>First name</Input>
            <Input name='lastname'>Last name</Input>
            <Input type='email' name='email'>Email</Input>
            <Input minLength={8} type='password' name='password'>Password</Input>
            <Input minLength={8} type='password' name='verify_password'>Confirm password</Input>
            <Input name='default_company'>Company</Input>
            
            <HelperText text={error} />
            <button className='form-btn' type='submit'>
                Register
            </button>
        </form>
    </section>
}


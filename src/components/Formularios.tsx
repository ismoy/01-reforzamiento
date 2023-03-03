
import { useForm } from '../hooks/useForm';

export const Formularios = () => {

const {state,email,password,onChangeValue} =useForm({
    email: 'test@test.com',
    password: '12345678'
})

  return (
    <>
    <h3>Formulario</h3>
    <input type="email" className="form-control" placeholder="Email"
     value={email}
     onChange ={({target}) => onChangeValue(target.value,'email')}
    />
    <input type="password" className="form-control mt-2" placeholder="Password" required
    value={password}
    onChange ={({target}) => onChangeValue(target.value,'password')}
    />

<code>
    <pre>
     {JSON.stringify(state,null,2)}   
    </pre>
</code>
<button className='btn btn-primary w-100 mt-4'>
    Login
</button>
    </>
  )
}

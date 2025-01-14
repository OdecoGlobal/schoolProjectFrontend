import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '@/components/mutations/mutation';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner';

function loginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const router = useRouter()
const [loginUser, {loading}] = useMutation(LOGIN_USER, {
  variables: { email, password },
  onError: (error) => {
    toast.error(error.message);
  },
  onCompleted: () => {
      router.push('/register');
  }
});


  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
    setFormData({
      email: '',
      password: ''
    })
  
  };

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <h4>Login</h4>
            </div>
            <div className='card-body'>
              {loading ? (
                <Spinner/>
              ) : (<form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Username</label>
                  <input
                    type='text'
                    name='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    name='password'
                    className='form-control'
                    id='password'
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </form>)}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;

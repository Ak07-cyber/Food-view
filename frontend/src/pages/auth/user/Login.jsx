import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/auth.css';

const UserLogin = () => {

  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;

    try{
      const response=await axios.post("http://localhost:3000/api/auth/user/login",{
        email,
        password
      },{
        withCredentials:true
      })

      console.log(response.data);
      navigate("/") //navigating to the home page
    }catch(error){
      console.error("there was error while login ", error);
    }

  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🍽️</div>
          <span className="auth-badge">Customer</span>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue to FoodView</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Don't have an account?{' '}
            <Link to="/user/register" className="auth-link">
              Create account
            </Link>
          </p>
        </div>

        <div className="auth-switch">
          <p className="auth-switch-text">
            Are you a restaurant?{' '}
            <Link to="/partner/login" className="auth-switch-link">
              Sign in as Food Partner
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

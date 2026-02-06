import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/auth.css';

const UserRegister = () => {

  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const fullName=e.target.fullName.value;
    const email=e.target.email.value;
    const password=e.target.password.value;

    try{
      const response=await axios.post("http://localhost:3000/api/auth/user/register",{
        fullName,
        email,
        password
      },{
          withCredentials:true
      })

      console.log(response.data);
      navigate("/user/login")// redirecting to the home page after the registeration of the 
    }catch(err){
      console.error("There was a error ", error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🍽️</div>
          <span className="auth-badge">Customer</span>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join FoodView to discover great food</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Already have an account?{' '}
            <Link to="/user/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>

        <div className="auth-switch">
          <p className="auth-switch-text">
            Are you a restaurant?{' '}
            <Link to="/partner/register" className="auth-switch-link">
              Register as Food Partner
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

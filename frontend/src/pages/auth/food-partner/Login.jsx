import { Link } from 'react-router-dom';
import '../../../styles/auth.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FoodPartnerLogin = () => {

  const navigate=useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;

    try{
      const response=await axios.post("http://localhost:3000/api/auth/food-partner/login",{
        email:email,
        password
      },{ //required to set the cookie token in the browser store
        withCredentials:true
      })
      console.log(response.data);
      navigate("/create-food");
    }catch(err){
      console.error("There was an error Logging!", error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🏪</div>
          <span className="auth-badge">Food Partner</span>
          <h1 className="auth-title">Partner Login</h1>
          <p className="auth-subtitle">Access your restaurant dashboard</p>
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
              placeholder="Enter business email"
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
            New to FoodView?{' '}
            <Link to="/food-partner/register" className="auth-link">
              Register your restaurant
            </Link>
          </p>
        </div>

        <div className="auth-switch">
          <p className="auth-switch-text">
            Looking to order food?{' '}
            <Link to="/user/login" className="auth-switch-link">
              Sign in as Customer
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;

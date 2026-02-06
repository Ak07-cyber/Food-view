import { Link } from 'react-router-dom';
import '../../../styles/auth.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {

  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault(); /*Without this, the form does a default HTML submit which reloads the page immediately, 
    canceling your async request before it can execute.*/

    const restaurantName=e.target.name.value;
    const contactName=e.target.contactName.value;
    const phone= e.target.phone.value;
    const email=e.target.email.value;
    const address=e.target.address.value;
    const password=e.target.password.value;

    try{
      const response=await axios.post("http://localhost:3000/api/auth/food-partner/register",{
      name:restaurantName,
      email:email,
      phone:phone,
      address:address,
      password:password,
      contactName:contactName
    },{
      withCredentials:true
    })

    console.log(response.data);
    navigate("/food-partner/register");

    }catch(err){
      console.error("There was error!", err);
    }

  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🏪</div>
          <span className="auth-badge">Food Partner</span>
          <h1 className="auth-title">Partner With Us</h1>
          <p className="auth-subtitle">Register your restaurant on FoodView</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Restaurant Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter restaurant name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactName" className="form-label">
                Contact Name
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                className="form-input"
                placeholder="Contact person"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="Phone number"
                required
              />
            </div>
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
              placeholder="Enter business email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="form-textarea"
              placeholder="Enter restaurant address"
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
            Register Restaurant
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Already registered?{' '}
            <Link to="/food-partner/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>

        <div className="auth-switch">
          <p className="auth-switch-text">
            Looking to order food?{' '}
            <Link to="/user/register" className="auth-switch-link">
              Register as Customer
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;

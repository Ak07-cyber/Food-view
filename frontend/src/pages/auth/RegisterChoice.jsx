import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const RegisterChoice = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🍽️</div>
          <h1 className="auth-title">Join FoodView</h1>
          <p className="auth-subtitle">Choose how you'd like to get started</p>
        </div>

        <div className="choice-options">
          <Link to="/user/register" className="choice-card">
            <span className="choice-icon">👤</span>
            <h3 className="choice-title">I'm a Customer</h3>
            <p className="choice-description">
              Discover restaurants, order food, and enjoy great meals
            </p>
          </Link>

          <Link to="/food-partner/register" className="choice-card">
            <span className="choice-icon">🏪</span>
            <h3 className="choice-title">I'm a Food Partner</h3>
            <p className="choice-description">
              Register your restaurant and reach more customers
            </p>
          </Link>
        </div>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterChoice;

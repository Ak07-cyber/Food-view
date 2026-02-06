import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const LoginChoice = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🍽️</div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Choose your account type to sign in</p>
        </div>

        <div className="choice-options">
          <Link to="/user/login" className="choice-card">
            <span className="choice-icon">👤</span>
            <h3 className="choice-title">Customer</h3>
            <p className="choice-description">
              Sign in to order food and track your deliveries
            </p>
          </Link>

          <Link to="/food-partner/login" className="choice-card">
            <span className="choice-icon">🏪</span>
            <h3 className="choice-title">Food Partner</h3>
            <p className="choice-description">
              Access your restaurant dashboard and manage orders
            </p>
          </Link>
        </div>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Don't have an account?{' '}
            <Link to="/register" className="auth-link">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;

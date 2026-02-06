import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Choice Pages
import RegisterChoice from '../pages/auth/RegisterChoice';
import LoginChoice from '../pages/auth/LoginChoice';

// User Pages
import UserRegister from '../pages/auth/user/Register';
import UserLogin from '../pages/auth/user/Login';

// Food Partner Pages
import FoodPartnerRegister from '../pages/auth/food-partner/Register';
import FoodPartnerLogin from '../pages/auth/food-partner/Login';
import CreateFood from '../pages/food-partner/CreateFood';
import Home from '../pages/general/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Choice Routes */}
        <Route path="/register" element={<RegisterChoice />} />
        <Route path="/login" element={<LoginChoice />} />

        {/* User Routes */}
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />

        {/* Food Partner Routes */}
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />

        <Route path="/create-food" element={<CreateFood/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

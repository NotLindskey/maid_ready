import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AdminPage from '../AdminPage/AdminPage';
import OwnerRegistration from '../RegisterPage/RegisterOwnerPage';
import KeeperRegistration from '../RegisterPage/RegisterKeeperPage';
import CleaningStandards from '../LandingPage/CleaningStandards';

import OwnersHomePage from '../UserPage/OwnersHomePage/OwnersHomePage';
import OwnerRequestDetails from '../OwnerRequestDetails/OwnerRequestDetails';
import OwnerViewRequestsPage from '../OwnerViewRequestsPage/OwnerViewRequestsPage';
import OwnerActiveRequestsPage from '../OwnerActiveRequestPage/OwnerActiveRequestPage';
import OwnerCompletedRequestsPage from '../OwnerCompletedRequestPage/OwnerCompletedRequestPage';
import PropertiesPage from '../PropertiesPage/PropertiesPage';
import CreateJobForm from '../CreateJobForm/CreateJobForm';
import AddPropertyPage from '../AddPropertyPage/AddPropertyPage';

import KeeperHomePage from '../UserPage/KeeperHomePage/KeeperHomePage';
import JobList from '../JobList/JobList';
import JobDetails from '../JobDetails/JobDetails';
import './App.css';
import LoginSelection from '../LoginSelectionPage/LoginSelectionPage';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* ----------------------------------------------------------------
            NOT Protected Routes
          ---------------------------------------------------------------- */}
          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/CleaningStandards">
            <CleaningStandards />
          </Route>

          {/* ----------------------------------------------------------------
            Protected Routes
          ---------------------------------------------------------------- */}
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          {/* ----------------------------------------------------------------
            ANY (account_type)
          ---------------------------------------------------------------- */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/home"
            type="all"
          >
            {user.account_type === 'owner' ? (
              <OwnersHomePage />
            ) : user.account_type === 'keeper' ? (
              <KeeperHomePage />
            ) : user.account_type === 'admin' ? (
              <AdminPage />
            ) : (
              <LoginPage />
            )}
          </ProtectedRoute>

          {/* ----------------------------------------------------------------
            ADMIN (admins only)
          ---------------------------------------------------------------- */}
          <ProtectedRoute exact path="/admin" type="admin">
            <AdminPage />
          </ProtectedRoute>

          {/* ----------------------------------------------------------------
            KEEPER (keepers only)
          ---------------------------------------------------------------- */}
          <ProtectedRoute exact path="/keeper/job-list" type="keeper">
            <JobList />
          </ProtectedRoute>

          <ProtectedRoute exact path="/keeper/job/details/:id" type="keeper">
            <JobDetails />
          </ProtectedRoute>

          <ProtectedRoute exact path="/keeper/home" type="keeper">
            <KeeperHomePage />
          </ProtectedRoute>

          {/* ----------------------------------------------------------------
            OWNER (owners only)
          ---------------------------------------------------------------- */}
          <ProtectedRoute exact path="/properties" type="owner">
            <PropertiesPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/properties/add" type="owner">
            <AddPropertyPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/job/create" type="owner">
            <CreateJobForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/OwnerViewRequestsPage" type="owner">
            <OwnerViewRequestsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/OwnerCompletedRequestsPage" type="owner">
            <OwnerCompletedRequestsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/OwnerActiveRequestsPage" type="owner">
            <OwnerActiveRequestsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/OwnerRequestDetails" type="owner">
            <OwnerRequestDetails />
          </ProtectedRoute>

          {/* ----------------------------------------------------------------
            LOGIN and REGISTER routes
          ---------------------------------------------------------------- */}
          {/* Login and Register routes deal with Login in and Registering an account.
          these Routes often use components like the Login Form and Register Form to "directly"
          communicate with the database to create a new user/ checking the credentials of a user.

          - currently Login is the same for all account no matter the account type
              - the authorization check is done through the protected route

          - the Register pages have to be separate (owners and keepers) so when being created within the
          database, the correct account type is assigned to the account*/}

          {/* ----------------------------------------------------------------
            LOGIN routes
          ---------------------------------------------------------------- */}
          {/* Login Selection */}
          <Route exact path="/login/selection">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the login page
              <LoginSelection />
            )}
          </Route>

          {/* login pages */}
          <Route exact path="/login/keeper">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the login page
              <LoginPage type="keeper" />
            )}
          </Route>

          <Route exact path="/login/owner">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the login page
              <LoginPage type="owner" />
            )}
          </Route>

          {/* ----------------------------------------------------------------
            REGISTER routes
          ---------------------------------------------------------------- */}
          {/* registration pages */}
          <Route exact path="/register/keeper">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage type="keeper" />
            )}
          </Route>

          <Route exact path="/register/owner">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage type="owner" />
            )}
          </Route>

          <Route exact path="/OwnerRegistration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the registration page

              <OwnerRegistration type="owner" />
            )}
          </Route>

          <Route exact path="/KeeperRegistration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the registration page
              <KeeperRegistration type="keeper" />
            )}
          </Route>

          {/* ----------------------------------------------------------------
            404 (not found)
          ---------------------------------------------------------------- */}
          {/* if user enters a page that hasn't been created / route hasn't been declared then
          a 404 page will show up
          */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

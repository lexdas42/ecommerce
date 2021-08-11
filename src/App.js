import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import HomeSreen from './screens/homeScreen'
import ProductScreen from './screens/productScreen'
import CartScreen from './screens/cartScreen';
import {Link} from 'react-router-dom'
import SigninScreen from './screens/signinScreen';
import { signout } from './action/userActions';
import AdminRoute from './components/AdminRoute'
import RegisterScreen from './screens/registerScreen';
import ShippingAdressScreen from './screens/shippingAdressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
      <BrowserRouter>
    <div class="container-grid">
    <header class="row">
        <div>
        <Link class="brand" to={`/`}>Lexdas</Link>
        </div>
        <div>
            <Link to="/cart">
               Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}</Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}

{userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}

{userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
    </header>
    <main>
    <Route path="/seller/:id" component={SellerScreen}></Route>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/signin' component={SigninScreen}></Route>
      <Route path='/payment' component={PaymentMethodScreen}></Route>
      <Route path='/placeorder' component={PlaceOrderScreen}></Route>
      <Route path='/order/:id' component={OrderScreen}></Route>
      
      <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
      <Route path='/shipping' component={ShippingAdressScreen}></Route>
        <Route path='/' component={HomeSreen} exact />
        <Route path='/product/:id' component={ProductScreen} exact  />
        <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
        <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
            <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
            <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>
    
    </main>
    <footer class="row center">
    All right reserved
    </footer>
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;

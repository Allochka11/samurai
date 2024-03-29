import React, { lazy, Suspense } from "react";
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { initializeAppThunkCreator } from "redux/appReducer";
import store, { AppRootStateType } from "redux/redux-store";
import { Preloader } from "components/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));

type MapDispatchToPropsType = {
  initializeAppThunkCreator: () => void;
};

type MapStateToPropsType = {
  initialized: boolean;
};

type AppType = MapStateToPropsType & MapDispatchToPropsType;

class App extends React.Component<AppType> {
  componentDidMount() {
    this.props.initializeAppThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className={s.content}>
        <HeaderContainer />

        <div className={s.content__container}>
          <Navbar />
          <div className={s.content__right}>
            <Suspense fallback={<Preloader />}>
              <Switch>
                <Route path="/dialogs" render={() => <DialogsContainer />} />

                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
                <Route path="*" render={() => <div>404 not found</div>} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
  initialized: state.appReducer.initialized,
});

const AppWithRouter = compose<React.FC>(withRouter, connect(mapStateToProps, { initializeAppThunkCreator }))(App);

const SamuraiApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppWithRouter />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiApp;

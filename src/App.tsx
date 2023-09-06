import React from "react";
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import { DialogsContainer } from "components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { initializeAppThunkCreator } from "redux/appReducer";
import store, { AppRootStateType } from "redux/redux-store";
import { Preloader } from "components/common/Preloader/Preloader";

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
            <Switch>
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
            </Switch>
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

//for App.test
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

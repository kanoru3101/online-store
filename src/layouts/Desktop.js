import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import HomeContainer from "../scenes/Home/OldHomeContainer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AdminContainer from "../scenes/AdminPage/AdminContainer";
import CartContainer from "../scenes/Cart/CartContainer";
import EditProductContainer from "../scenes/EditProduct/EditProductContainer";
import ProductContainer from "../scenes/ProductPage/ProductPage";
import AuthPageContainer from "../scenes/Auth/AuthPageContainer";
import ModalContainer from "../components/Modal/Modal";
import { connect } from "react-redux";
import AboutPage from "../scenes/About/About";
import ContactPage from "../scenes/Contact/ContactPage";
import PolicyPage from "../scenes/Policy/PolicyPage";
import TermConditionsPage from "../scenes/TermConditions/TermConditions";
import ErrorPage from "../scenes/ErrorPage/ErrorPage";
import store from "store2";

const styles = {
  App: {
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  main: {
    paddingTop: 40,
    justifyContent: "center",
    flex: 1
  }
};

function ProtectedRoute(props) {
  if (props.token) {
    if (props.user.role === "admin") {
      return <Route {...props} />;
    }
  }
  return <Redirect to="/auth" />;
}

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  renderModal = isModal => {
    if (isModal && this.previousLocation.pathname === "/") {
      return (
        <Route
          path={routes.cart}
          component={() => (
            <ModalContainer typeModal="CART" showModal={true} {...this.props} />
          )}
        />
      );
    }
  };

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location &&
      this.previousLocation.pathname === "/"
    );

    return (
      <div style={styles.App}>
        <Header location={location} />
        <main style={styles.main}>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path={routes.home} component={HomeContainer} />
            <ProtectedRoute
              exact
              path={routes.admin}
              {...this.props}
              component={AdminContainer}
            />
            <ProtectedRoute
              path={routes.adminProduct}
              component={EditProductContainer}
              {...this.props}
            />
            <Route path={routes.productPage} component={ProductContainer} />

            <Route path={routes.cart} component={CartContainer} />
            <Route exact path={routes.auth} component={AuthPageContainer} />
            <Route path={routes.about} component={AboutPage} />
            <Route path={routes.contact} component={ContactPage} />
            <Route path={routes.policy} component={PolicyPage} />
            <Route
              path={routes.termConditions}
              component={TermConditionsPage}
            />
            <Route
              path={routes.rememberPass}
              component={() => (
                <ModalContainer
                  typeModal="REMEMBER_PASS"
                  showModal={true}
                  {...this.props}
                />
              )}
            />
            <Route path={routes.policy} component={PolicyPage} />
            <Route component={ErrorPage} />
          </Switch>
          {isModal ? this.renderModal(isModal) : null}
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: store.local.get("token"),
  user: state.app.user
});

export default connect(mapStateToProps)(Desktop);

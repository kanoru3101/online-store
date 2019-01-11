import React from "react";
import AddProductContainer from "../../scenes/AdminPage/AddProduct";
import CartContainer from "../../scenes/Cart/CartContainer";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import RememberPassPage from "../../scenes/RememberPass/RememberPass";
import AdminEditUserContainer from "../../scenes/AdminPage/AdminEditUserContainer";
import { withState, withHandlers, compose } from "recompose";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
  modal: {
    width: "80%",
    height: "80%",
    position: "fixed",
    left: "10%",
    top: "10%",
    border: "none",
    overflow: "auto"
  },
  dialog: {
    cart: {
      width: 900
    }
  },
  dialogPaper: {
    minHeight: "30vh",
    maxWidth: "30vh"
  },
  rememberPass: {
    maxWidth: 400,
    margin: "0 auto"
  },
  addProduct: {
    maxWidth: 800,
    margin: "0 auto"
  },
  userEdit: {
    maxWidth: 800,
    margin: "0 auto"
  },
  titleCart: {
    fontWeight: "bold",
    color: "#7c7c7c",
    paddingTop: 10,
    paddingLeft: 50
  }
};

const ModalContainer = props => {
  const { classes } = props;
  switch (props.typeModal) {
    case "ADD_PRODUCT":
      return (
        <Dialog
          aria-labelledby="add-modal"
          aria-describedby="add-modal"
          open={props.open}
          onClose={() => props.adminModalClose()}
          scroll={props.scroll}
          maxWidth={"md"}
          className={classes.addProduct}
        >
          <AddProductContainer
            handleClickAway={props.adminModalClose}
            addProduct={props.addProduct}
            {...props}
          />
        </Dialog>
      );

    case "EDIT_USER":
      return (
        <Dialog
          aria-labelledby="edit-user-modal"
          aria-describedby="edit-user-modal"
          open={props.open}
          onClose={() => props.adminModalClose()}
        >
          <AdminEditUserContainer
            id={props.modalParams}
            onClose={props.adminModalClose}
          />
        </Dialog>
      );

    case "CART":
      return (
        <Dialog
          aria-labelledby="cart-modal"
          aria-describedby="cart-modal"
          open={props.open}
          onClose={() => props.goBack(props)}
          scroll={props.scroll}
        >
          <Grid container>
            <Grid item xs={12}>
              <Grid container justify={"flex-end"}>
                <Grid item xs={8}>
                  <Typography
                    variant={"headline"}
                    className={classes.titleCart}
                  >
                    Products
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography component={"div"} align={"right"}>
                    <IconButton
                      onClick={() => props.goBack()}
                      color={"primary"}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <CartContainer isModal={true} />
            </Grid>
          </Grid>
        </Dialog>
      );

    case "REMEMBER_PASS":
      return (
        <Dialog
          aria-labelledby="remember-pass-modal"
          aria-describedby="remember-pass-modal"
          open={props.open}
          onClose={() => props.goBack(props)}
          scroll={props.scroll}
          className={classes.rememberPass}
        >
          <RememberPassPage />
          <Button variant={"contained"} onClick={() => props.goBack(props)}>
            Close
          </Button>
        </Dialog>
      );

    default:
      return null;
  }
};

const enhance = compose(
  withState("open", "changeModalWindow", true),
  withHandlers({
    adminModalClose: props => () => {
      props.changeModalWindow(false);
      props.handleCloseModal();
    },
    goBack: props => () => {
      props.changeModalWindow(false);
      props.history.goBack();
    }
  }),
  withState("scroll", "changeScroll", "body")
);

export default enhance(withStyles(styles)(ModalContainer));

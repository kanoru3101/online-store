import React from "react";
import ProductListView from "./ProductListView";
import ModalContainer from "../../components/Modal/Modal";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productOperations from "../../modules/products/productsOperations";
import * as usersOperations from "../../modules/users/usersOperations";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "react-bootstrap/es/TabContainer";
import Typography from "@material-ui/core/Typography";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserListView from "./UsersProductListView";
import { TablePaginationActionsWrapped } from "../../components/TablePaginationActions/TablePaginationActions";
import TablePagination from "@material-ui/core/TablePagination";
import { compose, lifecycle, withHandlers, withState } from "recompose";

const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row"
  },

  listProduct: {
    textAlign: "left",
    paddingLeft: 20,
    textDecoration: "none",
    flexWrap: "wrap",
    alignItems: "center"
  },
  tab: {
    paddingBottom: 20
  }
};
/*
class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      typeModal: null,
      modalParams: null,
      tabValue: 0,
      page: 0,
      rowsPerPage: 8,
      pageUsers: 0,
      rowsPerPageUsers: 8
    };
  }

  componentDidMount() {
    //fetch products
    const offset = this.state.rowsPerPage * this.state.page;
    const limit = this.state.rowsPerPage;
    this.props.fetchProducts({ limit, offset });

    //fetch users
    const offsetUsers = this.state.rowsPerPageUsers * this.state.pageUsers;
    const limitUsers = this.state.rowsPerPageUsers;
    this.props.fetchUsers({ limitUsers, offsetUsers });
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    //update products
    if (
      this.state.page !== prevProps.page &&
      this.props.products === prevProps.products &&
      this.props.isLoading === prevProps.isLoading &&
      this.state.tabValue === 0
    ) {
      const limit = this.state.rowsPerPage;
      const offset = this.state.rowsPerPage * this.state.page;
      this.props.fetchProducts({ limit, offset });
    }

    //update users

    if (
      this.state.pageUsers !== prevProps.pageUsers &&
      Object.keys(this.props.users).length ===
        Object.keys(prevProps.users).length &&
      this.props.isUserLoading === prevProps.isUserLoading &&
      this.state.tabValue === 1
    ) {
      const offsetUsers = this.state.rowsPerPageUsers * this.state.pageUsers;
      const limitUsers = this.state.rowsPerPageUsers;
      this.props.fetchUsers({ limitUsers, offsetUsers });
    }
  }

  deleteUser = deleteId => {
    this.props.deleteUser(deleteId);
  };

  deleteProduct = deleteId => {
    this.props.deleteProduct(deleteId);
  };

  addProduct = newProduct => {
    this.setState({
      showModal: false
    });
    this.props.addProduct(newProduct);
  };

  handleOpenModal = (typeModal, modalParams = null) => {
    this.setState({
      showModal: true,
      typeModal,
      modalParams
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      typeModal: null,
      modalParams: null
    });
  };

  showEditUser = () => {
    return (
      <ModalContainer
        handleCloseModal={this.handleCloseModal}
        typeModal={"EDIT_USER"}
        {...this.state}
      />
    );
    //this.props.updateUser(userId);
  };

  showAddModal = () => {
    return (
      <ModalContainer
        handleCloseModal={this.handleCloseModal}
        addProduct={this.addProduct}
        typeModal={this.state.typeModal}
        {...this.state}
      />
    );
  };

  handleChangeTabs = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangePageUsers = (event, page) => {
    this.setState({ pageUsers: page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangeRowsPerPageUsers = event => {
    this.setState({ rowsPerPageUsers: event.target.value });
  };

  renderTab = value => {
    switch (value) {
      case 0:
        return (
          <Grid container justify={"center"}>
            <TablePagination
              rowsPerPageOptions={[8, 12, 16]}
              count={this.props.countProducts}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActionsWrapped}
              style={{ textAlign: "center" }}
            />

            <Grid item xs={8} style={styles.listProduct}>
              <HomeProductsView
                openModal={this.handleOpenModal}
                deleteProduct={this.deleteProduct}
                products={[...this.props.products].slice(
                  this.state.rowsPerPage * this.state.page,
                  this.state.rowsPerPage * (this.state.page + 1)
                )}
              />
              {this.state.showModal && this.state.typeModal === "ADD_PRODUCT"
                ? this.showAddModal()
                : null}
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container justify={"center"}>
            <TablePagination
              rowsPerPageOptions={[8, 12, 16]}
              count={this.props.countUsers}
              rowsPerPage={this.state.rowsPerPageUsers}
              page={this.state.pageUsers}
              onChangePage={this.handleChangePageUsers}
              onChangeRowsPerPage={this.handleChangeRowsPerPageUsers}
              ActionsComponent={TablePaginationActionsWrapped}
              style={{ textAlign: "center" }}
            />
            <Grid item xs={8} style={styles.listProduct}>
              <UserListView
                showModalUser={this.handleOpenModal}
                deleteUser={this.deleteUser}
                users={[...this.props.users].slice(
                  this.state.rowsPerPageUsers * this.state.pageUsers,
                  this.state.rowsPerPageUsers * (this.state.pageUsers + 1)
                )}
              />
              {this.state.showModal && this.state.typeModal === "EDIT_USER"
                ? this.showEditUser()
                : null}
            </Grid>
          </Grid>
        );
      default:
        return (
          <Grid item xs={8} style={styles.listProduct}>
            <ErrorPage />
          </Grid>
        );
    }
  };

  render() {
    if (this.props.isLoading || this.props.isUserLoading) {
      return <div>Loading...</div>;
    }

    if (this.props.isError) {
      return (
        <React.Fragment>
          <h1>Error....</h1>
          <p>{this.props.error}</p>
        </React.Fragment>
      );
    }

    return (
      <Grid container style={styles.container}>
        <Grid container justify={"center"} style={styles.tab}>
          <Typography align={"center"} component={"div"}>
            <Tabs
              value={this.state.tabValue}
              onChange={this.handleChangeTabs}
              indicatorColor="primary"
              textColor="primary"
              scrollButtons="auto"
            >
              <Tab label="Products" />
              <Tab label="Users" />
            </Tabs>
          </Typography>
        </Grid>
        <TabContainer>{this.renderTab(this.state.tabValue)}</TabContainer>
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  products: productsSelectors.getProducts(state),
  users: state.users.users,
  countProducts: state.products.countProducts,
  countUsers: state.users.countUsers,
  isLoading: state.products.isLoading,
  isUserLoading: state.users.isLoadingUsers,
  isError: !!state.products.error,
  isUserError: !!state.users.error
});

const mapStateToDispatch = {
  fetchProducts: productOperations.fetchProducts,
  fetchUsers: usersOperations.fetchUsers,
  updateProduct: productOperations.updateProducts,
  deleteProduct: productOperations.deleteProduct,
  deleteUser: usersOperations.deleteUser,
  addProduct: productOperations.addProducts
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AdminContainer);
*/
const mapStateToProps = state => ({
  products: productsSelectors.getProducts(state),
  users: state.users.users,
  countProducts: state.products.countProducts,
  countUsers: state.users.countUsers,
  isLoading: state.products.isLoading,
  isUserLoading: state.users.isLoadingUsers,
  isError: !!state.products.error,
  isUserError: !!state.users.error
});

const mapStateToDispatch = {
  fetchProducts: productOperations.fetchProducts,
  fetchUsers: usersOperations.fetchUsers,
  updateProduct: productOperations.updateProducts,
  deleteProduct: productOperations.deleteProduct,
  deleteUser: usersOperations.deleteUser,
  addProduct: productOperations.addProducts
};

const RenderTab = props => {
  switch (props.tabValue) {
    case 0:
      return (
        <Grid container justify={"center"}>
          <TablePagination
            rowsPerPageOptions={[8, 12, 16]}
            count={props.countProducts}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onChangePage={props.handleChangePage}
            onChangeRowsPerPage={props.handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActionsWrapped}
            style={{ textAlign: "center" }}
          />

          <Grid item xs={8} style={styles.listProduct}>
            <ProductListView
              openModal={props.handleOpenModal}
              deleteProduct={props.deleteProduct}
              products={[...props.products].slice(
                props.rowsPerPage * props.page,
                props.rowsPerPage * (props.page + 1)
              )}
            />
            {props.showModal && props.typeModal === "ADD_PRODUCT"
              ? showAddModal(props)
              : null}
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container justify={"center"}>
          <TablePagination
            rowsPerPageOptions={[8, 12, 16]}
            count={props.countUsers}
            rowsPerPage={props.rowsPerPageUsers}
            page={props.pageUsers}
            onChangePage={props.handleChangePageUsers}
            onChangeRowsPerPage={props.handleChangeRowsPerPageUsers}
            ActionsComponent={TablePaginationActionsWrapped}
            style={{ textAlign: "center" }}
          />
          <Grid item xs={8} style={styles.listProduct}>
            <UserListView
              showModalUser={props.handleOpenModal}
              deleteUser={props.deleteUser}
              users={[...props.users].slice(
                props.rowsPerPageUsers * props.pageUsers,
                props.rowsPerPageUsers * (props.pageUsers + 1)
              )}
            />
            {props.showModal && props.typeModal === "EDIT_USER"
              ? showEditUser(props)
              : null}
          </Grid>
        </Grid>
      );
    default:
      return (
        <Grid item xs={8} style={styles.listProduct}>
          <ErrorPage />
        </Grid>
      );
  }
};

const showEditUser = props => {
  return (
    <ModalContainer
      handleCloseModal={props.handleCloseModal}
      typeModal={"EDIT_USER"}
      {...props}
    />
  );
  //this.props.updateUser(userId);
};

const showAddModal = props => {
  return (
    <ModalContainer
      handleCloseModal={props.handleCloseModal}
      addProduct={props.addProduct}
      typeModal={props.typeModal}
      {...props}
    />
  );
};

const AdminContainer = props => {
  if (props.isLoading || props.isUserLoading) {
    return <div>Loading...</div>;
  }

  if (props.isError) {
    return (
      <React.Fragment>
        <h1>Error....</h1>
        <p>{props.error}</p>
      </React.Fragment>
    );
  }
  return (
    <Grid container style={styles.container}>
      <Grid container justify={"center"} style={styles.tab}>
        <Typography align={"center"} component={"div"}>
          <Tabs
            value={props.tabValue}
            onChange={props.handleChangeTabs}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
          >
            <Tab label="Products" />
            <Tab label="Users" />
          </Tabs>
        </Typography>
      </Grid>
      <TabContainer>
        <RenderTab {...props} />
      </TabContainer>
    </Grid>
  );
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("showModal", "handleShowModal", false),
  withState("typeModal", "handleTypeModal", null),
  withState("modalParams", "handleModalParams", null),
  withState("tabValue", "handleTabValue", 0),
  withState("page", "handlePage", 0),
  withState("rowsPerPage", "handleRowsPerPage", 8),
  withState("pageUsers", "handlePageUsers", 0),
  withState("rowsPerPageUsers", "handleRowsPerPageUsers", 8),
  withHandlers({
    deleteUser: props => deleteId => {
      props.deleteUser(deleteId);
    },
    deleteProduct: props => deleteId => {
      props.deleteProduct(deleteId);
    },
    addProduct: props => newProduct => {
      props.handleShowModal(false);
      props.addProduct(newProduct);
    },
    handleOpenModal: props => (typeModal, modalParams = null) => {
      props.handleShowModal(true);
      props.handleTypeModal(typeModal);
      props.handleModalParams(modalParams);
    },
    handleCloseModal: props => () => {
      props.handleShowModal(false);
      props.handleTypeModal(null);
      props.handleModalParams(null);
    },

    handleChangeTabs: props => (event, tabValue) => {
      props.handleTabValue(tabValue);
    },

    handleChangePage: props => (event, page) => {
      props.handlePage(page);
    },

    handleChangePageUsers: props => (event, page) => {
      props.handlePageUsers(page);
    },

    handleChangeRowsPerPage: props => event => {
      props.handleRowsPerPage(event.target.value);
    },

    handleChangeRowsPerPageUsers: props => event => {
      props.handleRowsPerPageUsers(event.target.value);
    }
  }),
  lifecycle({
    componentDidMount() {
      //fetch products
      const offset = this.props.rowsPerPage * this.props.page;
      const limit = this.props.rowsPerPage;
      this.props.fetchProducts({ limit, offset });

      //fetch users
      const offsetUsers = this.props.rowsPerPageUsers * this.props.pageUsers;
      const limitUsers = this.props.rowsPerPageUsers;
      this.props.fetchUsers({ limitUsers, offsetUsers });
    },
    componentDidUpdate(prevProps) {
      //update products
      if (
        (this.props.page !== prevProps.page ||
          this.props.rowsPerPage !== prevProps.rowsPerPage) &&
        this.props.products === prevProps.products &&
        this.props.isLoading === prevProps.isLoading &&
        this.props.tabValue === 0
      ) {
        const limit = this.props.rowsPerPage;
        const offset = this.props.rowsPerPage * this.props.page;
        this.props.fetchProducts({ limit, offset });
      }

      //update users
      if (
        (this.props.pageUsers !== prevProps.pageUsers ||
          this.props.rowsPerPageUsers !== prevProps.rowsPerPageUsers) &&
        Object.keys(this.props.users).length ===
          Object.keys(prevProps.users).length &&
        this.props.isUserLoading === prevProps.isUserLoading &&
        this.props.tabValue === 1
      ) {
        const offsetUsers = this.props.rowsPerPageUsers * this.props.pageUsers;
        const limitUsers = this.props.rowsPerPageUsers;
        this.props.fetchUsers({ limitUsers, offsetUsers });
      }
    }
  })
);

export default enhance(AdminContainer);

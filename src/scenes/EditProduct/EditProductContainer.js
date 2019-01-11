import React from "react";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productsOperations from "../../modules/products/productsOperations";
import { connect } from "react-redux";
import { routes } from "../../routes";

import AdminProductView from "../../components/ProductView/AdminProductView";

import { compose, lifecycle, withHandlers, withState } from "recompose";

/*
class EditProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.product
    };
  }

  componentDidMount() {
    if (!this.props.product) {
      this.props.fetchProducts(this.props.match.params.id);
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.updateProduct(this.state);
    this.props.history.push(routes.admin);
  };

  onChange = item => ({ target: { value } }) => {
    if (Object.keys(this.state).length === 0) {
      this.setState({
        ...this.props.product
      });
    }
    this.setState({
      [item]: value
    });
  };

  submitButton = () => (
    <Button variant="fab" color="primary" mini type="submit">
      <EditIcon />
    </Button>
  );

  render() {
    if (!this.props.product) {
      return <div>Loading...</div>;
    }

    return (
      <AdminProductView
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        title={
          Object.keys(this.state).length > 0
            ? this.state.title
            : this.props.product.title
        }
        image={
          Object.keys(this.state).length > 0
            ? this.state.image
            : this.props.product.image
        }
        description={
          Object.keys(this.state).length > 0
            ? this.state.description
            : this.props.product.description
        }
        price={
          Object.keys(this.state).length > 0
            ? this.state.price
            : this.props.product.price
        }
        submitButton={this.submitButton()}
      />
    );
  }
}
*/
const mapStateToProps = (state, props) => ({
  products: productsSelectors.getProducts(state),
  product: productsSelectors.getProduct(state, props.match.params.id),
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error
});

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchProductsById,
  updateProduct: productsOperations.updateProducts
};

const EditProductContainer = props => {
  if (!props.product) {
    return <div>Loading...</div>;
  }
  return (
    <AdminProductView
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      title={
        props.editProduct !== undefined
          ? props.editProduct.title
          : props.product.title
      }
      image={
        props.editProduct !== undefined
          ? props.editProduct.image
          : props.product.image
      }
      description={
        props.editProduct !== undefined
          ? props.editProduct.description
          : props.product.description
      }
      price={
        props.editProduct !== undefined
          ? props.editProduct.price
          : props.product.price
      }
      handleCloseModal={props.goBack}
    />
  );
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("editProduct", "changeProduct", props => props.product),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      props.updateProduct(props.editProduct);
      props.history.push(routes.admin);
    },
    onChange: props => item => event => {
      props.changeProduct({
        ...props.editProduct,
        [item]: event.target.value
      });
    },
    goBack: props => () => {
      props.history.push(routes.admin);
    }
  }),
  lifecycle({
    componentDidMount() {
      if (!this.props.product) {
        this.props.fetchProducts(this.props.match.params.id);
      }
    }
  })
);
export default enhance(EditProductContainer);

/*
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(EditProductContainer);
*/

import React from "react";
import AdminProductView from "../../components/ProductView/AdminProductView";
import { compose, withHandlers, withState } from "recompose";

/*
class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: "",
      price: ""
    };
  }

  handleCloseModal = () => {
    this.props.handleClickAway();
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addProduct(this.state);
  };

  buttonRender = () => (
    <Grid>
      <Button variant="fab" color="primary" mini type="submit">
        <AddIcon />
      </Button>

      <Button
        variant="fab"
        color="secondary"
        mini
        onClick={() => this.handleCloseModal()}
      >
        <CloseIcon />
      </Button>
    </Grid>
  );

  onChange = item => ({ target: { value } }) => {
    switch (item) {
      case "price":
        this.setState({
          [item]: Number(value)
        });
        break;

      default:
        this.setState({
          [item]: value
        });
    }
  };

  render() {
    return (
      <Paper>
        <AdminProductView
          {...this.state}
          handleCloseModal={this.handleCloseModal}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          submitButton={this.buttonRender()}
        />
      </Paper>
    );
  }
}

export default AddProductContainer;
*/

const AddProductContainer = props => (
  <AdminProductView
    title={props.values.title}
    description={props.values.description}
    image={props.values.image}
    price={props.values.price}
    handleCloseModal={props.handleCloseModal}
    onChange={props.onChange}
    onSubmit={props.onSubmit}
  />
);

const enhance = compose(
  withState("values", "updateValues", {
    title: "",
    description: "",
    image: "",
    price: ""
  }),
  withHandlers({
    onChange: props => item => event => {
      props.updateValues({
        ...props.values,
        [item]: event.target.value
      });
    },
    onSubmit: props => e => {
      e.preventDefault();
      props.addProduct(props.values);
    },
    handleCloseModal: props => () => {
      props.handleClickAway();
    }
  })
);

export default enhance(AddProductContainer);

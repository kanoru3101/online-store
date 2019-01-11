import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper/Paper";

const styles = {
  container: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  boxInput: {
    paddingBottom: 15
  },
  imageDiv: {
    justifyItems: "center",
    alignItems: "center"
  }
};

const AdminProductView = ({
  title,
  description,
  price,
  image,
  onChange,
  onSubmit,
  handleCloseModal
}) => (
  <Paper>
    <Grid item xs={12} style={styles.container}>
      <form onSubmit={onSubmit}>
        <Grid container alignContent={"center"} justify={"center"} spacing={16}>
          <Grid item xs={10} style={styles.boxInput}>
            <Grid container spacing={16}>
              <Grid item xs={3}>
                <InputLabel htmlFor={title}>Title</InputLabel>
              </Grid>
              <Grid item xs={7}>
                <Input
                  name="title"
                  fullWidth
                  value={title}
                  onChange={onChange("title")}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} style={styles.boxInput}>
            <Grid container spacing={16}>
              <Grid item xs={3}>
                <InputLabel htmlFor={description}>Description</InputLabel>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  multiline={true}
                  rows={2}
                  fullWidth
                  rowsMax={6}
                  name="description"
                  value={description}
                  onChange={onChange("description")}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} style={styles.boxInput}>
            <Grid container spacing={16} style={styles.imageDiv}>
              <Grid item xs={3}>
                <InputLabel htmlFor={image}>Image</InputLabel>
              </Grid>
              <Grid item xs={7}>
                <Input
                  name="image"
                  fullWidth
                  value={image}
                  onChange={onChange("image")}
                />
              </Grid>
              <Grid item xs={2}>
                <img src={image} alt={title} style={{ height: 100 }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} style={styles.boxInput}>
            <Grid container spacing={16} style={styles.imageDiv}>
              <Grid item xs={3}>
                <InputLabel htmlFor={price}>Price</InputLabel>
              </Grid>
              <Grid item xs={7}>
                <Input
                  type={"number"}
                  name="price"
                  value={price}
                  onChange={onChange("price")}
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={16}
              style={styles.imageDiv}
              justify={"flex-end"}
            >
              <Typography align={"right"} component={"div"}>
                <Grid item xs={12}>
                  <Grid>
                    <Button variant="fab" color="primary" mini type="submit">
                      <AddIcon />
                    </Button>

                    <Button
                      variant="fab"
                      color="secondary"
                      mini
                      onClick={() => handleCloseModal()}
                    >
                      <CloseIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Paper>
);

export default withStyles(styles)(AdminProductView);

import { useState } from 'react';
import { connect } from 'react-redux'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  withStyles,
  Grid,
  InputLabel,
  Link
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';
import MyInputField from '../../molecules/MyInputField';
import Product from '../Product';
import { userActions } from '../../../actions';

function FileUpload({
  dispatch,
  isUploadingFile,
  setIsUploadingFile,
  CADData,
  classes
}) {
  const [fullName, setFullName] = useState('');
  const [reference, setReference] = useState('');
  const[products, setProducts] = useState([
    {
    metal: 'Gold',
    size: '',
    dimensions: '',
    description: '',
    image: {}
  }

]);
const [expandedAccordion, setExpandedAccordion] = useState(0);
  const handleSubmit = () => {
    setIsUploadingFile(false);
    const CADData = {
      fullName,
      reference,
      products
    }
    dispatch(userActions.uploadCAD(CADData))
  }
  const handleClose = () => {
    setIsUploadingFile(false);
  }
  const handleNameChange = (e) => {
    setFullName(e.target.value);
  }
  const handleReferenceChange = (e) => {
    setReference(e.target.value);
  }
  const handleAddProduct = (e) => {
    e.preventDefault();
    if(products.length<=2){
      const newProduct = {
        metal: 'Gold',
        size: '',
        dimensions: '',
        description: '',
        image: {}
      }
      setProducts([...products, newProduct])
    }
  }
  const handleAccordionExpansion = (isExpanded, accordionId) => {
    setExpandedAccordion(isExpanded ? accordionId : 0)
  }

  const handleProductDetailsChange = (name, value) => {
    const updatedProducts = [...products];
    updatedProducts[expandedAccordion-1][name] = value;
    setProducts(updatedProducts)
  }

  return (
    <div className={classes.fileUpload}>
      <Dialog
        open={isUploadingFile}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{paper: classes.fileUploadDialog}}
        maxWidth='xs'
      >
        <Grid container>
          <Grid container>
            <Grid item md={4} lg={4}>
            </Grid>
            <Grid item md={7} lg={7}>
              <DialogTitle id="form-dialog-title" classes={{root: classes.dialogTitle}}>CAD Upload</DialogTitle>
            </Grid>
            <Grid item md={1} lg={1}>
              <IconButton aria-label="close" classes={{ root: classes.closeButton }} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          <DialogContent classes={{root: classes.dialogContentRoot}}>
            <Grid container>
              <Grid item md={12} lg={12}>
                <MyInputField
                  id="full-name"
                  label="Full Name"
                  placeholder="Your Name..."
                  value={fullName}
                  type="text"
                  handleChange={handleNameChange}
                />
              </Grid>
              <Grid item md={12} lg={12}>
                <MyInputField
                  id="reference"
                  label="Reference"
                  placeholder="Reference Name..."
                  value={reference}
                  type="text"
                  handleChange={handleReferenceChange}
                />
              </Grid>
              <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item >
                  <InputLabel htmlFor="" classes={{root: classes.formLabel}}>Product Details</InputLabel>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    onClick={handleAddProduct}
                    underline='always'
                    classes={{root: classes.linkButton}}
                    disabled
                  >
                    Add Product
                  </Link>
                </Grid>
              </Grid>
              {products && products.map((productData, index) => (
                <Grid item md={12} lg={12} key={index}>
                  <Product
                    productData={productData}
                    productId={index+1}
                    expanded={expandedAccordion === index+1}
                    handleAccordionExpansion={handleAccordionExpansion}
                    handleProductDetailsChange={(name, value) => handleProductDetailsChange(name, value)}
                  />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <Grid container justifyContent='flex-end'>
            <DialogActions>
              {/* <Grid item md={9} lg={9}></Grid> */}
              <Grid item>
                <Button variant="contained" color="secondary" fullWidth onClick={handleSubmit}>Submit</Button>
              </Grid>
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user, error } = state
  return {
    CADData: user.CADData,
    error
  }
}

export default connect(mapStateToProps)(withStyles(styles)(FileUpload));

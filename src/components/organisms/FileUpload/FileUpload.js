import { useEffect, useState } from 'react';
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

function FileUpload({
  isUploadingFile,
  setIsUploadingFile,
  classes
}) {
  const [fullName, setFullName] = useState('');
  const [reference, setReference] = useState('');
  const[products, setProducts] = useState([
    {
    metal: 'Gold',
    size: '2mm',
    dimensions: '',
    description: 'Gold product'
  },
  {
    metal: 'Silver',
    size: '5mm',
    dimensions: '',
    description: 'Silver product'
  }
]);
const [expandedAccordion, setExpandedAccordion] = useState(0);
  const handleSubmit = () => {
    setIsUploadingFile(false);
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
  }
  const handleAccordionExpansion = (isExpanded, accordionId) => {
    setExpandedAccordion(isExpanded ? accordionId : 0)
  }

  const handleMetalSelection = (metal) => {
    console.log('final',metal)
  }
  console.log('products*',products)

  const handleProductDetailsChange = (index, name, value) => {
    console.log('before update',products)
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    // products[index] = updatedProducts;
    console.log('after update',updatedProducts)
    setProducts(products)
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
                  labelNote="Optional but highly recommended"
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
              <Grid container justifyContent='space-between'>
                <Grid item >
                  <InputLabel htmlFor="">Product Details</InputLabel>
                </Grid>
                <Grid item>
                  <Link href="#" onClick={handleAddProduct} underline='always' color="#87CEEB">
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
                    // handleMetalSelection={(metal) => handleMetalSelection(metal)}
                    handleProductDetailsChange={(index, name, value) => handleProductDetailsChange(index, name, value)}
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

export default withStyles(styles)(FileUpload);

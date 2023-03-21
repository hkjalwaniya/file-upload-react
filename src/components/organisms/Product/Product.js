import {
  withStyles,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from './styles';
import MyDropDown from "../../atoms/MyDropDown";
import MyInputField from "../../molecules/MyInputField";
import UploadImage from "../../molecules/UploadImage/UploadImage";
import { useEffect } from "react";

function Product({
  productData,
  productId,
  expanded,
  handleAccordionExpansion,
  // handleMetalSelection,
  handleProductDetailsChange,
  classes
}) {
  const { metal, size, dimensions, description } = productData;
  console.log('productData',productData)

  const handleSizeChange = (e) => {

  }
  const handleDimensionChange = (e) => {

  }
  const handleDescriptionChange = (e) => {

  }

  return (
    <div className={classes.productContainer}>
      <Accordion
        classes={{
          root: classes.root,
          expanded: classes.expanded
        }}
        expanded={expanded}
        onChange={(e, isExpanded) => 
          handleAccordionExpansion(isExpanded, productId)
        }
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon classes={{ root: classes.expandMoreIcon }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{ root: classes.accordionSummary, content: classes.accordionSummaryContent, expanded: classes.expanded, expandIcon: classes.expandMoreIcon }}
        >
          <Typography className={classes.heading}>Product {productId}</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.accordionDetails }}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <MyDropDown
                handleSelection={(metal) => {
                  // handleMetalSelection(metal)
                  handleProductDetailsChange(productId-1, 'metal', metal)
                }}
                inputLabel="Metal"
                value={metal}
                selectOptions={[
                  { value: 'Gold', id: 0 },
                  { value: 'Silver', id: 1 },
                  { value: 'Copper', id: 2 },
                  { value: 'Brass', id: 3 }
                ]}
                dropDownType="metal"
                isRequired
              />
            </Grid>
            <Grid item md={6} lg={6}>
              <MyInputField
                id="size"
                label="Size"
                placeholder="Type here..."
                value={size}
                type="text"
                handleChange={handleSizeChange}
              />
            </Grid>
            <Grid item md={12} lg={12}>
              <MyInputField
                id="dimensions"
                label="Dimensions"
                labelNote="Optional but highly recommended"
                placeholder="Type here..."
                value={dimensions}
                type="text"
                handleChange={handleDimensionChange}
              />
            </Grid>
            <Grid item md={12} lg={12}>
              <MyInputField
                id="description"
                label="Description"
                // labelNote="Optional but highly recommended"
                placeholder="Type here..."
                value={description}
                type="text"
                handleChange={handleDescriptionChange}
                multiline={true}
              />
            </Grid>
            <Grid item md={12} lg={12}>
                <UploadImage />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default withStyles(styles)(Product)
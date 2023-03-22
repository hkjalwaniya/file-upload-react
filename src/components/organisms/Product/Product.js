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

function Product({
  productData,
  productId,
  expanded,
  handleAccordionExpansion,
  handleProductDetailsChange,
  classes
}) {
  const { metal, size, dimensions, description, image } = productData;
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
                handleChange={(e) => handleProductDetailsChange(productId-1, 'size', e.target.value)}
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
                handleChange={(e) => handleProductDetailsChange(productId-1, 'dimensions', e.target.value)}
              />
            </Grid>
            <Grid item md={12} lg={12}>
              <MyInputField
                id="description"
                label="Description"
                placeholder="Type here..."
                value={description}
                type="text"
                handleChange={(e) => {
                  handleProductDetailsChange(productId-1, 'description', e.target.value)
                }}
                multiline={true}
              />
            </Grid>
            <Grid item md={12} lg={12}>
                <UploadImage
                  imageData={image}
                  productId={productId}
                  handleImageSelect={(imageProductId, file) => {
                    handleProductDetailsChange(imageProductId-1, 'image', file)}}
                />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default withStyles(styles)(Product)
import { useState } from "react";
import {
    withStyles,
    LinearProgress,
    Box,
    Typography,
    Button,
    ListItem,
    Grid,
    Link
} from "@material-ui/core";
import styles from "./styles";
import UploadImageLogo from '../../../images/upload-image-icon.png';

function UploadImage({
    imageData,
    productId,
    handleImageSelect,
    classes
}) {
    // const [currentFile, setCurrentFile] = useState(undefined);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // const handleSelectFile = (event) => {
    //     setCurrentFile(event.target.files[0]);
    //     setMessage('');
    // }
 
    return (
        <div className={classes.uploadImageContainer}>
            <label htmlFor="btn-upload" className={classes.cursorPointer}>
                <input
                    id="btn-upload"
                    name="btn-upload"
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        handleImageSelect(productId, e.target.files[0])
                        setMessage('');
                    }}
                />
                <Grid container>
                    <Grid item md={1} lg={1}>
                    </Grid>
                    <Grid item md={1} lg={1}>
                        {/* <div className={classes.uploadImageLogo}> */}
                        <img src={UploadImageLogo} alt='uploadImageLogo' height={52} width={40} />
                        {/* </div> */}
                    </Grid>
                    <Grid item md={1} lg={1}>
                    </Grid>
                    <Grid item md={9} lg={9}>
                        {imageData.name ? <div className={classes.uploadImageTitle}>
                            {imageData.name}
                        </div> : <div className={classes.uploadImageTitle}>
                            <Typography variant='caption' color='textSecondary' classes={{ caption: classes.uploadImageCaption }}>Drag your image here, or</Typography>
                            <Link href="#" onClick={(e) => e.preventDefault()} underline='none' variant='body2' classes={{root: classes.linkButton}}>
                                &nbsp;Browse
                            </Link>
                        </div>}
                    </Grid>
                </Grid>
            </label>

            {message && (
                <Typography variant="subtitle2" className={`upload-message ${isError ? "error" : ""}`}>
                    {message}
                </Typography>
            )}
        </div >
    )
}


export default withStyles(styles)(UploadImage)
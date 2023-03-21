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
    classes
}) {
    const [currentFile, setCurrentFile] = useState(undefined);
    const [previewImage, setPreviewImage] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState('');
    const [imageInfos, setImageInfos] = useState([]);
    const [isError, setIsError] = useState(false);

    const handleSelectFile = (event) => {
        setCurrentFile(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setProgress(0);
        setMessage('');
    }
    const handleUploadImage = (event) => {
    }

    return (
        <div className={classes.uploadImageContainer}>
            <label htmlFor="btn-upload" className={classes.cursorPointer}>
                <input
                    id="btn-upload"
                    name="btn-upload"
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    onChange={handleSelectFile} />
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
                        {currentFile ? <div className={classes.uploadImageTitle}>
                            {currentFile.name}
                        </div> : <div className={classes.uploadImageTitle}>
                            <Typography variant='caption' color='textSecondary' classes={{ caption: classes.uploadImageCaption }}>Drag your image here, or</Typography>
                            <Link href="#" onClick={(e) => e.preventDefault()} underline='none' color="#87CEEB" variant='body2'>
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
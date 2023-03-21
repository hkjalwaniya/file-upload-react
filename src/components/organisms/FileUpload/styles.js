const styles = (theme) => {
    console.log('themes',theme.palette)
    return {
        fileUpload: {

        },
        fileUploadDialog: {
            padding: '10px',
            margin: 0
        },
        dialogTitle: {
            padding: '8px 12px'
        },
        dialogContentRoot: {
            padding: 0
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.secondary
        }
    }
}
// ({
//     closeButton: {
//         position: 'absolute',
//         right: theme.spacing(1),
//         top: theme.spacing(1),
//         color: theme.palette.secondary
//     }
// })
  
export default styles
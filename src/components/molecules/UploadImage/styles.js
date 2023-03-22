const styles = (theme) => ({
    uploadImageContainer:{
        // border: '1px dashed blue',
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='2%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        borderRadius: '3px',
        padding: '0 8px'
    },
    cursorPointer: {
        cursor: 'pointer',
    },
    uploadImageLogo: {
        height: '60px',
        width: '40px'
    },
    uploadImageTitle: {
        padding: '16px 0'
    },
    uploadImageCaption: {
        fontWeight: 'bold'
    },
    linkButton: {
        color: '#1967d2'
    }
  })
  
  export default styles
  
const styles = (theme) => ({
    productContainer: {
        margin: '5px 0'
    },
    root: {
        border: '1px solid grey',
        borderRadius: '5px',
        "&$expanded": {
          margin: "0"
        }
    },
    accordionSummary: {
        minHeight: '30px',
        "&$expanded": {
            minHeight: '30px'
        }
    },
    accordionSummaryContent: {
        margin: '0',
        "&$expanded": {
          margin: "0"
        }
    },
    expanded: {},
    expandMoreIcon: {
        padding: 0
    },
    heading: {
        fontWeight: 'bold',
    },
    accordionDetails: {
        padding: '8px'
    },
    gridItemRoot: {
        padding: '8px 8px 0 8px!important'
    },
})
  
export default styles
import { useState } from 'react';
import { connect } from 'react-redux'
import { Button, Grid } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import FileUpload from './components/organisms/FileUpload/FileUpload';
import { theme } from './Theme';


function App({ CADData }) {
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const handleFileUploadClick = () => {
    setIsUploadingFile(true)
  }
  return (
    <div className="app">
      <MuiThemeProvider theme={theme}>
        <Grid container>
          <Grid item md={12} lg={12}>
            <h1>My App</h1>
          </Grid>
          <Grid item md={12} lg={12}>
            <Button variant="contained" onClick={handleFileUploadClick}>CAD Upload</Button>
          </Grid>
          <Grid item md={4} lg={4}></Grid>
          <Grid item md={4} lg={4}>
            <div className='cadContainer'>
              <h1>Your CAD Uploads</h1>
              <table>
                <tbody>
                  <tr>
                    <th>Full Name</th>
                    <th>Reference</th>
                    <th>Metal</th>
                    <th>Size</th>
                    <th>Dimensions</th>
                    <th>Description</th>
                    <th>File Name</th>
                  </tr>
                  {
                    CADData.products ? CADData.products.map((product, index) => (
                      <tr>
                        {index === 0 && <>
                          <td rowSpan={CADData.products.length} className='grey'>{CADData.fullName}</td>
                          <td rowSpan={CADData.products.length} className='grey'>{CADData.reference}</td></>
                        }
                        <td>{product.metal}</td>
                        <td>{product.size}</td>
                        <td>{product.dimensions}</td>
                        <td>{product.description}</td>
                        <td>{product.image.name}</td>
                      </tr>
                    )) : <tr><td colSpan={7}>No data to show</td></tr>
                  }
                </tbody>
              </table>
            </div>
          </Grid>
          <Grid item md={4} lg={4}></Grid>

        </Grid>
        {isUploadingFile &&
          <FileUpload
            isUploadingFile={isUploadingFile}
            setIsUploadingFile={setIsUploadingFile}
          />}

      </MuiThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user, error } = state;
  return {
    CADData: user.user.CADData,
    error
  }
}

export default connect(mapStateToProps)(App)

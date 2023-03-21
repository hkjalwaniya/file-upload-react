import { useState } from 'react';
import {Button} from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import FileUpload from './components/organisms/FileUpload/FileUpload';
import { theme } from './Theme';
function App() {
  const[isUploadingFile, setIsUploadingFile] = useState(false);
  const handleFileUploadClick = () => {
    setIsUploadingFile(true)
  }
  return (
    <div className="app">
      <MuiThemeProvider theme={theme}>  
      <h1>My App</h1>
      <Button variant="contained" onClick={handleFileUploadClick}>File Upload</Button>
      {isUploadingFile && 
      <FileUpload
        isUploadingFile={isUploadingFile}
        setIsUploadingFile={setIsUploadingFile}
      />}
      </MuiThemeProvider>
    </div>
  );
}

export default App;

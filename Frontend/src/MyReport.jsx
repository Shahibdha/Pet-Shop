import React from 'react';
import MyReport from './MyReport';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = () => {
  const data = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add more data fields as needed
  };

  return (
    <div>
      <h1>Generate Report</h1>
      <PDFDownloadLink document={<MyReport data={data} />} fileName="report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;

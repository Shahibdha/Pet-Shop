import React, { useState, useEffect, useRef } from 'react';
import './table.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      fontSize: '11px',
      padding: '20px'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    table: {
      display: 'table',
      width: '90%',  
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      marginLeft: '5%' 
    },
    tableRow: {
      flexDirection: 'row',
      backgroundColor: '#F7F7F7',
    },
    tableColHeader: {
      width: '20%', 
      borderWidth: 1,
      borderBottomWidth: 0,
      backgroundColor: 'black',
      color: 'white',
      padding: '6px',
    },
    tableCol: {
      width: '20%', 
      borderStyle: 'solid',
      borderWidth: 1,
      borderTopWidth: 0,
      padding: '7px'
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "green",
      color: "#ffffff",
      textDecoration: "none",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      marginTop: "30px",
      marginLeft: "12.5%",
    }
  });
  
const MyReport = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Report</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
          <View style={{ ...styles.tableColHeader, width: '10%' }}>
              <Text>ID</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Name</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: '55%' }}>
              <Text>Description</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Price</Text>
            </View>
          </View>
          {data.map((pet) => (
            <View style={styles.tableRow} key={pet.id}>
              <View style={{ ...styles.tableCol, width: '10%' }}>
                <Text>{pet.id}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{pet.name}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: '55%' }}>
                <Text>{pet.des}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Rs. {pet.address}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default function Edit() {
  const [pets, setPets] = useState([]);
  const componentRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    loadPets();
  }, []);

  const loadPets = async () => {
    const result = await axios.get('http://localhost:8080/pet/getAll');
    const sortedPets = result.data.sort((b, a) => b.id - a.id);
    setPets(sortedPets);
  };

  const deletePet = async (id) => {
    await axios.delete(`http://localhost:8080/pet/${id}`);
    loadPets();
  };

  return (
    <div>
      <PDFDownloadLink document={<MyReport data={pets} />} fileName="report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : (
            <button style={styles.button}>Download PDF</button>
          )
        }
      </PDFDownloadLink>
      <Link to="/add" className='buttont' style={{ marginTop: '30px' }}>Add</Link>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.address}</td>
              <td className="comment-column">{pet.des}</td>
              <td>
                <Link className="edit-btn" to={`/edit/${pet.id}`}>
                  Edit
                </Link>
                <button className="delete-btn" onClick={() => deletePet(pet.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

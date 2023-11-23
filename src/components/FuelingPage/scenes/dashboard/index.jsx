import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  useTheme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const GasFuelingPersonPage = () => {
  const theme = useTheme();

  const [fuelingDetails, setFuelingDetails] = useState({
    carPlateInformation: '',
    dateAndTime: '',
    driverInformation: '',
    amountOfFuel: '',
    totalCostOfFuel: '',
    gasStationName: '',
    fuelingPersonName: '',
  });

  const [driverImage, setDriverImage] = useState(null);
  const [dashboardImageBefore, setDashboardImageBefore] = useState(null);
  const [dashboardImageAfter, setDashboardImageAfter] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFuelingDetails({ ...fuelingDetails, [name]: value });
  };

  const handleUploadImage = (e, imageType) => {
    const file = e.target.files[0];
    switch (imageType) {
      case 'driver':
        setDriverImage(file);
        break;
      case 'dashboardBefore':
        setDashboardImageBefore(file);
        break;
      case 'dashboardAfter':
        setDashboardImageAfter(file);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send the data to the backend or perform further actions
    console.log('Form submitted with data:', {
      fuelingDetails,
      driverImage,
      dashboardImageBefore,
      dashboardImageAfter,
    });
  };

  const [vehicles, setVehicles] = useState([
    { id: 1, licensePlate: 'ABC123', fuelLevel: 80, fuelType: 'Petrol' },
    { id: 2, licensePlate: 'XYZ789', fuelLevel: 60, fuelType: 'Diesel' },
    // Add more vehicles as needed
  ]);

  const [inputPlate, setInputPlate] = useState('');
  const [fuelInfo, setFuelInfo] = useState(null);

  const handleFuelSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const foundVehicle = vehicles.find(vehicle => vehicle.licensePlate === inputPlate);

    if (foundVehicle) {
      setFuelInfo({
        fuelLevel: foundVehicle.fuelLevel,
        fuelType: foundVehicle.fuelType,
      });
    } else {
      setFuelInfo(null);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      {/**New line */}
      <div style={{textAlign: 'center'}}>
      <h2>Fuel Information</h2>
      </div>
      <form
        onSubmit={handleFuelSubmit}
        style={{
          background: "#1F2A40",
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '600px',
          textAlign: 'center',
          margin: 'auto',
        }}
      >
        <TextField
          label="License Plate"
          variant="outlined"
          fullWidth
          margin="normal"
          name="licensePlate"
          value={inputPlate}
          onChange={(e) => setInputPlate(e.target.value)}
        />

        {fuelInfo && (
          <div style={{ marginTop: '20px' }}>
            <h3>Fuel Information</h3>
            <p>Fuel Level: {fuelInfo.fuelLevel}%</p>
            <p>Fuel Type: {fuelInfo.fuelType}</p>
          </div>
        )}

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Get Fuel Information
        </Button>
      </form>
      {/**New line */}
      <h2 style={{ textAlign: 'center', color: '#fff' }}>Update Fuel Information</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#1F2A40",
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TextField
          label="Car Plate Information"
          variant="outlined"
          fullWidth
          margin="normal"
          name="carPlateInformation"
          value={fuelingDetails.carPlateInformation}
          onChange={handleInputChange}
        />

        <TextField
          label="Date and Time"
          variant="outlined"
          fullWidth
          margin="normal"
          name="dateAndTime"
          value={fuelingDetails.dateAndTime}
          onChange={handleInputChange}
        />

        <TextField
          label="Driver Information"
          variant="outlined"
          fullWidth
          margin="normal"
          name="driverInformation"
          value={fuelingDetails.driverInformation}
          onChange={handleInputChange}
        />

        <TextField
          label="Amount of Fuel"
          variant="outlined"
          fullWidth
          margin="normal"
          name="amountOfFuel"
          value={fuelingDetails.amountOfFuel}
          onChange={handleInputChange}
        />

        <TextField
          label="Total Cost of Fuel"
          variant="outlined"
          fullWidth
          margin="normal"
          name="totalCostOfFuel"
          value={fuelingDetails.totalCostOfFuel}
          onChange={handleInputChange}
        />

        <TextField
          label="Gas Station Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="gasStationName"
          value={fuelingDetails.gasStationName}
          onChange={handleInputChange}
        />

        <TextField
          label="Fueling Person Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="fuelingPersonName"
          value={fuelingDetails.fuelingPersonName}
          onChange={handleInputChange}
        />

        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>Upload Driver Image</InputLabel>
          <input type="file" onChange={(e) => handleUploadImage(e, 'driver')} style={{ display: 'none' }} />
          <Button variant="outlined" component="label" color="primary" style={{ color: '#666' }} >
            Choose File
          </Button>
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>Upload Dashboard Image Before Fueling</InputLabel>
          <input
            type="file"
            onChange={(e) => handleUploadImage(e, 'dashboardBefore')}
            style={{ display: 'none' }}
          />
          <Button variant="outlined" component="label" color="primary"  style={{ color: '#666' }}>
            Choose File
          </Button>
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>Upload Dashboard Image After Fueling</InputLabel>
          <input
            type="file"
            onChange={(e) => handleUploadImage(e, 'dashboardAfter')}
            style={{ display: 'none' }}
          />
          <Button variant="outlined" component="label" color="primary"  style={{ color: '#666' }}>
            Choose File
          </Button>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default GasFuelingPersonPage;

import { useState } from 'react';
import PropTypes from 'prop-types';

const FilterPopup = ({ show, handleClose }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedOption, setSelectedOption] = useState({});

  if (!show) return null;

  const handleCheckboxChange = (id) => {
    if (selectedCheckbox === id) {
      setSelectedCheckbox(null);
    } else {
      setSelectedCheckbox(id);
    }
  };

  const handleOptionChange = (id, value) => {
    setSelectedOption((prevOptions) => ({ ...prevOptions, [id]: value }));
    setSelectedCheckbox(null); // Close the dropdown after selection
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    maxWidth: '500px',
    width: '100%',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const checkboxGroupStyle = {
    marginBottom: '10px',
  };

  const dropdownStyle = {
    display: selectedCheckbox ? 'block' : 'none',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: '#fff',
  };

  const doneButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const doneButtonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={handleClose}>
          &times;
        </button>
        <h2>Map Filters</h2>
        <form>
          <div style={checkboxGroupStyle}>
            <input
              type="checkbox"
              id="institute"
              onChange={() => handleCheckboxChange('institute')}
            />
            <label htmlFor="institute">Institute</label>
            {selectedCheckbox === 'institute' && (
              <div style={dropdownStyle}>
                <label htmlFor="instituteDropdown">Select Institute:</label>
                <select
                  id="instituteDropdown"
                  onChange={(e) => handleOptionChange('institute', e.target.value)}
                  value={selectedOption.institute || ''}
                >
                  <option value="">Select...</option>
                  <option value="institute1">Institute 1</option>
                  <option value="institute2">Institute 2</option>
                  <option value="institute3">Institute 3</option>
                </select>
              </div>
            )}
          </div>
          <div style={checkboxGroupStyle}>
            <input
              type="checkbox"
              id="yearOfJoining"
              onChange={() => handleCheckboxChange('yearOfJoining')}
            />
            <label htmlFor="yearOfJoining">Year of Joining</label>
            {selectedCheckbox === 'yearOfJoining' && (
              <div style={dropdownStyle}>
                <label htmlFor="yearOfJoiningDropdown">Select Year:</label>
                <select
                  id="yearOfJoiningDropdown"
                  onChange={(e) => handleOptionChange('yearOfJoining', e.target.value)}
                  value={selectedOption.yearOfJoining || ''}
                >
                  <option value="">Select...</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            )}
          </div>
          <div style={checkboxGroupStyle}>
            <input
              type="checkbox"
              id="stream"
              onChange={() => handleCheckboxChange('stream')}
            />
            <label htmlFor="stream">Stream</label>
            {selectedCheckbox === 'stream' && (
              <div style={dropdownStyle}>
                <label htmlFor="streamDropdown">Select Stream:</label>
                <select
                  id="streamDropdown"
                  onChange={(e) => handleOptionChange('stream', e.target.value)}
                  value={selectedOption.stream || ''}
                >
                  <option value="">Select...</option>
                  <option value="science">Science</option>
                  <option value="arts">Arts</option>
                  <option value="commerce">Commerce</option>
                </select>
              </div>
            )}
          </div>
          <div style={checkboxGroupStyle}>
            <input
              type="checkbox"
              id="degree"
              onChange={() => handleCheckboxChange('degree')}
            />
            <label htmlFor="degree">Degree</label>
            {selectedCheckbox === 'degree' && (
              <div style={dropdownStyle}>
                <label htmlFor="degreeDropdown">Select Degree:</label>
                <select
                  id="degreeDropdown"
                  onChange={(e) => handleOptionChange('degree', e.target.value)}
                  value={selectedOption.degree || ''}
                >
                  <option value="">Select...</option>
                  <option value="bachelor">Bachelor&apos;s</option>
                  <option value="master">Master&apos;s</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
            )}
          </div>
          <div style={checkboxGroupStyle}>
            <input
              type="checkbox"
              id="program"
              onChange={() => handleCheckboxChange('program')}
            />
            <label htmlFor="program">Program</label>
            {selectedCheckbox === 'program' && (
              <div style={dropdownStyle}>
                <label htmlFor="programDropdown">Select Program:</label>
                <select
                  id="programDropdown"
                  onChange={(e) => handleOptionChange('program', e.target.value)}
                  value={selectedOption.program || ''}
                >
                  <option value="">Select...</option>
                  <option value="program1">Program 1</option>
                  <option value="program2">Program 2</option>
                  <option value="program3">Program 3</option>
                </select>
              </div>
            )}
          </div>
          <div style={checkboxGroupStyle}>
            <input
              type="checkbox"
              id="currentDistrict"
              onChange={() => handleCheckboxChange('currentDistrict')}
            />
            <label htmlFor="currentDistrict">Current District</label>
            {selectedCheckbox === 'currentDistrict' && (
              <div style={dropdownStyle}>
                <label htmlFor="currentDistrictDropdown">Select District:</label>
                <select
                  id="currentDistrictDropdown"
                  onChange={(e) => handleOptionChange('currentDistrict', e.target.value)}
                  value={selectedOption.currentDistrict || ''}
                >
                  <option value="">Select...</option>
                  <option value="district1">District 1</option>
                  <option value="district2">District 2</option>
                  <option value="district3">District 3</option>
                </select>
              </div>
            )}
          </div>
        </form>
        <button
          style={doneButtonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = doneButtonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = doneButtonStyle.backgroundColor)}
          onClick={handleClose}
        >
          Done
        </button>
      </div>
    </div>
  );
};

FilterPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default FilterPopup;

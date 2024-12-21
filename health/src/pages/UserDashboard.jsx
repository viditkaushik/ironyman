import React, { useState } from 'react';
import './UserDashboard.css'; // Import the CSS for the UserDashboard component

function UserDashboard() {
  const [activeTab, setActiveTab] = useState('Profile'); // State to manage active tab
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Nancy L.',
    email: 'nancy@gmail.com',
    gender: 'Female',
    age: 40,
    homeAddress: '123 Main St. Apt 4',
    shippingAddress: '123 Main St. Apt 4',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107'
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Handle logout logic here
    alert('Logged out');
  };

  const handleEdit = () => {
    // Open the edit modal
    setEditModalOpen(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    // Save the updated profile information
    setProfile(updatedProfile);
    setEditModalOpen(false);
  };

  const handleAddPharmacy = () => {
    // Handle add pharmacy logic here
    alert('Add new pharmacy');
  };

  return (
    <div className="dashboard-container">
      <div className="layout-container">
        <header className="dashboard-header">
          <div className="header-left">
            <div className="logo">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="brand">MediScan</h2>
          </div>
          <div className="header-right">
            <nav className="nav-links">
              <a className={`nav-link ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')} href="#">Home</a>
              <a className={`nav-link ${activeTab === 'Profile' ? 'active' : ''}`} onClick={() => handleTabClick('Profile')} href="#">Profile</a>
              <a className={`nav-link ${activeTab === 'History' ? 'active' : ''}`} onClick={() => handleTabClick('History')} href="#">History</a>
              <a className={`nav-link ${activeTab === 'Support' ? 'active' : ''}`} onClick={() => handleTabClick('Support')} href="#">Support</a>
            </nav>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="content-container">
            {activeTab === 'Home' && <Home />}
            {activeTab === 'Profile' && <Profile profile={profile} onEdit={handleEdit} onAddPharmacy={handleAddPharmacy} />}
            {activeTab === 'History' && <History />}
            {activeTab === 'Support' && <Support />}
          </div>
        </div>
        {isEditModalOpen && <EditProfileModal profile={profile} onSave={handleSaveProfile} onCancel={() => setEditModalOpen(false)} />}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h3 className="section-title">Welcome to MediScan</h3>
      <p>This is the home section. Add your content here.</p>
    </div>
  );
}

function Profile({ profile, onEdit, onAddPharmacy }) {
  return (
    <div>
      <div className="profile-header">
        <p className="profile-title">Your Profile</p>
      </div>
      <div className="profile-section">
        <div className="profile-info">
          <div className="profile-picture" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0adffab9-e3bd-47a4-b7ab-7f446a48d160.png")' }}></div>
          <div className="profile-details">
            <p className="profile-name">{profile.name}</p>
            <p className="profile-meta">{profile.gender}, Age {profile.age}</p>
          </div>
        </div>
        <button className="edit-button" onClick={onEdit}>Edit</button>
      </div>
      <Section title="Personal Information">
        <InfoItem icon="EnvelopeOpen" label="Email" value={profile.email} />
        <AddressItem icon="HouseSimple" label="Home Address" address1={profile.homeAddress} address2={`${profile.city}, ${profile.state} ${profile.zip}`} />
        <AddressItem icon="Truck" label="Shipping Address" address1={profile.shippingAddress} address2={`${profile.city}, ${profile.state} ${profile.zip}`} />
      </Section>
      <Section title="Medical History">
        <InfoItem icon="FileZip" label="Conditions" value="None" />
        <InfoItem icon="ShieldStar" label="Allergies" value="None" />
        <InfoItem icon="Scissors" label="Surgeries" value="None" />
      </Section>
      <Section title="Preferred Pharmacies">
        <InfoItem icon="Factory" label="CVS" value="123 Main St." />
        <InfoItem icon="Factory" label="Walgreens" value="456 Main St." />
        <div className="add-pharmacy">
          <button className="add-pharmacy-button" onClick={onAddPharmacy}>Add Pharmacy</button>
        </div>
      </Section>
    </div>
  );
}

function History() {
  return (
    <div>
      <h3 className="section-title">Medical History</h3>
      <p>This is the history section. Add your content here.</p>
    </div>
  );
}

function Support() {
  return (
    <div>
      <h3 className="section-title">Support</h3>
      <p>This is the support section. Add your content here.</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="section">
      <h3 className="section-title">{title}</h3>
      {children}
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="info-item">
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          {/* Add appropriate SVG path data for the icon here */}
        </svg>
      </div>
      <div className="info-details">
        <p className="info-label">{label}</p>
        <p className="info-value">{value}</p>
      </div>
    </div>
  );
}

function AddressItem({ icon, label, address1, address2 }) {
  return (
    <div className="address-item">
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          {/* Add appropriate SVG path data for the icon here */}
        </svg>
      </div>
      <div className="address-details">
        <p className="address-label">{label}</p>
        <p className="address-line">{address1}</p>
        <p className="address-line">{address2}</p>
      </div>
    </div>
  );
}

function EditProfileModal({ profile, onSave, onCancel }) {
  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(updatedProfile);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Profile</h3>
        <div className="modal-body">
          <label>
            Name:
            <input type="text" name="name" value={updatedProfile.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={updatedProfile.email} onChange={handleChange} />
          </label>
          <label>
            Gender:
            <input type="text" name="gender" value={updatedProfile.gender} onChange={handleChange} />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={updatedProfile.age} onChange={handleChange} />
          </label>
          <label>
            Home Address:
            <input type="text" name="homeAddress" value={updatedProfile.homeAddress} onChange={handleChange} />
          </label>
          <label>
            Shipping Address:
            <input type="text" name="shippingAddress" value={updatedProfile.shippingAddress} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={updatedProfile.city} onChange={handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={updatedProfile.state} onChange={handleChange} />
          </label>
          <label>
            ZIP:
            <input type="text" name="zip" value={updatedProfile.zip} onChange={handleChange} />
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={handleSave} className="modal-save-button">Save</button>
          <button onClick={onCancel} className="modal-cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
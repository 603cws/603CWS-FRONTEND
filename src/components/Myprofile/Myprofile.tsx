import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import './animations.css';
import DashNavbar from '../DashBoardNavbar/DashNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useApp } from '../../context/AuthContext';

// Define the theme type
interface Theme {
    background: {
        default: string;
    };
    text: {
        primary: string;
    };
}

// Custom theme function
const getTheme = (darkMode: boolean): Theme => ({
    background: {
        default: darkMode ? '#121212' : '#F5F5F5',
    },
    text: {
        primary: darkMode ? '#E0E0E0' : '#212121',
    },
});

const Settings: React.FC = () => {
    const {setloading} = useApp();

    const PORT = "https://603-cws-backend.vercel.app";

    const token = localStorage.getItem("token");

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [darkMode] = useState<boolean>(false);
    const [profileOpen, setProfileOpen] = useState<boolean>(false);
    const [passwordChange, setPasswordChange] = useState<boolean>(false);

    // State variables for form values
    interface UserDetails {
        companyName : string;
        username: string;
        email: string;
        password: string;
        phone: string;
        role: 'admin' | 'user';
        kyc: boolean,
        country: string;
        state: string;
        city: string;
        zipcode: string;
        location : string;
        credits?: number;
        createdAt?: Date;
    }

    const [data, setData] = useState<UserDetails>({
        companyName: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        role: "user",
        kyc: false,
        country: "",
        state: "",
        city: "",
        zipcode: "",
        location:"",
        credits: 0,
        createdAt: new Date()  // Correct initialization for Date
    });


    const [companyNamePrev, setcompanyNamePrev] = useState<string>("");
    const [countryPrev, setCountryPrev] = useState<string>("");
    const [statePrev, setStatePrev] = useState<string>("");
    const [cityPrev, setCityPrev] = useState<string>("");
    const [zipCodePrev, setZipCodePrev] = useState<string>("");

    const [companyName, setcompanyName] = useState<string>("");
    const [phone, setphone] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [location, setlocation] = useState<string>('');
    const [city, setCity] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    const buttonStyle: React.CSSProperties = {
        marginTop: '24px',
        padding: windowWidth > 500 ? '12px 24px' : "10px 10px",
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const boxStyle: React.CSSProperties = {
        padding: windowWidth > 444 ? '120px 40px 0 40px' : '120px 10px 0 10px',
        flex: 1
    }

    const nameStyle: React.CSSProperties = {
        fontWeight: 'bold',
        fontSize: windowWidth > 380 ? '24px' : "20px",
        margin: '0',
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${PORT}/api/v1/users/userdetails`, {withCredentials : true});
            const userdata: UserDetails = response.data.user;
            console.log(userdata);
            setData(userdata);
            setcompanyName(userdata.companyName);
            setphone(userdata.phone);
            setemail(userdata.email);
            setCountry(userdata.country);
            setState(userdata.state);
            setlocation(userdata.location);
            setCity(userdata.city);
            setZipCode(userdata.zipcode);
            setcompanyNamePrev(userdata.companyName);
            setCountryPrev(userdata.country);
            setStatePrev(userdata.state);
            setCityPrev(userdata.city);
            setZipCodePrev(userdata.zipcode);
            setloading(false);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [token]);

    const handleProfileOpen = () => setProfileOpen(true);
    const handleProfileClose = () => setProfileOpen(false);
    const handlePassOpen = () => setPasswordChange(true);
    const handlePassClose = () => setPasswordChange(false);

    const theme = getTheme(darkMode);

    const handleProfileSave = async () => {
        const response = await axios.put(`${PORT}/api/v1/users/updateuser`, { companyName, country, state, city, zipCode, token }, {withCredentials : true});
        console.log(response.data);
        fetchData();
    };

    const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            const response = await axios.put(`${PORT}/api/v1/users/changepassword`, { newPassword, oldPassword, token }, {withCredentials : true});
            console.log(response, "dmompdkp");
            if (response.data.msg === "Password changed successfully") {
                toast.success("Password changed successfully");
            } else {
                toast.success("Wrong details");
            }
            setPasswordChange(false);
            setConfirmPassword("");
            setNewPassword("");
            setOldPassword("");
            console.log('Password changed:', { oldPassword, newPassword });
        } else {
            console.error('Passwords do not match');
        }
    };

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.background.default,
                minHeight: '100vh',
                minWidth: '100%',
            }}>
                <DashNavbar />
                <div style={boxStyle}>
                    <div style={{
                        padding: "16px 10px 16px 10px",
                        textAlign: 'left',
                        color: theme.text.primary,
                        background: theme.background.default === '#121212'
                            ? 'linear-gradient(135deg, #2c2c2c 0%, #3d3d3d 100%)'
                            : 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        transform: 'scale(1)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                marginRight: '16px',
                                borderRadius: '50%',
                                background: `url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png') center center / cover no-repeat`,
                                border: `1px solid #c8c8c8`,
                            }}></div>
                            <div>
                                <h5 style={nameStyle}>{data.companyName}</h5>
                                <p style={{
                                    fontSize: "16px",
                                    margin: '4px 0',
                                }}>{data.country && data.state && (data.country + "," + " " + data.state)}</p>
                            </div>{
                                windowWidth > 500 && (
                                    <button onClick={handleProfileOpen} style={{
                                        marginLeft: 'auto',
                                        padding: '8px 16px',
                                        backgroundColor: '#3f51b5',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'background-color 0.3s ease',
                                    }} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2c3e50')}
                                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3f51b5')}>
                                        About
                                    </button>
                                )
                            }
                        </div>
                        <h6 style={{ marginBottom: '16px', fontWeight: 'bold' }}>Personal Information</h6>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setcompanyName(e.target.value)}
                                    placeholder="Company Name"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                        transition: 'border-color 0.3s ease',
                                    }} />
                            </div>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="email"
                                    value={email || ''}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="Email"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: "#8a8a8a",
                                        transition: 'border-color 0.3s ease',
                                    }} readOnly />
                            </div>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="text"
                                    value={location || ''}
                                    placeholder="Location"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: "#8a8a8a",
                                        transition: 'border-color 0.3s ease',
                                    }} readOnly />
                            </div>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setphone(e.target.value)}
                                    placeholder="Phone"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: "#8a8a8a",
                                        transition: 'border-color 0.3s ease',
                                    }} readOnly />
                            </div>
                        </div>
                        <h6 style={{ marginTop: '32px', marginBottom: '16px', fontWeight: 'bold' }}>Address (Optional)</h6>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="Country (Optional)"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                        transition: 'border-color 0.3s ease',
                                    }} />
                            </div>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder="State (Optional)"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                        transition: 'border-color 0.3s ease',
                                    }} />
                            </div>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="City (Optional)"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                        transition: 'border-color 0.3s ease',
                                    }} />
                            </div>
                            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <input
                                    type="text"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    placeholder="Zip Code (Optional)"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        margin: '8px 0',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                        transition: 'border-color 0.3s ease',
                                    }} />
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "30px" }}>
                            <button
                                disabled={companyName === companyNamePrev && country === countryPrev && state === statePrev && city === cityPrev && zipCode === zipCodePrev}
                                onClick={handleProfileSave}
                                style={{
                                    ...buttonStyle,
                                    color: '#fff',
                                    backgroundColor: (companyName === companyNamePrev && country === countryPrev && state === statePrev && city === cityPrev && zipCode === zipCodePrev) ? '#ccc' : '#4caf50',
                                    cursor: (companyName === companyNamePrev && country === countryPrev && state === statePrev && city === cityPrev && zipCode === zipCodePrev) ? 'not-allowed' : 'pointer',
                                }}
                                onMouseOver={(e) => {
                                    if (!(companyName === companyNamePrev && country === countryPrev && state === statePrev && city === cityPrev && zipCode === zipCodePrev)) {
                                        e.currentTarget.style.backgroundColor = '#45a049';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!(companyName === companyNamePrev && country === countryPrev && state === statePrev && city === cityPrev && zipCode === zipCodePrev)) {
                                        e.currentTarget.style.backgroundColor = '#4caf50';
                                    }
                                }}
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={handlePassOpen}
                                style={{
                                    ...buttonStyle,
                                    color: '#fff',
                                    cursor: "pointer",
                                    backgroundColor: "#00a2ff"
                                }}
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>

                {profileOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        animation: 'fadeIn 0.5s ease',
                    }}>
                        <div style={{
                            backgroundColor: theme.background.default,
                            color: theme.text.primary,
                            padding: '24px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                            width: windowWidth > 582 ? '450px' : '90%',
                            maxHeight: '80%',
                            overflowY: 'auto',
                            animation: 'slideIn 0.5s ease',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '16px',
                            }}>
                                <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: "20px" }}>Edit Profile</h4>
                                <MdClose
                                    onClick={handleProfileClose}
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                            <p style={{ fontSize: '15px', margin: '0 0 16px' }}>
                                You can update your profile information using the fields below.
                            </p>
                            <p style={{ fontSize: '15px', margin: '0 0 16px' }}>
                                If you need to update or change your phone number or email address, please contact us at <b><a href="mailto:admin@603thecoworkingspace.com" style={{ color: theme.text.primary, textDecoration: 'none' }}>admin@603thecoworkingspace.com</a></b>.
                            </p>
                        </div>
                    </div>
                )}
                {passwordChange && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        animation: 'fadeIn 0.5s ease',
                    }}>
                        <div style={{
                            backgroundColor: theme.background.default,
                            color: theme.text.primary,
                            padding: '24px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                            width: windowWidth > 582 ? '400px' : '90%',
                            maxHeight: '80%',
                            overflowY: 'auto',
                            animation: 'slideIn 0.5s ease',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '16px',
                            }}>
                                <h5 style={{ margin: 0, fontSize: "20px" }}><b>Change Password</b></h5>
                                <MdClose
                                    onClick={handlePassClose}
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                            <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <input
                                    type="password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    placeholder="Old Password"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                    }}
                                />
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="New Password"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                    }}
                                />
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '4px',
                                        border: `1px solid ${theme.background.default === '#121212' ? '#ffffff' : '#ccc'}`,
                                        backgroundColor: theme.background.default === '#121212' ? '#1f1f1f' : '#ffffff',
                                        color: theme.text.primary,
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        padding: '12px 24px',
                                        backgroundColor: (confirmPassword === "" || newPassword === "" || oldPassword === "") ? '#ccc' : '#4caf50',
                                        cursor: (confirmPassword === "" || newPassword === "" || oldPassword === "") ? 'not-allowed' : 'pointer',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '16px',
                                    }}
                                    onMouseOver={(e) => {
                                        if (confirmPassword !== "" || newPassword !== "" || oldPassword !== "") {
                                            e.currentTarget.style.backgroundColor = '#45a049';
                                        }
                                    }}
                                    onMouseOut={(e) => {
                                        if (confirmPassword !== "" || newPassword !== "" || oldPassword !== "") {
                                            e.currentTarget.style.backgroundColor = '#4caf50';
                                        }
                                    }}>
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Settings;

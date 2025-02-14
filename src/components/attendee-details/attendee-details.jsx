import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../context/formContext';
import './attendee-details.css';

export default function AttendeeDetails({ prevStep, submitForm }) {
  const [errors, setErrors] = useState({});
  // const [userName, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  // const [avatar, setAvatar] = useState('');
  const { formData, setFormData } = useForm();

  const handleSpecialRequestChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      specialRequest: e.target.value,
    }));
  };

  // useEffect(() => {
  //   const savedData = localStorage.getItem("attendeeData");
  //   if (savedData) setFormData(JSON.parse(savedData));
  // }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userName.trim()) newErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email';
    if (!formData.avatar) newErrors.avatar = 'Image URL required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // localStorage.setItem("attendeeData", JSON.stringify(formData));
      submitForm();
    }
  };

  return (
    <div className='attendee-container my-6'>
      <div className='attendee-header'>
        <h2>Attendee Details</h2>
        <div className='step-indicator'>Step 2/3</div>
      </div>

      <div className='attendee-inner-con'>
        <div className='attendee-progress'></div>
      </div>

      <form className='attendee-form' onSubmit={handleSubmit}>
        {/* Profile Upload Section */}
        <div className='upload-container'>
          <h5>Upload Profile Photo</h5>
          <div className='upload-section-con'>
            <div className='upload-section' />
            <label htmlFor='avatar-upload' className='upload-label'>
              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt='Profile preview'
                  className='avatar-preview'
                />
              ) : (
                <div className='upload-box'>
                  <img src='/icon.svg' alt='' />
                  <p>Drag & drop or click to upload</p>
                </div>
              )}
            </label>
            <input
              id='avatar-upload'
              type='file'
              accept='image/*' // Ensures only images can be selected
              onChange={(e) => {
                e.preventDefault();
                const file = e.target.files[0];

                if (file) {
                  const reader = new FileReader();

                  reader.onload = function (event) {
                    setFormData({ ...formData, avatar: event.target.result });
                  };

                  reader.onerror = function () {
                    console.error('Error loading image file');
                  };

                  reader.readAsDataURL(file);
                }
              }}
              className={`url-input ${errors.avatar ? 'error' : ''}`}
            />

            {errors.avatar && (
              <span className='error-message-attendee'>{errors.avatar}</span>
            )}
          </div>
        </div>

        <div className='upload-inner-con'></div>

        {/* Input Fields Section */}

        <div className='input-name-container'>
          <label>Enter your name</label>
          <input
            type='text'
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
          {/* <input
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={errors.name ? 'error' : 'input-group-name'}
            // placeholder="Enter your name"
          /> */}
          {errors.name && (
            <span className='error-message-attendee'>{errors.name}</span>
          )}
        </div>

        <div className='input-email-container'>
          <label>Email Address</label>
          <input
            type='text'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {/* <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : 'input-group-email'}
            placeholder='Enter your email'
          /> */}
          {errors.email && (
            <span className='error-message-attendee'>{errors.email}</span>
          )}
        </div>

        {/* Special Request Section */}
        <div className='input-request-container'>
          <label>Special Request?</label>
          <textarea
            className='input-group-textarea'
            placeholder='Textarea'
            value={formData.specialRequest}
            onChange={handleSpecialRequestChange}
          ></textarea>
        </div>

        {/* Navigation Buttons */}
        <div className='form-navigation'>
          <button type='button' className='back-btn' onClick={prevStep}>
            Back
          </button>
          <button type='submit' className='submit-btn'>
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

// ✅ Add PropTypes validation
AttendeeDetails.propTypes = {
  prevStep: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

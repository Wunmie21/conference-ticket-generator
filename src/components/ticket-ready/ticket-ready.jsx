// import { useState } from "react";
import './ticket-ready.css';
import { useForm } from '../context/formContext';

export default function TicketReady() {
  // const attendeeData = JSON.parse(localStorage.getItem("attendeeData"));
  const { formData } = useForm();

  return (
    <div className='container'>
      <div className='ticket-container'>
        <div className='ticket-header'>
          <h2>Ready</h2>
          <div className='step-indicator'>Step 3/3</div>
        </div>

        <div className='ticket-inner-con'>
          <div className='ticket-progress'></div>
        </div>
      </div>

      <div className='confirmation-header'>
        <h1>Your ticket is Booked!</h1>
        <p>Check your email for a copy or you can download</p>
      </div>

      <div className='ticket-ready-container'>
        <div className='ticket-ready-card'>
          <div className='ticket-ready-header'>
            <h2>Techember Fest 25</h2>
            <p>Lagos, Nigeria</p>
            <p>May 21, 2025 | 5:00PM</p>
          </div>

          <div className='ticket-body'>
            <div className='attendee-info-con'>
              <div className='attendee-info'>
                {formData.avatar && (
                  <img
                    src={formData.avatar}
                    alt='Attendee avatar'
                    className='attendee-avatar'
                  />
                )}
              </div>
              <div className='attendee-details-container'>
                <div className='attendee-grid'>
                  {/* Name */}
                  <div className='attendee-cell'>
                    <p className='label'>Enter your name</p>
                    <p className='bold'>{formData.userName}</p>
                  </div>

                  {/* Email */}
                  <div className='attendee-cell'>
                    <p className='label'>Enter your email *</p>
                    <p className='bold'>{formData.email}</p>
                  </div>

                  {/* Ticket Type */}
                  <div className='attendee-cell'>
                    <p className='label'>Ticket Type:</p>
                    <p className='bold'>{formData.selectedTicket}</p>
                  </div>

                  {/* Ticket For */}
                  <div className='attendee-cell'>
                    <p className='label'>Ticket for:</p>
                    <p className='bold'>{formData.quantity}</p>
                  </div>

                  {/* Special Request (Full Width) */}
                  <div className='attendee-cell full-width'>
                    <p className='label'>Special request?</p>
                    <p className='request-text'>{formData.specialRequest}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='event-details'>
              <p className='event-location'>Lagos, Nigeria</p>
              <p className='event-date'>March 15, 2025 | 7:00 PM</p>
              <div className='ticket-qr'>QR CODE PLACEHOLDER</div>
            </div> */}
          </div>
          
          <div className='ticket-ready-footer'>
            {/* <p>Present this ticket at entry</p> */}
            {/* <div className='powered-by'>Powered by Bidee</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

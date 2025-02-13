import { useState } from "react";
import './ticket-ready.css';

export default function TicketReady() {
  const attendeeData = JSON.parse(localStorage.getItem('attendeeData'));

  return (
    <div className="ticket-ready-container">
      <div className="confirmation-header">
        <h1>Your ticket is Booked! 🎉</h1>
        <p>You can download or check your email for details</p>
      </div>

      <div className="ticket-ready-card">
        <div className="ticket-ready-header">
          <h2>Teehamber Fest '25</h2>
          <div className="ticket-type">VIP ACCESS</div>
        </div>

        <div className="ticket-body">
          <div className="attendee-info">
            <img src={attendeeData?.avatar} alt="Attendee avatar" className="attendee-avatar" />
            <div className="attendee-details">
              <h3>{attendeeData?.name}</h3>
              <p>{attendeeData?.email}</p>
            </div>
          </div>

          <div className="event-details">
            <p className="event-location">[Event Location]</p>
            <p className="event-date">March 15, 2025 | 7:00 PM</p>
            <div className="ticket-qr">QR CODE PLACEHOLDER</div>
          </div>
        </div>

        <div className="ticket-ready-footer">
          <p>Present this ticket at entry</p>
          <div className="powered-by">Powered by Bidee</div>
        </div>
      </div>
    </div>
  );
}
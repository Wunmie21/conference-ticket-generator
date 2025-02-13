import { useState } from "react";
import PropTypes from "prop-types";
import "./selection.css";



export default function Selection({ nextStep }) {
  const [selectedTicket, setSelectedTicket] = useState("regular");
  const [quantity, setQuantity] = useState(1);

  const tickets = [
    {
      type: "regular",
      label: "REGULAR ACCESS",
      price: "Free",
      energy: "20/52",
    },
    { type: "vip", label: "VIP ACCESS", price: "$50", energy: "20/52" },
    { type: "vvip", label: "VVIP ACCESS", price: "$150", energy: "20/52" },
  ];

  return (
    <div className="selection-container my-6">
      <div className="selection-header-con">
        <div className="selection-header">
          <h2>Ticket Selection</h2>
          <div className="selection-step">Step 1/3</div>
        </div>
        <div className="selection-inner-line">
          <div className="selection-progress"></div>
        </div>
      </div>

      <div className="selection-inner-con">
        <div className="selection-title">
          <h1 className="m-0 road-rage">Techember Fest ”25</h1>
          <p className="event-details w-[21rem] m-0">
            Join us for an unforgettable experience at Techember Fest ”25!
            Secure your spot now.
          </p>
          <span className="event-location m-0">
            Lagos, Nigeria | March 15, 2025 | 7:00 PM
          </span>
        </div>
      </div>

      <div className="ticket-grid-con">
        <span> Select Ticket Type: </span>
        <div className="ticket-grid">
          {tickets.map((ticket) => (
            <div
              key={ticket.type}
              className={`ticket-card ${
                selectedTicket === ticket.type ? "selected" : ""
              }`}
              onClick={() => setSelectedTicket(ticket.type)}
            >
              <h4>Free</h4>
              <h5>{ticket.label}</h5>
              <div className="ticket-info">
                <span className="energy">{ticket.energy}</span>
                <span className="price">{ticket.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="selection-quantity">
        <label>Number of Tickets:</label>
        <select
          className="selection-dropdown w-24 border border-gray-300 rounded-md px-3 py-2 shadow-sm 
                   hover:bg-[#041e23] focus:ring-2 focus:ring-blue-500 focus:bg-[#041e23] text-white"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="selection-btn-con">
        <button className="selection-btn cancel">Cancel</button>
        <button className="selection-btn next" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

Selection.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

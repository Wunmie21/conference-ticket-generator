import Header from './components/header/header';
import Layout from './components/layout/layout';
import Selection from './components/selection/selection'; // Use PascalCase for component names
import AttendeeDetails from './components/attendee-details/attendee-details'; // Use PascalCase
import TicketReady from './components/ticket-ready/ticket-ready'; // Use PascalCase
import './App.css';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1); 

  return (
    <div className='bg-primary-bg'>
      <Layout>
        <Header />
        
        {/* Step 1: Selection */}
        {step === 1 && (
          <Selection 
            nextStep={() => setStep(2)} 
          />
        )}

        {/* Step 2: Attendee Details */}
        {step === 2 && (
          <AttendeeDetails 
            prevStep={() => setStep(1)} 
            nextStep={() => setStep(3)} 
          />
        )}

        {/* Step 3: Ticket Ready */}
        {step === 3 && (
          <TicketReady />
        )}
      </Layout>
    </div>
  );
}

export default App;
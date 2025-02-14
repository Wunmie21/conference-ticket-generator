import Header from './components/header/header';
import Layout from './components/layout/layout';
import Selection from './components/selection/selection'; // Use PascalCase for component names
import AttendeeDetails from './components/attendee-details/attendee-details'; // Use PascalCase
import TicketReady from './components/ticket-ready/ticket-ready'; // Use PascalCase
import './App.css';
import { useState } from 'react';
import { FormProvider } from './components/context/formContext';

function App() {
  const [step, setStep] = useState(1);
  function submitForm() {
    setStep(3);
  }

  return (
    <FormProvider>
      <div className='bg-primary-bg'>
        <Layout>
          <Header />

          {/* Step 1: Selection */}
          {step === 1 && <Selection nextStep={() => setStep(2)} />}

          {/* Step 2: Attendee Details */}
          {step === 2 && (
            <AttendeeDetails
              prevStep={() => setStep(1)}
              nextStep={() => setStep(3)}
              submitForm={submitForm}
            />
          )}

          {/* Step 3: Ticket Ready */}
          {step === 3 && <TicketReady />}
        </Layout>
      </div>
    </FormProvider>
  );
}

export default App;

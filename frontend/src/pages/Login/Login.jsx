import React, { useState } from 'react';
import styles from './Login.module.css';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};

const Register = () => {
    // local state

    const [step, setStep] = useState(1);
    const Step = steps[step];

    const handleSubmit = () => {
        if (step == 5) {
            return;
        }
        setStep(step + 1);
    }

    return (
        <div>
            <Step onClick={handleSubmit} />
        </div>
    )
}

e
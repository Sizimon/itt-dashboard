import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!email.includes('@')) {
            setError('Invalid email address');
            return;
        }

        if (username.length < 3) {
            setError('Username must be at least 3 characters long');
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,18}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must be 6-18 characters long and contain at least one letter, one number, and one special character');
            return;
        }

        // Simulate an API call
        try {
            // Replace with actual API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSuccess('Registration successful!');
            setError('');
            // Redirect to login or dashboard
            navigate('/user-dashboard');
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
        </div>
    )
}

export default Register;
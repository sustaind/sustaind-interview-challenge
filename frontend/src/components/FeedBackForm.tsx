import React, { useState } from 'react';
import { submitFeedback } from '../services/api.ts';

interface FeedbackFormProps {
    iroId: string; // The IRO ID for which feedback is being submitted
}

const FeedBackForm: React.FC<FeedbackFormProps> = ({ iroId }) => {
    const [stakeholderId, setStakeholderId] = useState('');
    const [rating, setRating] = useState<number>(5);
    const [comments, setComments] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        try {

            await submitFeedback({ iroId, stakeholderId, rating, comments });
            setStatus('Feedback submitted successfully!');
            setStakeholderId('');
            setRating(5);
            setComments('');
        } catch (error) {
            setStatus('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <div>
            <h3>Submit Feedback</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Stakeholder ID:</label>
                    <input
                        type="text"
                        value={stakeholderId}
                        onChange={(e) => setStakeholderId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating (1-5):</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        min={1}
                        max={5}
                        required
                    />
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default FeedBackForm;

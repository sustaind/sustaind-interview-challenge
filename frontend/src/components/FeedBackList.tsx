import React, { useEffect, useState } from 'react';
import { getFeedbackForIRO } from '../services/api.ts';

interface FeedbackListProps {
    iroId: string; // The IRO ID for which feedback is displayed
}

const FeedBackList: React.FC<FeedbackListProps> = ({ iroId }) => {
    const [feedbacks, setFeedbacks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const feedbackData = await getFeedbackForIRO(iroId);
                setFeedbacks(feedbackData);
                setLoading(false);
            } catch (error) {
                setError('Failed to load feedback. Please try again.');
                setLoading(false);
            }
        };
        fetchFeedback();
    }, [iroId]);

    if (loading) return <p>Loading feedback...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h3>Feedback for IRO: {iroId}</h3>
            {feedbacks.length === 0 ? (
                <p>No feedback available.</p>
            ) : (
                <ul>
                    {feedbacks.map((feedback) => (
                        <li key={feedback.feedbackId}>
                            <p>
                                <strong>Stakeholder ID:</strong> {feedback.stakeholderId}
                            </p>
                            <p>
                                <strong>Rating:</strong> {feedback.rating}
                            </p>
                            <p>
                                <strong>Comments:</strong> {feedback.comments}
                            </p>
                            <p>
                                <strong>Submitted At:</strong> {new Date(feedback.submittedAt).toLocaleString()}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FeedBackList;
import axios from "axios";

// Base API configuration
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Submit feedback
export const submitFeedback = async (feedbackData: {
  iroId: string;
  stakeholderId: string;
  rating: number;
  comments: string;
}) => {
  const response = await api.post("/feedback", feedbackData);
  return response.data;
};

// Fetch feedback for a specific IRO
export const getFeedbackForIRO = async (iroId: string) => {
  const response = await api.get(`/iro/${iroId}/feedback`);
  return response.data.feedback;
};

export default api;

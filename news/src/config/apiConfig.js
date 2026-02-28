// API Base URL configuration
// Use relative URL when frontend and backend are on the same server (production)
// Use full URL for local development
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export default API_BASE_URL;

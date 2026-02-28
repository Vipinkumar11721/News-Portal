// API Base URL configuration
// Vite automatically loads VITE_ prefixed env variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9000/api';

export default API_BASE_URL;

import { create } from 'zustand';
import axios from '../lib/axios';

const useContactStore = create((set) => ({
  // 🌱 Form Fields
  name: '',
  email: '',
  subject: '',
  message: '',

  // 🔄 Status
  loading: false,
  success: false,
  error: null,

  // ✏️ Input Handlers
  setName: (value) => set({ name: value }),
  setEmail: (value) => set({ email: value }),
  setSubject: (value) => set({ subject: value }),
  setMessage: (value) => set({ message: value }),

  // 🚀 Form Submission
  submitForm: async () => {
    set({ loading: true, success: false, error: null });

    const { name, email, subject, message } = useContactStore.getState();

    try {
      const response = await axios.post('/contact', {
        name,
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        set({ success: true });
        setTimeout(() => set({ success: false }), 3000);
        useContactStore.getState().clearForm();
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      console.error('❌ Error submitting contact form:', error);
      set({ error: error?.response?.data?.error || 'Failed to send message' });
    } finally {
      set({ loading: false });
    }
  },

  // ♻️ Reset all fields
  clearForm: () => {
    set({
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      success: false,
      error: null
    });
  }
}));

export default useContactStore;

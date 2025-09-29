import { create } from "zustand";
import axios from "../lib/axios";

const useContactPageStore = create((set) => ({
  name: "",
  email: "",
  subject: "",
  message: "",
  loading: false,
  success: false,
  error: null,

  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setSubject: (subject) => set({ subject }),
  setMessage: (message) => set({ message }),

  clearForm: () => set({ name: "", email: "", subject: "", message: "" }),

  submitForm: async ({ name, email, subject, message }) => {
    set({ loading: true, error: null, success: false });
    try {
      await axios.post("/contact", {
        name, email, subject, message,
      }, { withCredentials: true });

      set({ success: true });
      setTimeout(() => set({ success: false }), 3000);
      set({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      set({ error: err.response?.data?.error || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useContactPageStore;

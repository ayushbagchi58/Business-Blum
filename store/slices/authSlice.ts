import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@/types/auth.types";

const initialState: AuthState = {
  user: null,
  access_token: null,
  refresh_token: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          company_id: string;
          legal_name: string;
          is_email_verify: boolean;
        };
        access_token: string;
        refresh_token: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.isAuthenticated = true;

      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", action.payload.access_token);
        localStorage.setItem("refresh_token", action.payload.refresh_token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
    },

    logout: (state) => {
      state.user = null;
      state.access_token = null;
      state.refresh_token = null;
      state.isAuthenticated = false;

      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
      }
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    hydrate: (state) => {
      // Hydrate state from localStorage on app init
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("access_token");
        const refresh = localStorage.getItem("refresh_token");
        const userStr = localStorage.getItem("user");

        if (token && refresh && userStr) {
          state.access_token = token;
          state.refresh_token = refresh;
          state.user = JSON.parse(userStr);
          state.isAuthenticated = true;
        }
      }
    },
  },
});

export const { setCredentials, logout, setLoading, hydrate } =
  authSlice.actions;

export default authSlice.reducer;

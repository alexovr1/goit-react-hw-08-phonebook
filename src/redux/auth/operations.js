import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifySuccess, notifyWarning } from 'helpers/notifications';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            // After successful registration, add the token to the HTTP header
            setAuthHeader(res.data.token);
            notifySuccess('Registration success')
            return res.data;
        } catch (error) {
            notifyWarning('Registration error, please check value or the user already exists')
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            // After successful login, add the token to the HTTP header
            setAuthHeader(res.data.token);
            notifySuccess('Login sucsess');
            return res.data;
        } catch (error) {
            notifyWarning('Login error, please check your e-mail or password')
            return thunkAPI.rejectWithValue(error.message);

        }
    }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        // After a successful logout, remove the token from the HTTP header
        clearAuthHeader();
        notifySuccess('Logout success')
    } catch (error) {
        notifyWarning('Logout error')
        return thunkAPI.rejectWithValue(error.message);

    }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            // If there is a token, add it to the HTTP header and perform the request
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            notifySuccess('Login success')
            return res.data;
        } catch (error) {
            notifyWarning('Login error')
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

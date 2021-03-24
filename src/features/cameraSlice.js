import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setcameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetcameraImage:(state) => {
        state.cameraImage = null;
    }
  },
});

export const { setcameraImage,resetcameraImage } = cameraSlice.actions;

export const selectcameraImage = state => state.camera.cameraImage;

export default cameraSlice.reducer;

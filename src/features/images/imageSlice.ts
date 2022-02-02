import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ImageState {
  value: Image[]
}

export interface Image {
  id: string
  description: string
  url: string
  size: number
  date: string
}

const initialState: ImageState = {
  value: [],
}

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<Image>) => {
      state.value.push(action.payload)
    },
    addAll: (state, action: PayloadAction<Image[]>) => {
      state.value = action.payload
    },
    removeImage: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((value) => {
        state.value = state.value.filter((img) => img.id !== value)
      })
    },
    removeAll: (state) => {
      state.value = []
    },
  },
})

export const { addImage, removeImage, removeAll, addAll } = imageSlice.actions

export const selectImages = (state: RootState) => state.images.value

export default imageSlice.reducer

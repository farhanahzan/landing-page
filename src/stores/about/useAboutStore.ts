// useAboutStore.ts
import { create } from 'zustand';

export interface AboutFormData {
  title: string;
  paragraph: string;
  image: string;
  ctaOne: string;
  ctaOneLink: string;
}

export interface AboutFormState {
  aboutFormData: AboutFormData;
  setAboutFormData: (data: AboutFormData) => void;
}

const useAboutStore = create<AboutFormState>((set) => ({
  aboutFormData: {
    title: '',
    paragraph: '',
    image: '',
    ctaOne: '',
    ctaOneLink: '',
  },
  setAboutFormData: (data: AboutFormData) => set({ aboutFormData: data }),
}));

export default useAboutStore;

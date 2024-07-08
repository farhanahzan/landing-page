// useHeroStore.ts
import { create } from 'zustand';

export interface HeroFormData {
  title: string;
  subtitle: string;
  paragraph: string;
  image: string;
  ctaOne: string;
  ctaOneLink: string;
  ctaTwo: string;
  ctaTwoLink: string;
}

export interface HeroFormState {
  heroFormData: HeroFormData;
  setHeroFormData: (data: HeroFormData) => void;
}

const useHeroStore = create<HeroFormState>((set) => ({
  heroFormData: {
    title: '',
    subtitle: '',
    paragraph: '',
    image: '',
    ctaOne: '',
    ctaOneLink: '',
    ctaTwo: '',
    ctaTwoLink: '',
  },
  setHeroFormData: (data: HeroFormData) => set({ heroFormData: data }),
}));

export default useHeroStore;

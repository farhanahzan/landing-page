import { create } from 'zustand';
import useHeroStore, { HeroFormState } from './hero/useHeroStore';
import useAboutStore, { AboutFormState } from './about/useAboutStore';

type GlobalState = HeroFormState & AboutFormState;

const useGlobalStore = create<GlobalState>((set) => ({
  ...useHeroStore.getState(),
  ...useAboutStore.getState(),
  setHeroFormData: (data: HeroFormState['heroFormData']) => {
    useHeroStore.getState().setHeroFormData(data);
    set({ heroFormData: data });
  },
  setAboutFormData: (data: AboutFormState['aboutFormData']) => {
    useAboutStore.getState().setAboutFormData(data);
    set({ aboutFormData: data });
  },
}));

export default useGlobalStore;

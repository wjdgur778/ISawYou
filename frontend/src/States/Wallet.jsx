import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const Wallet = atom({
  key: 'Wallet',
  default: null,
  effects_UNSTABLE: [persistAtom],

});
import Cookies from "js-cookie";
import { create } from "zustand";


type State = {
  user: string | null;
  setUser: (name: string) => void;
}

export const useStore = create<State>((set) => ({
  // 스토어 생성 시 쿠키에서 사용자 이름을 가져옴.
  user: Cookies.get('user') || null,
  // setUser 호출 시 사용자 이름을 쿠키에 저장하고 zustand 스토어의 상태를 업데이트
  setUser: (name: string) => {
    Cookies.set('user', name)
    set({ user: name })
  }
}))
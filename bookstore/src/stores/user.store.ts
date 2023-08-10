import { create } from "zustand";

interface User {
    user: any;
    setUser: (user: any) => void;
    removeUser: () => void;
}



// StaticRange 해당 객체 전체를 불러옴
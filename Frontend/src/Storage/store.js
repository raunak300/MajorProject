import { create } from "zustand";
import { persist } from "zustand/middleware";

// ✅ Auth Slice
const createAuthSlice = (set) => ({
  logged: false,
  checkLoggedIn: (status) => set({ logged: status }),
});

const userData = (set) => ({
  user: {
    ventId: null,
  },
  setUserData: (data) =>
    set((state) => ({
      user: {
        ...state.user,
        ...data,
      },
    })),
  clearUserData: () =>
    set({
      user: {
        ventId: null,
      },
    }),
})

// ✅ Chat Slice (Example)
const createAIChatSlice = (set) => ({
  chats: [],
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
});

const createComment = (set) => ({
  comments: [],
  addComments: (comments) => set((state) => ({ comments: [...state.comments, comments] }))
})

// ✅ Combine all slices in one store
export const useAppStore = create()(
  persist(
    (set, get) => ({
      ...createAuthSlice(set, get),
      ...userData(set, get),
      ...createAIChatSlice(set, get),
      ...createComment(set, get),
      // add more slices here
    }),
    { name: "app-storage" } // persists in localStorage
  )
);

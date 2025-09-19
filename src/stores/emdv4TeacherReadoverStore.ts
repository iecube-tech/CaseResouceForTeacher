// stores/draggableStore.js
import { defineStore } from 'pinia';

export const currentPSTStore = defineStore('currentPSTStore', {
    state: () => ({
        currentPSTid: null
    }),
    actions: {
        setCurrPSTid(PSTid: number) {
            this.currentPSTid = PSTid;
        },
    },
    getters: {
        getcurrentPSTid: (state) => state.currentPSTid,
    }
});

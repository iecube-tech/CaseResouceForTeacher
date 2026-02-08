import { defineStore } from 'pinia';

export const useExamViewStore = defineStore('examView', {
    state: () => ({
        currentExamCourse: null,
    }),
    actions: {
        setCurrentExamCourse(currentExamCourse: any) {
            this.currentExamCourse = currentExamCourse;
        },
    },
    getters: {
        getCurrentExamCourse: (state) => state.currentExamCourse,
    }
});
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const userGroupStore = defineStore('userGroupStore', () => {
    const addGroupDialog = ref(false)
    const addAuthDialog = ref(false)
    const addUserDialog = ref(false)

    const addGroupDialogChange = () => {
        addGroupDialog.value = !addGroupDialog.value
    }

    const addAuthDialogChange = () => {
        addAuthDialog.value = !addAuthDialog.value
    }

    const addUserDialogChange = () => {
        addUserDialog.value = !addUserDialog.value
    }

    return {
        addGroupDialog,
        addAuthDialog,
        addUserDialog,
        addGroupDialogChange,
        addAuthDialogChange,
        addUserDialogChange
    }
})
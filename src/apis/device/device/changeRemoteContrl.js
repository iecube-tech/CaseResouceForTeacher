import httpInstance from "@/utils/http";
export function ChangeRemoteControl(id, targetState) {
    return httpInstance({
        url: '/device/change_remote_control',
        method: 'POST',
        params: { id: id, targetState: targetState }
    })
}
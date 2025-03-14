import httpInstance from "@/utils/http";

export function DelLabProc(labProcQo) {
    return httpInstance({
        url: 'elaborate/md/lab/del',
        method: 'DELETE',
        data: labProcQo
    })
}
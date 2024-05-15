import httpInstance from "@/utils/http";
export function DelModules(id) {
    return httpInstance({
        url: '/points/del_module_tem',
        method: 'DELETE',
        params: { id: id }
    })
}
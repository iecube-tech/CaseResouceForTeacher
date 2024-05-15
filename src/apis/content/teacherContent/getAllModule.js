import httpInstance from "@/utils/http";
export function AllModules() {
    return httpInstance({
        url: '/points/all_module_tem',
        method: 'GET'
    })
}
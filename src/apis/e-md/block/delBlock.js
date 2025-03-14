import httpInstance from "@/utils/http";

export function DelBlock(block) {
    return httpInstance({
        url: 'elaborate/md/block/del',
        method: 'DELETE',
        data: block
    })
}
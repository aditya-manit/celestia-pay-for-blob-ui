import {CallRpcWithPayload} from "../call-rpc-with-payload";

async function processData(data) {
    return data
}

export async function getNameSpaceSharesAtHeight(namespaceId, height) {
    const requestData = {}
    const data = await CallRpcWithPayload(requestData, "dummy_token", `namespaced_shares/${namespaceId}/height/${height}`, "GET")
    return await processData(data);
}

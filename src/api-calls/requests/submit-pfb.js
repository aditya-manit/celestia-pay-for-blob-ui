import {CallRpcWithPayload} from "../call-rpc-with-payload";

async function processData(data) {
    return data.height
}

export async function submitPfb(namespaceId, textData) {
    const requestPayload = {
        namespace_id: namespaceId,
        data: textData,
        "gas_limit": 80000,
        "fee": 2000
    }
    const data = await CallRpcWithPayload('','', requestPayload, "dummy_token", 'submit_pfb', "POST" )
    return await processData(data);
}

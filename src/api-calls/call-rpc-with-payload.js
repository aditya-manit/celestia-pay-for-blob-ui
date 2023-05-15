require('dotenv').config();

export async function CallRpcWithPayload(baseUrlToBeUsed, portToBeUsed, requestPayload, token, endpoint, method) {


    let baseUrl = baseUrlToBeUsed || process.env.REACT_APP_BACKEND_BASE_URL
    const port = portToBeUsed || process.env.REACT_APP_BACKEND_PORT


    if (!baseUrl.startsWith("http")) {
        baseUrl = "http://" + baseUrl;
    }

    console.log(`Calling ${baseUrl}`)
    const url = `https://cors-proxy.kingsuper.services/?targetApi=${encodeURIComponent(`${baseUrl}:${port}/${endpoint}`)}`;

    console.log(`Calling ${url}`)


    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(requestPayload);
    }



    const response = await fetch(url, options);
    console.log(response)
    const data = await response.json();
    console.log("data", data);
    return data;
}

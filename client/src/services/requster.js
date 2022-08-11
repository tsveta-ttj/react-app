const request = async (method, url, data) => {
    try {
        let headers = {}
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        const result = await response.json();

        return result;

    }
    catch (error) {
        console.log(error);
    }
}
export const get = request.bind({}, 'GET')
export const post = request.bind({}, 'POST');
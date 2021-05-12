export const request = async (endpoint, method, data = {}, headers = { 'Content-Type': 'application/json' }) => {
    if(method == 'POST'){
        try {
            const response = await fetch(endpoint, {
                method, // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers,
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json();
        } catch(e) {
            console.log('Error making the request => ', e)
        }
    } else if(method == 'GET') {
        try {
            const myHeaders = new Headers();
            const myRequest = new Request(endpoint, {
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default',
            });

            const response = await fetch(myRequest)
            return response.json();
        } catch(e) {
            console.log('Error making the GET request => ', e)
        }
    }
};
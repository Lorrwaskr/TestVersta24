const URL = "/orders";

export async function getOrders() {
    const options = {
        method: "GET",
    }
    const response = await fetch(URL, options);
    return response.json();
}

export async function getOrder(id) {
    const options = {
        method: "GET",
    }
    const response = await fetch(URL + '/' + id, options);
    return response.json();
}
    
export async function createOrder(formData) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData)
    }

    const response = await fetch(URL, options);
    if (!response.ok) {
        throw new Error(response.text())
    }
}
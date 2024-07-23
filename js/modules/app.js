export const getAllPeople = async () => {

    const url = ("https://66a00317b132e2c136ffd161.mockapi.io/user");
    const custom = { method: "GET" };

    let res = await fetch(url, custom);
    let data = await res.json();
    return data;
}
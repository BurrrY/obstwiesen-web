async function getData(path: string) {
    let url: string = 'http://localhost:8080/' +path;
    console.log(url)
    const res = await fetch( url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.body
}

export default async function Page(path:string, file:string) {
    const data = await getData("/assets/${path}/${file}")

    return data
}
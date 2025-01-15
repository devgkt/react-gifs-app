
//Using fetch to get the Gifs, it is used within the custom hook
export const gettGifs = async(category) => {//`string text`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WDFlywiv6mcKfdLzK9BDRj22ESl78AVP&q=${category}&limit=10`;
    const resp =  await fetch(url);

    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
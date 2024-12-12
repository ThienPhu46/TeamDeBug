const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '71ce4cf6619445d5b8254ff67dcf7343',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
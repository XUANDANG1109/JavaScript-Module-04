document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const input = document.querySelector('#query').value;
    try {
        const search = 'https://api.tvmaze.com/search/shows?q='+ input;
        const proxy = 'https://api.allorigins.win/get?url=';
        const url = proxy + encodeURIComponent(search);

        const response = await fetch(url);
        if (!response.ok) throw new Error('No Information');
        const result = await response.json();
        const API = JSON.parse(result.contents);


        for (let item of API) {
            const h3 = document.createElement('h3');
            const container = document.createElement('show');
   
            const link = document.createElement('a');
            const description = document.createElement('p');
            link.href = item['show']['url'];
            link.target = "_blank";
            
            document.body.appendChild(container)

            const image = document.createElement('image');
            image.src = item['show']['image'] ?
                item['show']['image']['medium'] :
                'https://via.placeholder.com/200x300'
            image.alt = item['show']['name'];
   
            const genres = document.createElement('ul');
            for (let i = 0; i <= item['show']['genres'].length-1; i++){
                genres.innerHTML += `<li> ${item['show']['genres'][i]} </li>`
                }
     
            h3.innerHTML = item['show']['name'];
            link.innerHTML = item['show']['url'];
            description.innerHTML = item['show']['summary'];

            container.appendChild(h3);
            container.appendChild(link);
            container.appendChild(image);
            container.appendChild(genres)
            container.appendChild(description);

        }

    } catch (error) {
        console.log('error', error);
    }
});
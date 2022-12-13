document.addEventListener('submit', async function(e) {
    e.preventDefault();
    const input = document.querySelector('#query').value;
    try {
        const search = 'https://api.tvmaze.com/search/shows?q='+ input;
        const proxy = 'https://api.allorigins.win/get?url=';
        const url = proxy + encodeURIComponent(search);

        const response = await fetch(url);
        if (!response.ok) throw new Error('Invalid input!');
        const result = await response.json();
        const API = JSON.parse(result.contents);

        const h3 = document.createElement('h3');
        const container = document.getElementById('show');
        const description = document.createElement('descript');
      
        const link = document.createElement('url');
        link.href = API[0]['show']['url'];
        link.target = "_blank";
        
        const image = document.createElement('image');
        image.src = API[0]['show']['image']['medium'];
        image.alt = API[0]['show']['name'];

        h3.innerHTML = API[0]['show']['name'];
        description.innerHTML = API[0]['show']['summary'];
        link.innerHTML = API[0]['show']['url'];

        container.appendChild(h3);
        container.appendChild(description);
        container.appendChild(link);
        container.appendChild(image);
  

    } catch (error) {
        console.log('error', error);
    }
});
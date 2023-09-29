function shortenUrl() {
    const longUrlInput = document.getElementById('longUrl');
    const shortUrlDisplay = document.querySelector('#shortUrl');
    const linkDisplay = document.querySelector('#link');
    const longUrl = longUrlInput.value.trim();
  
    if (longUrl === '') {
      alert('Please enter a valid URL.');
          return;
    }
  
   
    const shortUrl = generateShortUrl();
    
    
    shortUrlDisplay.innerText = 'Shortened URL: ';
    linkDisplay.innerText = `${shortUrl}`;
  
   
    linkDisplay.addEventListener('click', function() {
      window.location.href = longUrl;
    });
  }
  
  function generateShortUrl() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const shortUrlLength = 6;
    let shortUrl = '';
  
    for (let i = 0; i < shortUrlLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortUrl += characters[randomIndex];
    }
  
    return `https://short.url/${shortUrl}`;
  }
  
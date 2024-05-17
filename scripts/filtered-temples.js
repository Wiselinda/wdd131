document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        hamburger.innerHTML = nav.classList.contains('show') ? '&#10006;' : '&#9776;';
    });
 
 const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 111764,
        imageUrl: "https://img.goodfon.com/original/3800x2537/9/7b/senso-ji-ancient-buddhist-temple-tokyo-japan-senso-dzi-drevn.jpg"
      },
      {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2014, March, 31",
        area: 12873,
        imageUrl: "https://matuete.com/wpmatuete/wp-content/uploads/2013/12/riodejaneiro07.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 7865,
    imageUrl: "https://i.pinimg.com/originals/89/5b/04/895b044377337709c41f709a4b063589.jpg"
  }
  ];
  
  function displayTemples(filteredTemples) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = ''; 
  
    filteredTemples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.className = 'temple-card';
      
      const templeImage = document.createElement('img');
      templeImage.src = temple.imageUrl;
      templeImage.alt = temple.templeName;
      templeImage.loading = 'lazy'; // Native lazy loading
  
      const templeInfo = document.createElement('div');
      templeInfo.className = 'temple-info';
  
      const templeName = document.createElement('h3');
      templeName.textContent = temple.templeName;
  
      const templeLocation = document.createElement('p');
      templeLocation.textContent = `Location: ${temple.location}`;
  
      const templeDedicated = document.createElement('p');
      templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
      const templeArea = document.createElement('p');
      templeArea.textContent = `Size: ${temple.area} sq ft`;
  
      // Append information to the temple card
      templeInfo.appendChild(templeName);
      templeInfo.appendChild(templeLocation);
      templeInfo.appendChild(templeDedicated);
      templeInfo.appendChild(templeArea);
  
      templeCard.appendChild(templeImage);
      templeCard.appendChild(templeInfo);
  
      // Append the temple card to the container
      templeContainer.appendChild(templeCard);
    });
  }
  
  // Event listeners for filtering
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const filter = event.target.dataset.filter;
      let filteredTemples = [];
  
      if (filter === 'home') {
        filteredTemples = temples;
      } else if (filter === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      } else if (filter === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      } else if (filter === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (filter === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
      }
  
      displayTemples(filteredTemples);
      document.getElementById('main-heading').textContent = event.target.textContent;
    });
  });
  
  // Initial display
  displayTemples(temples);
  
  // Update footer information
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastmodified').textContent = document.lastModified;
});
  

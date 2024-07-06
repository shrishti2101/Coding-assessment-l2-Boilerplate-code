// console.log('====================================');
// console.log("Connected");
// console.log('====================================');


// document.addEventListener('DOMContentLoaded', () => {
//     const tabContainer = document.querySelector('.tabs');
//     const tabContents = document.querySelectorAll('.tabcontent');

//     // Event delegation for tab clicks
//     tabContainer.addEventListener('click', (e) => {
//         if (e.target.classList.contains('tablinks')) {
//             const tabName = e.target.getAttribute('data-tab');
//             openTab(tabName);
//         }
//     });


//      // Function to open a specific tab
//      function openTab(tabName) {
//         tabContents.forEach(tabContent => {
//             tabContent.style.display = tabContent.id === tabName ? 'block' : 'none';
//         });

//         const tabLinks = document.querySelectorAll('.tablinks');
//         tabLinks.forEach(tabLink => {
//             tabLink.classList.toggle('active', tabLink.getAttribute('data-tab') === tabName);
//         });
//            // Fetch and display product data based on the tab name (category)
//            fetchAndDisplayProducts(tabName);
//         }   

//         function fetchAndDisplayProducts(category) {
//             fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
//                 .then(response => response.json())
//                 .then(data => {
//                     // Ensure data and categories exist
//                     if (data && data.categories) {
//                         const categoryData = data.categories.find(cat => cat.name === category);
//                         if (categoryData && categoryData.products) {
//                             document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = formatProductData(categoryData.products);
//                         } else {
//                             document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = '<p>No products found in this category.</p>';
//                         }
//                     } else {
//                         console.error('Invalid product data structure:', data);
//                         document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = '<p>No products found in this category.</p>';
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching product data:', error);
//                     document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = '<p>Error loading products. Please try again later.</p>';
//                 });
//         }
    
//         // Helper function to format product data
//         function formatProductData(products) {
//             if (products.length === 0) {
//                 return '<p>No products found in this category.</p>';
//             }
//             return `<div class="product-grid">
//                 ${products.map(product => `
//                     <div class="product-card">
//                         <strong>${product.title}</strong><br>
//                         Price: ${product.price}<br>
//                         ${product.description}
//                     </div>
//                 `).join('')}
//             </div>`;
//         }
//         openTab('Men');    
// });

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('.tabs');
    const tabContents = document.querySelectorAll('.tabcontent');

    // Event delegation for tab clicks
    tabContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tablinks')) {
            const tabName = e.target.getAttribute('data-tab');
            openTab(tabName);
        }
    });

    // Function to open a specific tab
    function openTab(tabName) {
        tabContents.forEach(tabContent => {
            tabContent.style.display = tabContent.id === tabName ? 'block' : 'none';
        });

        const tabLinks = document.querySelectorAll('.tablinks');
        tabLinks.forEach(tabLink => {
            tabLink.classList.toggle('active', tabLink.getAttribute('data-tab') === tabName);
        });

        // Fetch and display product data based on the tab name (category)
        fetchAndDisplayProducts(tabName);
    }

    // Fetch product data from the API and display based on category
    function fetchAndDisplayProducts(category) {
        fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
            .then(response => response.json())
            .then(data => {
                // Ensure data and categories exist
                if (data && data.categories) {
                    console.log(data.categories);
                    const categoryData = data.categories.find(cat => cat.category_name == category);
                    if (categoryData && categoryData.category_products) {
                        console.log(categoryData.category_products);
                        document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = formatProductData(categoryData.category_products);
                    } else {
                        document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = '<p>No products found in this category.</p>';
                    }
                } else {
                    console.error('Invalid product data structure:', data);
                    document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = '<p>No products found in this category.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
                document.getElementById(`product-data-${category.toLowerCase()}`).innerHTML = '<p>Error loading products. Please try again later.</p>';
            });
    }

      // Helper function to format product data
      function formatProductData(products) {
        if (products.length === 0) {
            return '<p>No products found in this category.</p>';
        }
        return `<div class="product-grid">
            ${products.map(product => `
                <div class="product-card">
                
                 <img class="product-image" src="${product.image}"/>
                    ${product.badge_text?`<span class="badge">${product.badge_text}</span>`:''}

                    <div class="product-header"><strong class="product-title">${product.title}</strong> <li>${product.vendor}</li></div>
                    <p class="product-price"> Price: Rs ${product.price} <span class="compare-price">${product.compare_at_price}</span><span class="percent"> 50% off</span></p>

                    <button class='product-btn'>Add to Cart</button>
                </div>
            `).join('')}
        </div>`;
    }


    // Initialize by opening the first tab
    openTab('Men');
});

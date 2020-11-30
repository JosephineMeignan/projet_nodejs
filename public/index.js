console.log('HelloWord');
const $inputSearch = $('#input-search');

$(document).on('click', '#button-search', () => {
    console.log('button click');
});

$(document).on('keyup', '#input-search', () => {
    console.log($inputSearch.val());
    const searchValue = $inputSearch.val();

    $.get('/products?search=' + searchValue, (products) => {
        const templateHtml = $('#template-products').html();
        console.log(templateHtml);
        // compile the template
        const template = Handlebars.compile(templateHtml);
        // execute the compiled template and print the output to the console
        const renderHtml = template({ products });

        $('#table-body').html(renderHtml);

    });

    // todo send ajax request with the search value


});

// loadProductList();

// function loadProductList () {
//     let request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             showCharacterList(JSON.parse(this.responseText));
//         }

//     }


//     request.open("GET", "https://www.breakingbadapi.com/api/characters", true);
//     request.send();
// }
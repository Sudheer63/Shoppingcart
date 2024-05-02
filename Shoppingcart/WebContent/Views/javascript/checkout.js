$(document).ready(function() {
    var items = [];
	var count=0;
    // Loop through local storage to retrieve items
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        var itemData = JSON.parse(value);

        var item = {
            key: key,
            data: itemData
        };

        items.push(item);
    }

    // Iterate through items array and append rows to the table
    $.each(items, function(index, element) {
		var i=element.data.itemQuantity * element.data.itemprice;
		count+=i;
        var div =
            '<tr>' +
                '<td>' + (index + 1) + '</td>' + // Display 1-based index
                '<td>' + element.data.itemname + '</td>' +
                '<td>' + element.data.itemprice + '</td>' +
                '<td>' + element.data.itemQuantity + '</td>' +
                '<td>' + i + '</td>' +
            '</tr>';

        $('.table-class tbody').append(div);
    });
    $('#total').text(count);
});



showData(data);

function showData(data) {
    d3.select('tbody').html('');
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            row.append('td').text(val);
        });
    });
};

var filter = data;
d3.selectAll('input').on('change', () => {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');
    
    filter = filter.filter(obj => obj[key] == value)
    console.log(d3.select(this));
    showData(filter);
})


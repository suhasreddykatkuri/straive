// json2html.js

export default function json2html(data) {
    // Extract unique keys from the data to use as table headers
    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    // Start building the HTML table with the data-user attribute
    let html = '<table data-user="reddyksuhas5@gmail.com">\n';

    // Add table headers
    html += '  <thead>\n    <tr>';
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr>\n  </thead>\n';

    // Add table rows
    html += '  <tbody>\n';
    data.forEach(row => {
        html += '    <tr>';
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += '</tr>\n';
    });
    html += '  </tbody>\n</table>';

    return html;
}

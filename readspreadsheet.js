const {google} = require('googleapis');
let authentication = require("./test.js");

setTimeout(function(){
const authvalue = authentication.authorized ;
//console.log(authvalue)
listMajors(authvalue)
}, 100)


function listMajors(auth) {
  //  console.log('auth' , auth)
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1qwcxhbsxRDnJ-zUo57JxGxxzVaspq7B11f2CUSg4eHo',
    range: 'Data',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row}`);
      });
    } else {
      console.log('No data found.');
    }
  });
}
const {google} = require('googleapis');
require( 'dotenv' ).config();
let authentication = require("../googleauth.js");

module.exports = {
  post: function ( helpid , name , phone , coordinates ) {
    var sheetid = process.env.SHEETID  || "1qwcxhbsxRDnJ-zUo57JxGxxzVaspq7B11f2CUSg4eHo"
    var sheetname = process.env.SHEETNAME || "SaveSoul" 
setTimeout(function(){
const authvalue = authentication.authorized ;
//console.log(authvalue)
appendData(authvalue)
}, 100)


function appendData(auth) {
   // console.log(auth)
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.append({
      auth: auth,
      spreadsheetId: sheetid,
      range: sheetname, //Change Sheet1 if your worksheet's name is something else
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [ [helpid, name , phone , coordinates], ]
      }
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      } else {
          console.log("Appended");
      }
    });
  }

}}
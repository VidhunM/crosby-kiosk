/**
 * Google Apps Script - Form Handler
 * 
 * 1. Create a Google Sheet.
 * 2. In the Google Sheet, go to Extensions > Apps Script.
 * 3. Paste this code.
 * 4. Replace 'Your Sheet Name' with the name of your sheet tab (e.g., 'Sheet1').
 * 5. Deploy as Web App (Anyone: Anonymous).
 * 6. Copy the Web App URL and paste it into FinalCTASection.jsx.
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Crossbylaw') ||
      SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    const data = JSON.parse(e.postData.contents);

    // Append data to the sheet
    // Columns: Timestamp, Name, Business Type, Email, Phone, Message
    sheet.appendRow([
      new Date(),
      data.name,
      data.businessType,
      data.email,
      data.phone,
      data.message
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

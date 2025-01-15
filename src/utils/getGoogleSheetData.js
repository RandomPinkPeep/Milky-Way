import { google } from 'googleapis';
import fs from 'fs';

const credentials = JSON.parse(fs.readFileSync('./path-to-your-key.json', 'utf8'));

export async function getGoogleSheetData(sheetId, range) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range,
  });

  return response.data.values; // Returns rows of data
}

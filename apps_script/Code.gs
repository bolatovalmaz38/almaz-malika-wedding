const SHEET_NAME = 'RSVP';

function doGet() {
  return outputJson({ status: 'ok', message: 'Wedding RSVP script is running' });
}

function doPost(e) {
  try {
    const sheet = getOrCreateSheet_(SHEET_NAME);
    const payload = JSON.parse(e.postData.contents || '{}');

    if (!payload.guest_name) {
      return outputJson({ status: 'error', message: 'guest_name is required' });
    }

    ensureHeaders_(sheet, [
      'timestamp',
      'guest_name',
      'attendance',
      'language',
      'source_page',
      'created_at_client',
      'user_agent'
    ]);

    sheet.appendRow([
      new Date(),
      payload.guest_name || '',
      payload.attendance || '',
      payload.language || '',
      payload.source_page || '',
      payload.created_at_client || '',
      payload.user_agent || ''
    ]);

    return outputJson({ status: 'success' });
  } catch (error) {
    return outputJson({ status: 'error', message: String(error) });
  }
}

function getOrCreateSheet_(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const existing = ss.getSheetByName(sheetName);
  return existing || ss.insertSheet(sheetName);
}

function ensureHeaders_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function outputJson(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
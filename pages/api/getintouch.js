import { google } from "googleapis";

export default async function getInTouch(req, res) {
  if (req.method != "POST") {
    return res.status(405).json({ message: "Invalid request.." });
  }

  const body = req.body;
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_APP_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_APP_GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      // Scopes can be specified either as an array or as a single, space-delimited string.
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_APP_GOOGLE_SHEET_ID,
      range: "A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString(),
            body.email,
            body.name,
            body.phone,
            body.message,
          ],
        ],
      },
    });
    return res.status(200).json({ status: response.status });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ?? "Something went wrong" });
  }
}

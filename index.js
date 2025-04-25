// const fetchSlackMessages = require('./slack/fetchMessages'); // fetch data directly from slack
const fetchSlackMessages = require('./mockSlackData');
const analyzeText = require('./analyzer/analyzeText');
const fs = require('fs');

const generateHTMLReport = (messages) => {
  const currentDate = new Date().toLocaleDateString();
  
  // HTML structure for the report
  const reportHeader = `
    <html>
      <head>
        <title>Signal Analysis Report: ${currentDate}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { text-align: center; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background-color: #f4f4f4; }
          tr:nth-child(even) { background-color: #f9f9f9; }
        </style>
      </head>
      <body>
        <h1>Signal Analysis Report: ${currentDate}</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Message</th>
              <th>Signal</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
  `;
  
  let reportContent = reportHeader;

  // Loop through messages and add them to the report
  messages.forEach((message, index) => {
    reportContent += `
      <tr>
        <td>${index + 1}</td>
        <td>"${message.input}"</td>
        <td>${message.signal}</td>
        <td>${message.confidence}</td>
      </tr>
    `;
  });

  // Add closing tags for the HTML document
  reportContent += `
          </tbody>
        </table>
      </body>
    </html>
  `;

  // Write the HTML content to a file
  const fileName = `Signal_Report_${currentDate.replace(/\//g, '-')}.html`;
  fs.writeFileSync(fileName, reportContent);  // Writes the report to the current directory
  console.log(`HTML Report Generated: ${fileName}`);
};

(async () => {
  const messages = await fetchSlackMessages();
  console.log('\n--- Signal Analysis ---');

  const analysisResults = messages.map((msg) => {
    const result = analyzeText(msg);
    console.log(result); // You can keep this if you want console output too
    return result;
  });
  generateHTMLReport(analysisResults);
})();

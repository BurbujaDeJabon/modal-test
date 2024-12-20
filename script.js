document.getElementById("openWindowButton").addEventListener("click", () => {
    const content = document.getElementById("modalContent").innerHTML;
    const popup = window.open("", "PopupWindow", "width=400,height=300");
    popup.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Popup</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 10px;
          }
        </style>
      </head>
      <body>${content}</body>
      </html>
    `);
    popup.document.close();
  });
  
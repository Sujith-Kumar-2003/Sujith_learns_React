import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

// Step 1: Prompt the user for a URL
inquirer
  .prompt([
    {
      name: "url",
      message: "Enter your URL here => ",
    },
  ])
  .then((answers) => {
    const userURL = answers.url;

    // Step 2: Write the URL to a text file
    fs.writeFile("url.txt", userURL, (err) => {
      if (err) throw err;
      console.log("URL saved to url.txt");
    });

    // Step 3: Generate QR code and save as image
    const qr_png = qr.image(userURL, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_img.png"));
    console.log("QR Code image saved as qr_img.png");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

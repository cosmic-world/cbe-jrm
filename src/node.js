const fs = require('fs');
const path = require('path');

// Specify the folder containing the files
const folderPath = 'public/asset/JRM_HTML_FILE'; // Replace with your folder path

// Function to get an array of file names without extensions and write them to a text file
const getFileNamesWithQuotes = (folderPath) => {
  try {
    // Read all files in the folder
    const files = fs.readdirSync(folderPath);
    console.log('Files in the folder:', files); // Debugging: Log files in the folder

    const fileNamesWithQuotes = files
      .filter((file) => fs.statSync(path.join(folderPath, file)).isFile())
      .map((file) => `'${path.basename(file, path.extname(file))}'`); // Remove extension and wrap in single quotes

    // Create or overwrite a text file with the formatted file names
    const outputPath = path.join('src/destinationlist.txt');
    fs.writeFileSync(outputPath, fileNamesWithQuotes.join(',\n') + ',', 'utf8');

    console.log(
      'File names without extensions have been written to fileNamesWithQuotes.txt',
    );
    return fileNamesWithQuotes;
  } catch (error) {
    console.error('Error reading folder:', error);
    return [];
  }
};

// Call the function
getFileNamesWithQuotes(folderPath);

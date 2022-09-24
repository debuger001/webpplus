const webp = require('webp-converter');

let imagesPath = './images';
let compressedPath = './compressed';

const fs = require('fs');

let deleteSource = true;

const folderPassedSource = process.argv[2];
if(folderPassedSource != undefined && folderPassedSource != '' && folderPassedSource != '.') {
    imagesPath = folderPassedSource;
    deleteSource = false;
}

const folderPassedDestination = process.argv[3];
if(folderPassedDestination != undefined && folderPassedDestination != '' && folderPassedDestination != '.') {
    compressedPath = folderPassedDestination;
}

fs.readdir(imagesPath, (err, files) => {
    files.forEach(async file => {
        if(file != 'emptyfile') {
            let filenameChunks = file.split('.');
            let filename = '';
            for(let i=0; i<filenameChunks.length-1; i++) {
                if(i > 0) {
                    filename += '.';
                }
                filename += filenameChunks[i];
            }
            let filePathOld = imagesPath + '/' + file;
            let filePathNew = compressedPath + '/' + filename + '.webp';
            try {
                await webp.cwebp(filePathOld, filePathNew,"-q 100", logging="-v");
                console.log('%c ' + filename + ' converted', 'background: #222; color: #bada55')
            }
            catch(err) {
                console.error(filename + ': ' + err.message);
            }
            
            if(deleteSource) {
                await fs.unlink(filePathOld, err => {
                    if(!err) {
                        console.log('%c ' + filename + ' moved', 'background: #222; color: #bada55');
                    }
                    else {
                        console.error(filename + ' something, cannot delete');
                    }
                });
            }
        }
    });
});





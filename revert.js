const webp = require('webp-converter');

let imagesPath = './images';
let compressedPath = './reverted';

const fs = require('fs');

let deleteSource = true;

let revertTo = 'jpeg';

let typeError = false;
let revertToTmp = process.argv[2];
if(revertToTmp != undefined && revertToTmp != '') {
    revertToTmp = revertToTmp.toLowerCase();
    if(revertToTmp == 'jpeg' || revertToTmp == 'png' || revertToTmp == 'gif' || revertToTmp == 'jpg' || revertToTmp == 'bmp') {
        revertTo = revertToTmp;
    }
    else {
        console.error('Invalid image type')
        console.error('Only JPEG, JPG, PNG, GIF are allowed')
        typeError = true;
    }
}

const folderPassedSource = process.argv[3];
if(folderPassedSource != undefined && folderPassedSource != '' && folderPassedSource != '.') {
    imagesPath = folderPassedSource;
    deleteSource = false;
}

const folderPassedDestination = process.argv[4];
if(folderPassedDestination != undefined && folderPassedDestination != '' && folderPassedDestination != '.') {
    compressedPath = folderPassedDestination;
}

if(!typeError) {
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
                let filePathNew = compressedPath + '/' + filename + '.' + revertTo;
                try {
                    await webp.dwebp(filePathOld, filePathNew,"-o", logging="-v");
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
}





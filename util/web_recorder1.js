const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs');

(async () => {

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.on('console', msg => console.log('PAGE LOG:', msg.text()))

  let url = path.resolve(__dirname, 'scroll/miaov_demo.html')
  url = '/Users/lichong/Sources/WebGLSamples.github.io/aquarium/aquarium.html'
  url = 'file:' + url
  console.log(url)
  await page.goto(url)

  page.exposeFunction("writeABString", async (strbuf, targetFile) => {

    var str2ab = function _str2ab(str) { // Convert a UTF-8 String to an ArrayBuffer

      var buf = new ArrayBuffer(str.length); // 1 byte for each char
      var bufView = new Uint8Array(buf);

      for (var i=0, strLen=str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
      }
      return buf;
    }

    console.log("In 'writeABString' function...");

    return new Promise((resolve, reject) => {

      // Convert the ArrayBuffer string back to an ArrayBufffer, which in turn is converted to a Buffer
      let buf = Buffer.from(str2ab(strbuf));

      // Try saving the file.
      fs.writeFile(targetFile, buf, (err, text) => {
        if(err) reject(err);
        else resolve(targetFile);
      });
    });
  });

  // await page.screenshot({path: 'example.png'});
  // Get the "viewport" of the page, as reported by the page.
  const blob = await page.evaluateHandle(async () => {
    function sleep (time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    }

    function arrayBufferToString(buffer){ // Convert an ArrayBuffer to an UTF-8 String

      var bufView = new Uint8Array(buffer);
      var length = bufView.length;
      var result = '';
      var addition = Math.pow(2,8)-1;

      for(var i = 0;i<length;i+=addition){
        if(i + addition > length){
          addition = length - i;
        }
        result += String.fromCharCode.apply(null, bufView.subarray(i,i+addition));
      }
      return result;
    }


    const canvas = document.querySelector('canvas')
    const recorder = new CanvasRecorder(canvas)
    recorder.startRecording()
    await sleep(10000)
    const blob = recorder.stopRecording()
    var arrayBuffer;
    var fileReader = new FileReader();
    let pro = new Promise((resolve, reject)=>{
      fileReader.onload = resolve
    })
    fileReader.readAsArrayBuffer(blob);
    await pro.then(()=>{
      arrayBuffer = event.target.result;
      let bufString = arrayBufferToString(arrayBuffer)
      return window.writeABString(bufString, 'test10.webm');
    })

    console.log(`blob size = ${blob.size}`)
    return blob
  })
  // const buffer = Buffer.from(blob)
  // console.log(`blob is buffer: ${Buffer.isBuffer(blob)}`)

  // fs.writeFile('test10.webm', blob, (err) => {
  //   if (err) throw err
  //   console.log('write file success!')
  // })

  await browser.close()
})()
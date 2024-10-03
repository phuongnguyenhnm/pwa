function generateCode() {
    const inputText = document.getElementById('inputText').value;
    const codeType = document.getElementById('codeType').value;
    const resultDiv = document.getElementById("result");
    
    // Xóa nội dung cũ
    resultDiv.innerHTML = '';

    if (codeType === "qrcode") {
        const qr = qrcode(0, 'L');
        qr.addData(inputText);
        qr.make();
        const imgTag = qr.createImgTag(4);
        resultDiv.innerHTML = imgTag;
    } else if (codeType === "datamatrix") {
        const datamatrix = new DataMatrix();
        const imgData = datamatrix.encode(inputText);
        const imgTag = `<img src="${imgData}"/>`;
        resultDiv.innerHTML = imgTag;
    } else if (codeType === "barcode") {
        const canvas = document.createElement("canvas");
        JsBarcode(canvas, inputText, { format: "CODE128" });
        resultDiv.appendChild(canvas);
    } else if (codeType === "code128") {
        const canvas = document.createElement("canvas");
        JsBarcode(canvas, inputText, { format: "CODE128" });
        resultDiv.appendChild(canvas);
    } else if (codeType === "code39") {
        const canvas = document.createElement("canvas");
        JsBarcode(canvas, inputText, { format: "CODE39" });
        resultDiv.appendChild(canvas);
    }
}

function generateCode() {
    const inputText = document.getElementById('inputText').value;
    const codeType = document.getElementById('codeType').value;
    const resultDiv = document.getElementById("result");
    
    // Xóa nội dung cũ
    resultDiv.innerHTML = '';

    if (codeType === "qrcode") {
        new QRCode(resultDiv, {
            text: inputText,
            width: 128,
            height: 128,
        });
    } else if (codeType === "datamatrix") {
        const canvas = document.createElement("canvas");
        const qrCode = new QRCode(canvas, {
            text: inputText,
            width: 128,
            height: 128,
            typeNumber: 1,
            correctLevel: QRCode.CorrectLevel.L,
            render: 'canvas'
        });
        resultDiv.appendChild(canvas);
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

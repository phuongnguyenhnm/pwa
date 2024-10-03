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
        // Cần thêm thư viện để tạo DataMatrix, ví dụ: sử dụng qrious hoặc thư viện khác
        // Đây chỉ là ví dụ, bạn cần tìm thư viện thích hợp
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

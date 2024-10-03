(function() {
    const DataMatrix = function() {};

    DataMatrix.prototype.encode = function(text) {
        // Mã hóa chuỗi thành mã DataMatrix
        const matrix = this.createMatrix(text);
        return this.matrixToSVG(matrix);
    };

    DataMatrix.prototype.createMatrix = function(text) {
        // Tạo ma trận cho mã DataMatrix (giả lập)
        const size = 10; // Kích thước ma trận
        const matrix = new Array(size).fill(0).map(() => new Array(size).fill(0));

        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const x = i % size;
            const y = Math.floor(i / size) % size;
            matrix[y][x] = charCode % 2; // Chỉ để tạo ra các ô đen/trắng giả lập
        }
        return matrix;
    };

    DataMatrix.prototype.matrixToSVG = function(matrix) {
        // Chuyển đổi ma trận thành SVG
        let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">';
        const size = matrix.length;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (matrix[i][j] === 1) {
                    svg += `<rect x="${j * 10}" y="${i * 10}" width="10" height="10" fill="black"/>`;
                }
            }
        }
        svg += '</svg>';
        return "data:image/svg+xml;base64," + btoa(svg);
    };

    window.DataMatrix = DataMatrix;
})();

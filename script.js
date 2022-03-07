let letters = document.getElementById("letters")

for (let r = 0; r < 6; r++) {
    let row = document.createElement('row');
    row.className = "row";
    for (let c = 0; c < 5; c++) {
        let cell = document.createElement("cell");
        let inner = document.createElement("inner")
        cell.className = "cell";
        inner.className = "inner";
        if (r == 0) {
            switch(c) {
                case 1:
                    inner.innerText = "Y";
                    break;
                case 2:
                    inner.innerText = "E";
                    break;
                case 3:
                    inner.innerText = "S";
                    break;
            }

        }
        else if (r == 1) {
            switch(c) {
                case 1:
                    inner.innerText = "N";
                    break;
                case 2:
                    inner.innerText = "O";
                    break;
            }
        }
        cell.append(inner);
        row.append(cell);
    }
    letters.append(row);
}
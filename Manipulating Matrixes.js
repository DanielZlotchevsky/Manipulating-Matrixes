const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ];
    
    function gridCreate() {
        let N = A.length
        for (let i = 0; i < N; i++){
            console.log(A[i]);
            let n = A[i];
            for ( let b = 0; b < n.length; b++) {
                //console.log(b + '' + i);
                let div = document.createElement('div');
                let name = 'box ' + n[b];
                div.className = name;
                div.innerText = n[b];
                document.getElementById('grid').appendChild(div);
            }
        }
    }
    gridCreate();
    
    let tag = document.getElementsByClassName('box');
    let len = tag.length;
    const tagArray = []
    for (let i = 0; i < len; i++) {
        tagArray[i] = tag.item(i);
    }
    
    let tagCount = 0;
    
    function setTags(A) {
        for (let i = 0; i < A.length; i++) {
            let n = A[i];
            for ( let b = 0; b < n.length; b++) {
                tagArray[tagCount].innerText = n[b];
                tagCount++;
            }
        }
        tagCount = 0
    }
    
    function transpose(A) {
        let N = A.length;
        for (let i = 0; i < N - 1; i++) {
            for (let j = i + 1; j < N; j++) {
                swap(A, i, j, j, i);
            }
        }
        console.log(A);
        setTags(A);
    }
    
    function swap(A, i, j, k, l) {
        let temp = A[j][i];
        A[j][i] = A[l][k];
        A[l][k] = temp;
    }
    
    function exchangeCols(A) {
        let N = A.length;
        let n = Math.floor(N / 2);
        for (let col = 0; col < n; col++) {
            for (let row = 0; row < N; row++) {
                swap(A, col, row, N - 1 - col, row);
            }
        }
        console.log(A);
        setTags(A);
    }
    
    function rotateMatrix(A) {
        transpose(A);
        exchangeCols(A);
        console.log(A);
        setTags(A);
    }
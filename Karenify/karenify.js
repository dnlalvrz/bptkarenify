// l alalal lala

function karenify() {
    const before = document.getElementById("dirty").value;
    const after = before.replace(/nigga/gi, 'Karen');
    const empty = "I need more words";
    
    if (after.length > 3) {

        document.getElementById("before").textContent = before;
        document.getElementById("after").textContent = after; 
        
    } else {

        document.getElementById('before').textContent = empty;
        
    } 
  }



 
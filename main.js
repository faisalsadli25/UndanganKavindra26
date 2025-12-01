function cekNama(){
    const input =document.getElementById('namaInput').value.trim();
    const btn = document.getElementById('btnBuka');

    if(input.length > 0){
        btn.disabled = false;
        btn.classList.remove("opacity-50", "cursor-not-allowed","bg-yellow-300");
        btn.classList.add("bg-yellow-500","hover:bg-yellow-600");
    }else{
        btn.disabled = true;
        btn.classList.add("opacity-50","cursor-not-allowed","bg-yellow-300");
        btn.classList.remove("bg-yellow-500","hover:bg-yellow-600");
    }
}

function bukaUndangan(){
    const nama = document.getElementById('namaInput').value.trim();
    if(nama.length > 0) {
        window.location.href = "undangan.html?nama=" + encodeURIComponent(nama)
    }
}
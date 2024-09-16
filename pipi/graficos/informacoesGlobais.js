const url = "https://raw.githubusercontent.com/"guilhermeonrails/api/main/dados-globalThis.json";

async function vizualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json();
    
}
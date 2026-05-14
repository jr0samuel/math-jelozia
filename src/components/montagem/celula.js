export function apenasNumero (e) {
    if ([8, 9, 13, 27, 46, 110].includes(e.keyCode) || (e.keyCode >= 35 && e.keyCode <= 40)) {
        return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
};

export function handleKeyDown (e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
  }
  if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
};

export function handleChange (e, linha, coluna, posicao, onChangeCaixa) {
  const apenasNumeros = e.target.value.replace(/\D/g, "");
  onChangeCaixa(linha, coluna, posicao, apenasNumeros);
};

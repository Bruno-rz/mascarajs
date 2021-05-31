  <script type="text/javascript">
  /* Máscaras ER */
  function mascara(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout("execmascara()", 1);
  }

  function execmascara() {
    v_obj.value = v_fun(v_obj.value);
  }

  function mtel(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
  }

  function mcpf(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return v;
  }

  function mcnpj(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    return v;
  }

  function id(el) {
    return document.getElementById(el);
  }
  window.onload = function() {
    id("telefone").onkeyup = function() {
      mascara(this, mtel);
    };
    id("cpf").onkeyup = function() {
      mascara(this, mcpf);
    };
    id("cnpj").onkeyup = function() {
      mascara(this, mcnpj);
    };
  };
  </script>

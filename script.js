//chamando alerta no Home
if (document.body.id == 'home'){
    alert('Seja Bem Vindo à Página Inicial da Greenovation!')
  };







  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const maxTentativas = 3;
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    let tentativas = 0;
    let loginBemSucedido = false;
  
    do {
      tentativas++;
  
      if (tentativas > maxTentativas) {
        alert("Número máximo de tentativas excedido.");
        break;
      }
  
      alert("Tentativa de login número: " + tentativas);
  
      let email = emailInput.value;
      let password = passwordInput.value;
  
      if (email === "email@usuario.com" && password === "senhagreenovation") {
        console.log("Login bem-sucedido");
        alert('Login bem-sucedido!');
        window.open('produto.html');
        loginBemSucedido = true;
      } else {
        console.log("Login falhou");
        emailInput.value = ""; // Limpa o campo de email
        passwordInput.value = ""; // Limpa o campo de senha
      }
    } while (!loginBemSucedido);
  });
  
  

  

function realizarMatricula(event) {
    event.preventDefault();

    const extras = document.querySelectorAll('.extra');
    let checked = false;

    extras.forEach((checkbox) => {
        if (checkbox.checked) {
            checked = true;
        }
    });

    if (!checked) {
        alert('Por favor, selecione pelo menos uma das opções, ou "Nenhuma das opções".');
        return;
    }

    alert('Registro bem-sucedido!');

    setTimeout(function() {
        window.location.href = 'sucesso.html';
    }, 1000); 
}
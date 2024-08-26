function reserva(formulario) {
    nome = formulario.nome.value;
    sobrenome = formulario.sobrenome.value;
    email = formulario.email.value;
    telefone = formulario.tel.value;
    data = formulario.data.value;
    hora = formulario.hora.value;
    opcao = formulario.opcoes.selectedIndex;

    let res;
    switch (opcao) {
        case 0:
            res = "das redes sociais";
            break;
        case 1:
            res = "de revistas automobilísticas";
            break;
        case 2:
            res = "de anúncios";
            break;
        case 3:
            res = "de amigos";
            break;
        case 4:
            res = "de outros";
    }
    document.getElementById("dados").innerHTML = "O agendamento foi marcado pelo(a) senhor(a) " + nome + " " + sobrenome + "." + " Seu email é " + email + ", telefone : " + telefone + 
    " . A visita foi agendada no dia " + data + " às " + hora + " e conheceu nossa concessioária através " + res + ".";
}
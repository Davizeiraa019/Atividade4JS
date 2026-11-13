// 1. Lista de Exercícios de JavaScript: Estruturas Condicionais (if, else if, else)1. Validador de Idade para Abertura de Conta (Foco em Ranges)
// Cenário: Em uma Fintech, o cadastro precisa validar a idade do usuário antes de criar a conta. Entradas irreais (como idades negativas ou muito altas) representam fraude ou erro no sistema e devem ser barradas.

// Tarefa: Crie uma variável const idade. Use if / else if / else e operadores lógicos (&&, ||) para imprimir as seguintes mensagens:
// Fora do range: Se a idade for menor que 0 ou maior que 120: "Erro de validação: Idade fora do limite permitido."
// Condição 1: Se for entre 0 e 17 anos: "Cadastro negado: Usuário menor de idade."
// Condição 2: Se for entre 18 e 65 anos: "Cadastro aprovado: Pacote Standard."
// Condição 3: Se for entre 66 e 120 anos: "Cadastro aprovado: Pacote Sênior (Isento de taxas)."

//   const idade = +prompt('Digite sua idade');

//   if (idade > 0 && idade <= 17)
//       {console.log('Cadastro negado: Usuário menor de idade.');
//   } else if (idade >= 18 && idade <= 65)
//       {console.log('Cadastro aprovado: Pacote Standard.');
//   } else if (idade >= 66 && idade <= 120) 
//       {console.log('Cadastro aprovado: Pacote Sênior (Isento de taxas).');
//   } 

//   if (idade < 0 || idade > 120) 
//       {console.log('Erro de validação: Idade fora do limite permitido.'); 
//   }

// 2. Calculadora de Frete por Região (Foco em Ranges)
// Cenário: O módulo de logística de um e-commerce calcula o custo do frete com base na distância em quilômetros. 
// Distâncias inválidas devem gerar um alerta no sistema.
// Tarefa: Crie uma variável const distanciaKm. Implemente a lógica usando condicionais para:
// Fora do range: Distância menor que 0: "Erro do sistema: A distância não pode ser negativa."
// Condição 1: Distância entre 0 e 50 km: "Frete Grátis."
// Condição 2: Distância entre 51 e 150 km: "Custo do frete: R$ 25,00."
// Condição 3: Distância entre 151 e 300 km: "Custo do frete: R$ 50,00."
// Fora do range: Distância maior que 300 km: "Área fora de cobertura para entregas."


//  const distanciaKm = +prompt('Digite a distãncia percorrida')

//  if (distanciaKm < 0)
//      {console.log('Erro do sistema: A distância não pode ser negativa.');
//  }

//  if (distanciaKm <= 50)
//      {console.log('Frete Grátis.');
//  } else if (distanciaKm > 51 && distanciaKm <= 150){
//      console.log('Custo do frete: R$ 25,00.');  
//  } else if (distanciaKm > 151 && distanciaKm <= 300){
//      console.log('Custo do frete: R$ 50,00.');
//  }
//  if (distanciaKm > 300)
//      {console.log('Área fora de cobertura para entregas.');
//  }


// 3. Monitor de Saúde do Servidor (Foco em Operadores Lógicos)
// Cenário: Você está escrevendo um script de monitoramento para a AWS. 
// O sistema avalia o uso da CPU e da Memória RAM para decidir se deve criar novos servidores ou emitir alertas.
// Tarefa: Crie duas variáveis: const usoCPU (de 0 a 100) e const usoRAM (de 0 a 100). 
// Imprima as mensagens conforme o estado:
// Condição 1: Se ambos (CPU e RAM) estiverem abaixo de 70%: "Status: Sistema Saudável."
// Condição 2: Se a CPU ou a RAM estiverem entre 70% e 89%: "Alerta: Consumo elevado, monitorar." 
// (Dica: Pelo menos um deles está alto, mas nenhum chegou a 90%).
// Condição 3: Se a CPU ou a RAM atingirem 90% ou mais: "CRÍTICO: Escalando novos servidores imediatamente!"


// const usoCPU = +prompt('Digite o uso da CPU')
// const usoRAM = +prompt('Digite o uso de RAM')

// if (usoCPU < 70 && usoRAM < 70)
//     {console.log('Status: Sistema Saudável.');
// }else if (usoCPU >= 70 && usoCPU <= 89 || usoRAM >= 70 && usoRAM <= 89)
//     {console.log('Alerta: Consumo elevado, monitorar.');
// }else if (usoCPU >= 90 || usoRAM >= 90)
//     {console.log('CRÍTICO: Escalando novos servidores imediatamente!');
// }



// 4. Motor de Aprovação de Crédito (Foco em Cálculos + Operadores Lógicos)
// Cenário: Um sistema bancário avalia pedidos de empréstimo verificando se a parcela cabe no orçamento do cliente 
// (comprometimento máximo de 30% da renda) e se o score de crédito é suficiente.
// Tarefa: Crie as variáveis const rendaMensal, const valorParcela e const scoreSerasa (de 0 a 1000). 
// Calcule a porcentagem que a parcela representa da renda e imprima:
// Condição 1: Se rendaMensal for menor ou igual a 0, ou scoreSerasa estiver fora do intervalo de 0 a 1000: 
// "Erro: Dados financeiros inválidos."
// Condição 2: Se a parcela comprometer mais de 30% da renda ou o score for menor que 400: 
// "Crédito negado: Risco elevado ou renda comprometida."
// Condição 3: Se a parcela for até 30% da renda e o score estiver entre 400 e 799: 
// "Crédito aprovado: Taxa de juros padrão."
// Condição 4: Se a parcela for até 30% da renda e o score for 800 ou mais: 
// "Crédito pré-aprovado: Taxa VIP reduzida!"

const rendaMensal = +prompt('Digite sua renda mensal.')
const valorParcela = +prompt('Valor da parcela.')
const scoreSerasa = +prompt('Digite seu score de crédito.')

if (rendaMensal <= 0 || scoreSerasa <= 0 || scoreSerasa >= 1000) {
    console.log('Erro: Dados financeiros inválidos.');
} else if ((rendaMensal * 0.3) < valorParcela || scoreSerasa < 400) {
    console.log('Crédito negado: Risco elevado ou renda comprometida.');
} else if ((rendaMensal * 0.3) >= valorParcela && scoreSerasa >= 400 && scoreSerasa <= 799) {
    console.log('Crédito aprovado: Taxa de juros padrão.');
} else if ((rendaMensal * 0.3) >= valorParcela && scoreSerasa > 800) {
    console.log('Crédito pré-aprovado: Taxa VIP reduzida!');
}
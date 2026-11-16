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

// const rendaMensal = +prompt('Digite sua renda mensal.')
// const valorParcela = +prompt('Valor da parcela.')
// const scoreSerasa = +prompt('Digite seu score de crédito.')

// if (rendaMensal <= 0 || scoreSerasa <= 0 || scoreSerasa >= 1000) {
//     console.log('Erro: Dados financeiros inválidos.');
// } else if ((rendaMensal * 0.3) < valorParcela || scoreSerasa < 400) {
//     console.log('Crédito negado: Risco elevado ou renda comprometida.');
// } else if ((rendaMensal * 0.3) >= valorParcela && scoreSerasa >= 400 && scoreSerasa <= 799) {
//     console.log('Crédito aprovado: Taxa de juros padrão.');
// } else if ((rendaMensal * 0.3) >= valorParcela && scoreSerasa > 800) {
//     console.log('Crédito pré-aprovado: Taxa VIP reduzida!');
// }

// 5. Sistema de Precificação Dinâmica para App de Transporte (Foco em Cálculos + Ranges)
// Cenário: O algoritmo de um aplicativo de corridas ajusta o valor final da viagem multiplicando o preço base conforme a demanda da região 
// (relação entre passageiros pedindo carro e motoristas disponíveis).
// Tarefa: Crie as variáveis const valorBaseCorrida, const passageirosAtivos e const motoristasDisponiveis. Calcule a taxa de demanda 
// (passageirosAtivos / motoristasDisponiveis) e exiba o resultado:
// Condição 1: Se motoristasDisponiveis for menor ou igual a 0: "Indisponível: Nenhum motorista na região."
// Condição 2: Se a taxa de demanda for menor que 1.5: "Tarifa normal: R$ " + valorBaseCorrida
// Condição 3: Se a taxa de demanda estiver entre 1.5 e 2.9: "Tarifa dinâmica (1.5x): R$ " + (valorBaseCorrida * 1.5)
// Condição 4: Se a taxa de demanda for 3.0 ou maior: "Alta demanda (2.0x): R$ " + (valorBaseCorrida * 2.0)


// const valorBaseCorrida = +prompt('Digite o valor base da corrida');
// const passageirosAtivos = +prompt('Digite a quantidade de passageiros ativos');
// const motoristasDisponiveis = +prompt('Digite a quantidade de motoristas disponíveis');

// const taxaDemanda = passageirosAtivos / motoristasDisponiveis;

// if (motoristasDisponiveis <= 0) {
//     console.log('Indisponível: Nenhum motorista na região.');
// } else if (taxaDemanda < 1.5) {
//     console.log('Tarifa normal: R$', valorBaseCorrida);
// } else if (taxaDemanda >= 1.5 && taxaDemanda < 3.0) {
//     console.log('Tarifa dinâmica (1.5x): R$', valorBaseCorrida * 1.5);
// } else if (taxaDemanda >= 3.0) {
//     console.log('Alta demanda (2.0x): R$', valorBaseCorrida * 2.0);
// }

// Controle de Acesso e Segurança em Catraca Corporativa (Foco em Operadores Lógicos)
// Cenário: A portaria inteligente de um prédio comercial libera ou bloqueia a entrada de funcionários com base no crachá ativo, 
// no horário comercial e na autorização especial para horas extras.
// Tarefa: Crie as variáveis const crachaAtivo (booleano), const horaAtual (de 0 a 23) e const temAutorizacaoExtra (booleano). 
// Implemente a regra da catraca:
// Condição 1: Se horaAtual for menor que 0 ou maior que 23: "Erro no relógio do sistema."
// Condição 2: Se crachaAtivo for false: "Acesso bloqueado: Crachá inativo ou inválido."
// Condição 3: Se crachaAtivo for true e (horaAtual estiver entre 8 e 18 ou temAutorizacaoExtra for true): 
// "Acesso liberado: Bem-vindo!"
// Condição 4: Caso contrário (crachá ativo, fora do horário comercial e sem autorização): 
// "Acesso negado: Fora do horário permitido sem autorização."

// const crachaAtivo = prompt('Crachá ativo? (sim/não)') === 'sim';
// const horaAtual = +prompt('Digite a hora atual');
// const temAutorizacaoExtra = prompt('Tem autorização extra? (sim/não)') === 'sim';

// if (horaAtual < 0 || horaAtual > 23) {
//     console.log('Erro no relógio do sistema.');
// } else if (crachaAtivo === false) {
//     console.log('Acesso bloqueado: Crachá inativo ou inválido.');
// } else if (crachaAtivo === true && ((horaAtual >= 8 && horaAtual <= 18)) || temAutorizacaoExtra === true) {
//     console.log('Acesso liberado: Bem-vindo!');
// } else {
//     console.log('Acesso negado: Fora do horário permitido sem autorização.');
// }


// 7. Termostato Inteligente para Data Center (Foco em Cálculos + Operadores Lógicos)
// Cenário: Para evitar superaquecimento de máquinas, 
// um sistema de climatização lê dois sensores de temperatura da sala, 
// calcula a média entre eles e decide qual nível de refrigeração ativar.
// Tarefa: Crie as variáveis const sensor1, const sensor2 (ambos em graus Celsius) e 
// const modoEconomia (booleano). 
// Calcule a média das temperaturas e aplique as condições:
// Condição 1: Se a diferença entre os dois sensores for maior que 10 graus 
// (use Math.abs(sensor1 - sensor2) ou condicionais): "Alerta de Hardware: Falha na leitura dos sensores."
// Condição 2: Se a média for menor que 18: "Temperatura baixa: Desligando ar-condicionado."
// Condição 3: Se a média estiver entre 18 e 24: "Temperatura ideal: Mantendo ventilação padrão."
// Condição 4: Se a média for maior que 24 e modoEconomia for true: 
// "Aviso: Temperatura alta, mas refrigeração máxima limitada pelo Modo Economia."
// Condição 5: Se a média for maior que 24 e modoEconomia for false: 
// "Perigo: Ativando resfriamento de emergência!"

// const sensor1 = +prompt('Digite a temperatura do sensor 1')
// const sensor2 = +prompt('Digite a temperatura do sensor 2')
// const modoEconomia = prompt('Está no modo de economia? (sim/não)') === 'sim'

// const mediaDosSensores = (sensor1 + sensor2) / 2;
// console.log('Sensor1' + sensor1 + '°C' );
// console.log('Sensor2' + sensor2 + '°C');
// console.log('mediaDosSensore' + mediaDosSensores + '°C');

// if (Math.abs(sensor1 - sensor2) > 10) {
//     console.log('Alerta de Hardware: Falha na leitura dos sensores.');

// } else if (mediaDosSensores < 18) {
//     console.log('Temperatura baixa: Desligando ar-condicionado.');

// } else if (mediaDosSensores >= 18 && mediaDosSensores <= 24) {
//     console.log('Temperatura ideal: Mantendo ventilação padrão.');

// } else if (mediaDosSensores > 24 && modoEconomia === true) {
//     console.log('Aviso: Temperatura alta, mas refrigeração máxima limitada pelo Modo Economia.');

// } else {
//     console.log('Perigo: Ativando resfriamento de emergência!');
// }

// 8. Calculadora de Desconto Progressivo no Carrinho (Foco em Cálculos + Ranges)
// Cenário: O checkout de uma loja virtual aplica descontos automáticos no valor total da compra, 
// oferecendo um bônus extra caso o cliente possua assinatura Prime.
// Tarefa: Crie as variáveis const valorCarrinho e const clientePrime (booleano). 
// Defina o percentual de desconto e imprima o valor final:
// Condição 1: Se valorCarrinho for menor ou igual a 0: "Carrinho vazio: Adicione itens para continuar."
// Condição 2: Se valorCarrinho for menor que 100: "Sem desconto aplicado. Total: R$ " + valorCarrinho
// Condição 3: Se valorCarrinho estiver entre 100 e 299.99: aplique 10% de desconto (valorCarrinho * 0.90) 
// e imprima o valor final.
// Condição 4: Se valorCarrinho for 300 ou mais e clientePrime for false: aplique 15% de desconto (valorCarrinho * 0.85) e 
// imprima o valor final.
// Condição 5: Se valorCarrinho for 300 ou mais e clientePrime for true: aplique 25% de desconto (valorCarrinho * 0.75) e 
// imprima o valor final.

// const valorCarrinho = +prompt('Digite o valor do carrinho de compras')
// const clientePrime = prompt('É cliente Prime? (sim/não)') === 'sim'

// if (valorCarrinho <= 0) {
//     console.log('Carrinho vazio: Adicione itens para continuar.');
// } else if (valorCarrinho < 100) {
//     console.log('Sem desconto aplicado. Total: R$', valorCarrinho);
// } 
// else if (valorCarrinho >= 100 && valorCarrinho <= 299.99) {
//     console.log('Desconto de 10% aplicado, Partabéns', valorCarrinho * 0.90);
// } 
// else if (valorCarrinho >= 300 && clientePrime === false) {
//     console.log('Desconto de 15% aplicado, Parabéns', valorCarrinho * 0.85);
// } 
// else {
//     console.log('Desconto de 25% aplicado. Parabéns!', valorCarrinho * 0.75);
// }

// 9. Simulador de Tarifação de Energia Solar e Consumo (Foco em Cálculos Compostos + Operadores Lógicos)
// Cenário: Uma concessionária de energia calcula a fatura mensal de residências com painéis solares. 
// O sistema desconta a energia injetada na rede pelo cliente da energia consumida, 
// cobra uma taxa mínima de disponibilidade (R$ 50,00) e aplica bandeira tarifária extra 
// caso o saldo de consumo líquido ultrapasse determinados limites em horário de pico.

// Tarefa: Crie as variáveis const kwhConsumido, const kwhGeradoSolar, const tarifaBaseKwh (ex: 0.85) 
// e const altoConsumoPico (booleano). Calcule o saldo líquido (kwhConsumido - kwhGeradoSolar) 
// e implemente as regras abaixo:


// Se kwhConsumido for menor que 0, kwhGeradoSolar for menor que 0, ou 
// tarifaBaseKwh for menor ou igual a 0: "Erro de leitura: Valores de medição ou tarifa inválidos."


// Se o saldo líquido for menor ou igual a 0 (gerou mais ou igual ao que consumiu): 
// calcule o crédito acumulado (Math.abs(saldoLiquido)) e 
// imprima "Crédito gerado: " + credito + " kWh. Fatura mínima: R$ 50,00."


// Se o saldo líquido estiver entre 1 e 150 kWh: calcule o valor (saldoLiquido * tarifaBaseKwh + 50) e 
// imprima "Bandeira Verde. Total a pagar: R$ " + total


// Se o saldo líquido for maior que 150 kWh e altoConsumoPico for false: 
// aplique acréscimo de 15% sobre o consumo líquido ((saldoLiquido * tarifaBaseKwh * 1.15) + 50) e 
// imprima "Bandeira Amarela. Total a pagar: R$ " + total


// Se o saldo líquido for maior que 150 kWh e altoConsumoPico for true: 
// aplique acréscimo de 30% sobre o consumo líquido ((saldoLiquido * tarifaBaseKwh * 1.30) + 50) e 
// imprima "Bandeira Vermelha (Pico). Total a pagar: R$ " + total


// const kwhConsumido = +prompt('Digite o kWh consumido')
// const kwhGeradoSolar = +prompt('Digite o kWh gerado')
// const tarifaBaseKwh = 0.85
// const altoConsumoPico = prompt('Pico de consumo? (sim/não)') === 'sim'
// const saldoLiquido = kwhConsumido - kwhGeradoSolar
// const taxaMinima = 50;

// if (kwhConsumido < 0 || kwhGeradoSolar < 0 || tarifaBaseKwh <= 0) {
//     console.log('Erro de leitura: Valores de medição ou tarifa inválidos.');

// } 
// else if (saldoLiquido <= 0) {
//     const credito = Math.abs(saldoLiquido);
//     console.log('Crédito gerado:', credito, 'kWh. Fatura mínima: R$', taxaMinima);
// } 

// else if (saldoLiquido >= 1 && saldoLiquido <= 150) {
//     console.log('Total a pagar: R$', saldoLiquido * tarifaBaseKwh + 50);
// } 

// else if (saldoLiquido > 150 && altoConsumoPico === false)
//     {console.log('Bandeira Amarela. Total a pagar: R$', (saldoLiquido * tarifaBaseKwh * 1.15) +50);
// }

// else if (saldoLiquido > 150 && altoConsumoPico === true)
//     {console.log('Bandeira Vermelha (Pico). Total a pagar: R$', (saldoLiquido * tarifaBaseKwh * 1.30) +50);
// }

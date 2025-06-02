{
  "clientes": [
    {
      "id": "1",
      "cpf": "111.111.111-11",
      "nome": "João Carlos Gouveia",
      "telefone": "(18)9111-1111",
      "cidade": "Presidente Prudente",
      "uf": "SP",
      "cep": "19015-010"
    },
    {
      "id": "2",
      "cpf": "222.222.222-22",
      "nome": "Odete Roitman",
      "telefone": "(18)9222-2222",
      "cidade": "Londrina",
      "uf": "PR",
      "cep": "14023-013"
    },
    {
      "id": "3",
      "cpf": "333.333.333-33",
      "nome": "Sandra Regina Vasconcelos",
      "telefone": "(11)9333-3333",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "11033-029"
    },
    {
      "id": "4",
      "cpf": "444.444.444-44",
      "nome": "Jason Grace",
      "telefone": "(17)9444-4444",
      "cidade": "Três Lagoas",
      "uf": "MS",
      "cep": "21035-070"
    }
  ],

  //adicionar categorias no banco de dados
  "categorias": [],
    
  "fornecedores": [
    {
      "id":"1",
      "nomeForn":"Coca-Cola",
      "cnpj":"00.123 456/0078-90",
      "telefone":"(18) 3902-0000",
      "logradouro":"Rua A, 345",
      "categoria":"Bebidas",
      "pagamento:":"Qualquer"
    },
    {
      "id":"2",
      "nomeForn":"Lanches Sidão",
      "cnpj":"00.456 789/0012-34",
      "telefone":"(18) 3902-1111",
      "logradouro":"Rua B, 123",
      "categoria":"Lanches",
      "pagamento:":"Qualquer"
    },
    {
      "id":"3",
      "nomeForn":"Bar do Cleiton",
      "cnpj":"00.987 654/0032-10",
      "telefone":"(18) 3902-2222",
      "logradouro":"Rua C, 101",
      "categoria":"Comidas",
      "pagamento:":"Somente boleto"
    },
    {
      "id":"4",
      "nomeForn":"Padaria da Tia Maria",
      "cnpj":"00.111 222/0033-44",
      "telefone":"(18) 3902-3333",
      "logradouro":"Rua D, 404",
      "categoria":"Assados",
      "pagamento:":"Somente cartão"
    },
    {
      "id":"5",
      "nomeForn":"Churrascaria do Jão",
      "cnpj":"00.555 555/0055-55",
      "telefone":"(18) 3902-4444",
      "logradouro":"Rua E, 505",
      "categoria":"Carnes",
      "pagamento:":"Boleto e PIX"
    },
  ],
  "produtos":[
    {
      "id": "1",
      "nomeProd": "Coca-Cola 600 ml",
      "categoria": "Bebida",
      "fornecedor": "Coca-Cola",
      "dataFab": "30-05-2025",
      "dataVal": "30-08-2025",
      "preco": "6,50",
      "codigo": "ABC-123"
    },
    {
      "id": "2",
      "nomeProd": "Biscoitos de Chocolate",
      "categoria": "Assados",
      "fornecedor":"Padaria da Tia Maria",
      "dataFab": "30-05-2025",
      "dataVal": "14-06-2025",
      "preco": "8,50",
      "codigo": "DEF-234"
    },
    {
      "id": "3",
      "nomeProd":"X-Calabresa",
      "categoria":"Lanches",
      "fornecedor":"Lanches Sidão",
      "dataFab": "31-05-2025",
      "dataVal": "01-06-2025",
      "preco": "27,00",
      "codigo": "XYZ-444"
    },
    {
      "id": "4",
      "nomeProd":"X-Burgão Prudente",
      "categoria":"Lanches",
      "fornecedor":"Lanches Sidão",
      "dataFab": "31-05-2025",
      "dataVal": "01-06-2025",
      "preco": "36,50",
      "codigo": "AAA-999"
    },
    {
      "id": "5",
      "nomeProd":"Bolo de Abacaxi",
      "categoria":"Assados",
      "fornecedor":"Padaria da Tia Maria",
      "dataFab": "31-05-2025",
      "dataVal": "07-06-2025",
      "preco": "25,00",
      "codigo": "ZZZ-111"
    },
    {
      "id": "6",
      "nomeProd":"Farofa",
      "categoria":"Comidas",
      "fornecedor":"Bar do Cleiton",
      "dataFab": "01-06-2025",
      "dataVal": "01-12-2025",
      "preco": "8,50",
      "codigo": "FAR-012"
    },
    {
      "id": "7",
      "nomeProd":"Cerveja Brahma",
      "categoria":"Bebidas",
      "fornecedor":"Churrascaria do Jão",
      "dataFab": "01-04-2025",
      "dataVal": "12-04-2028",
      "preco": "7,00",
      "codigo": "DDD-750"
    },
    {
      "id": "8",
      "nomeProd":"Acém",
      "categoria":"Carnes",
      "fornecedor":"Churrascaria do Jão",
      "dataFab": "31-05-2025",
      "dataVal": "30-06-2025",
      "preco": "6,50",
      "codigo": "LED-050"
    }
  ],
    
  //adicionar usuarios no banco de dadso
  "usuarios": []
}

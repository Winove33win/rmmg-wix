# rmmg-wix

## Objetivo

Aplicação de exemplo para integrar o site da RMMG com o [Wix Velo](https://www.wix.com/velo). O projeto centraliza funções de backend, componentes de interface e automações que apoiam a operação do portal.

## Estrutura de pastas

```
rmmg-wix/
├── backend/        # Funções do servidor executadas pelo Velo
├── public/         # Código voltado ao navegador e widgets reutilizáveis
├── config/         # Definições de coleções e constantes do projeto
└── README.md       # Documentação principal
```

## Configuração das coleções e permissões

1. Acesse o editor do Wix e ative o **Modo Desenvolvedor (Dev Mode)**.
2. Abra o **Content Manager** e crie as coleções necessárias.
3. Para cada coleção, clique em **Manage Permissions** e defina:
   - Leitura: "Site Member" ou "Anyone", conforme o caso.
   - Escrita/Atualização: "Admin" ou um papel específico.
4. Salve as alterações e publique o site.

Documentação: [Coleções e Permissões](https://www.wix.com/velo/reference/wix-data/permissions-introduction).

## Executar e testar

1. Clone este repositório e implemente o código nas pastas indicadas.
2. No editor do Wix, carregue os arquivos através do [Wix CLI](https://www.wix.com/velo/reference/wix-cli).
3. Utilize a pré-visualização do Wix para testar as funções. Logs podem ser vistos no Dev Tools do navegador ou no painel de "Monitor" do Velo.
4. Não há testes automatizados configurados; use `npm test` se adicionar um runner de testes.

Para mais informações, consulte a [documentação do Velo](https://www.wix.com/velo/developer/docs).

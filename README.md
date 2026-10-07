# Robótica | Colégio Santa Úrsula

Site de recursos educacionais de Robótica do Colégio Santa Úrsula, organizado por turma.

Repositório: https://github.com/roboticacsu/roboticacsu

Endereço publicado: https://roboticacsu.github.io/roboticacsu/

## Recursos publicados

| Recurso | Tipo | Turmas | Arquivo |
|---|---|---|---|
| Batalha Naval | Atividade (jogo) | Construtores e Inovadores | `batalha-naval.html` |
| Cesta Cheia | Atividade (jogo de cidadania) | Todas as turmas | `cesta-cheia.html` |
| Oficina de Máquinas Simples | Atividade (laboratório 3D) | Exploradores | `oficina-maquinas-simples.html` |
| Elevator Saga | Atividade (jogo externo em JavaScript) | Criadores | play.elevatorsaga.com |
| Manual de Programação do Robô Educacional | Apostila | Equipe Olímpica | `manual-robo-equipe-olimpica.html` |
| A Roda dos Segredos: Cifra de César | Atividade | Construtores e Inovadores | `cifra-roda.html` e `cifra-desafio.html` |

## Arquivos do site

Todos os arquivos ficam na raiz do repositório.

| Arquivo | Função |
|---|---|
| `index.html` | Página inicial |
| `estilo.css` | Aparência (identidade verde do Colégio) |
| `app.js` | Trilha de turmas, busca e cartões |
| `recursos.js` | Catálogo de recursos |
| `admin.html` | Área da equipe, para publicar sem editar código |
| `guia-equipe.html` | Passo a passo para a equipe |
| `simbolo.svg`, `logo-csu.png`, `logo-csu-branco.png` | Marca |
| `.nojekyll` | Impede o GitHub de processar o site |

## Como publicar um novo recurso

1. Pela **Área da equipe** (`admin.html`, que usa automaticamente o repositório `roboticacsu/roboticacsu`): entre com o token do GitHub, preencha o formulário e envie. Tudo é gravado em um único commit.
2. Pelo **GitHub**: envie o arquivo do material em **Add file > Upload files** e acrescente um bloco no início da lista de `recursos.js`.

Cada atividade interativa tem um botão **Voltar para a página inicial**. A Cifra de César, o Manual e a Oficina de Máquinas Simples salvam o progresso apenas no navegador de cada computador. Os jogos Cesta Cheia e Batalha Naval não salvam nada: cada rodada começa do zero.

## Links por turma

Use `?turma=` com o código da turma para enviar o link já filtrado.

- Anos Iniciais: `exploradores`, `construtores`, `inovadores`
- Anos Finais: `descobridores`, `criadores`, `inventores`, `olimpica`

Exemplo: `?turma=inovadores`. A busca também aceita `?busca=doacao`.

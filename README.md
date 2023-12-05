# MyBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Exercícios

### Exercício 1

#### Single Page Application

| Vantagens | Desvantagens |
|-|-|
| Sensação de fluidez uma vez que apenas o conteúdo que sobre alteração é substituído na tela ao invés de ter que recarregar toda a tela. | A implementação SEO se torna mais complexa e limitada uma vez que muitas vezes os links não são nativamente navegáveis |
| Não bloqueante já que permite que o usuário continue interagindo enquanto aguarda respostas de APIs ou processos lentos | Atualizações não são aplicadas diretamente e podem ser necessárias ferramentas adicionais para notificar o browser que existe uma nova versão da aplicação |
| Redução de tráfego já que somente os dados necessários são trafegados ao invés do código de toda tela | O carregamento inicial da aplicação pode ser considerávelmente maior |

#### Multi Page Application

| Vantagens | Desvantagens |
|-|-|
| SEO aprimorado porque a aplicação segue padrões esperados pelas ferramentas de pesquisa e rankeamento de páginas | A manutenção tende a ser mais difícil e custosa |
| Menor latência no carregamento inicial da página | A performace pós carregamento tende a ser menor porque a cada carregamento é necessário passar por todo ciclo de carregamento de página web |
| Maior facilidade na implantação de ferramentas de análise de comportamento de usuário | Caso a aplcação fique offline provavelmnente vai parar de funcionar |

### Exercício 2

- Capacidade de implementar provas de conceitos de novas tecnologias ou funcionalidades.
- Além de atender demandas internas também gera demandas para a equipe de desenvolvimento.
- Capacidade direcionar a equipe.
- Prezar pela qualidade e funcionamento dos componentes compartilhados entre as equipes de frontend.


### Exercício 3

#### Principais vantagens

- Maior performance
- A aplicação da estilização tende a ser mais rápida evitando que a página seja exibida sem estilização.

#### Principais desvantagens

- Regras restritas a um único documento.
- Pouca reusabilidade.

### Exercício 4

- Utilizar o padrão BEM de criação de classes CSS evita a sobreescrita de estilos porque as clases tendem a ser específicas.
- Ferramentas de lint podem identificar e alertar sobreescritas de estilos ajudando o desenvolvedor a evitar esse tipo de problema.
- Pode utilizar isolamento de CSS por componente assim estilos de um componente não afetas outros componentes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

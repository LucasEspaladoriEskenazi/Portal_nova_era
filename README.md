# Faculdade Nova Era — Portal Institucional

Projeto desenvolvido com **HTML5, CSS3 e Bootstrap 5** (via CDN), sem frameworks
JavaScript e sem linguagem de servidor, conforme especificação do projeto prático.

## Estrutura de diretórios

```
portal/
├── index.html                  # Início: hero, quem somos, catálogo de cursos,
│                                #          indicadores e notícias
├── valores.html                 # Modalidade, carga horária e investimento (RF05)
├── contato.html                  # Formulário de contato (RF06)
├── cursos/
│   ├── analise-desenvolvimento-sistemas.html
│   ├── administracao.html
│   ├── enfermagem.html
│   ├── design-grafico.html
│   ├── pedagogia.html
│   └── gestao-ambiental.html     # Página completa de cada curso
├── css/
│   └── style.css                  # Estilização própria (tokens, tipografia, responsividade)
├── js/
│   └── script.js                   # JS puro: preenche o Modal de detalhes do curso
└── README.md
```

## Checklist de requisitos atendidos

- **RF01** — Navbar fixa, colapsável no mobile, com links + dropdown "Áreas de Ensino"
  (o dropdown leva direto à página de cada curso)
- **RF02** — Hero section (título, texto, ilustração, botão de CTA) logo após a navbar
- **RF03** — 6 cursos em cards responsivos na home; cada card tem "Ver detalhes" (Modal)
  e "Página completa" (página própria do curso)
- **RF04** — Indicadores institucionais organizados com o Grid System (`row`/`col`)
- **RF05** — Tabela de cursos (nome, modalidade, carga horária, investimento) em
  `valores.html`, responsiva
- **RF06** — Formulário de contato (nome, e-mail, telefone, curso de interesse, mensagem)
  em `contato.html`
- **RF07** — Modal com detalhes do curso na home, populado dinamicamente por `js/script.js`
- **RF08** — Rodapé institucional (endereço, telefone, e-mail, redes sociais, direitos
  autorais), presente em todas as páginas
- **RNF01** — Responsivo (testado em breakpoints `sm`/`md`/`lg` do Bootstrap)
- **RNF02** — Apenas HTML5 + CSS3 + Bootstrap 5; nenhum framework JS ou back-end
- **RNF03** — Código indentado, comentado, CSS separado do HTML, diretórios organizados
- **RNF04** — Navegação intuitiva, hierarquia visual clara, cores e tipografia consistentes
  entre todas as páginas

## Navegação do site

- **Início** (`index.html`) — visão geral: quem somos, catálogo de cursos, indicadores e notícias
- **Valores** (`valores.html`) — tabela de modalidade/carga horária/investimento
- **Contato** (`contato.html`) — formulário de contato
- **Áreas de Ensino** (dropdown na navbar) — leva direto à página completa de cada curso
- Cada card de curso na home tem dois botões: 
- **Ver detalhes** (abre o Modal exigido no RF07);
- **Página completa** (abre `cursos/<curso>.html`)

## Como testar localmente

Basta abrir `index.html` em qualquer navegador — não há dependência de servidor.
(Opcional, para simular hospedagem: `python3 -m http.server`, dentro da pasta do projeto.)

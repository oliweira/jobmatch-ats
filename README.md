# JobMatch ATS — Otimizador de Currículos para Sistemas ATS

## 📌 Problema Que A Aplicação Resolve
Muitos profissionais qualificados têm seus currículos descartados antes mesmo de chegarem às mãos dos recrutadores humano (RH). Isso ocorre porque os **Sistemas de Rastreamento de Candidatos (ATS)** filtram os currículos buscando correspondências exatas com a descrição da vaga. 

O **JobMatch ATS** compara o texto da vaga com o currículo do usuário, identifica lacunas de palavras-chave, calcula a porcentagem de compatibilidade e gera uma versão otimizada no padrão ATS sem inventar experiências falsas.

---

## 🚀 Mega Prompt Utilizado e Evolução

### Prompt Inicial
> "Crie uma aplicação web em React, TypeScript e Tailwind CSS que compare um currículo com a descrição de uma vaga. A aplicação deve exibir a porcentagem de match, palavras-chave encontradas e faltantes, e gerar uma versão ajustada ATS-friendly. Aplique a regra de ouro: nunca invente dados que o candidato não possui."

### Evolução Durante o Desenvolvimento
1. **Primeira iteração:** Apenas realizava a contagem basica de palavras.
2. **Refinamento:** Adicionada filtragem de *Stop Words* (palavras irrelevantes como preposições e artigos em português) para garantir que apenas termos técnicos e qualificações fossem analisados.
3. **Melhoria de Exportação:** Adicionada exportação dinâmica tanto em **PDF** quanto em **.DOCX**, permitindo edições manuais posteriores pelo candidato.

---

## ⚙️ Como Funciona a Análise

1. **Entrada de Dados:** O usuário cola o texto da descrição da vaga e o texto do seu currículo atual.
2. **Processamento & Tokenização:**
   - Limpeza de caracteres especiais e padronização para caixa baixa.
   - Remoção de palavras de parada (*stop words* em português).
   - Mapeamento de frequência de termos na vaga.
3. **Cálculo do Match ATS:**
   - Verificação de presença dos termos da vaga no texto do currículo.
   - Cálculo proporcional do Score de Match (0 a 100%).
4. **Geração da Versão Otimizada:**
   - Formulação de um Resumo Profissional focado no cargo.
   - Listagem em destaque dos termos-chave ausentes recomendados.
5. **Exportação:** Opção de download direto em formato `.pdf` ou `.docx`.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (Design System baseado em shadcn/ui)
- **Lucide React** (Ícones)
- **html2pdf.js** e **docx** (Exportação de arquivos)

---

## 🌐 Endereço da Aplicação

- **Repositório GitHub:** `https://github.com/oliweira/jobmatch-ats`
- **Aplicação Online (GitHub Pages):** `https://oliweira.github.io/jobmatch-ats/`
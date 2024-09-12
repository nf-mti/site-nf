# Fluxo de Trabalho com Branches no GitHub

Neste projeto, adotaremos uma estrutura de trabalho com duas principais branches:
- `preview`: Esta será a branch principal para desenvolvimento, onde novas funcionalidades e correções serão integradas.
- `main`: Esta será a branch de produção. Apenas após a aprovação das mudanças no ambiente de pré-visualização (site de staging), as alterações serão mescladas aqui.

## Atualize a preview
- Sempre que for trabalhar, atualize a preview
   git checkout preview
   git pull origin preview

### 1. Base (Branch de Destino)
- A **base** será a branch na qual você deseja **mesclar suas mudanças**.
- No nosso fluxo de trabalho, a branch base será a `preview` para a maioria dos PRs.
- Apenas quando o site de pré-visualização for aprovado, faremos PRs para a branch `main`.

### 2. Compare (Branch com as Mudanças)
- A **compare** será a branch onde você fez suas mudanças.
- Normalmente, esta será uma branch de funcionalidade ou correção, nomeada de forma descritiva, como `feature/login-page` ou `bugfix/header-issue`.

## Passo a Passo para Pull Request

1. **Criação de Branch**:
   - Crie uma branch local para cada nova funcionalidade ou correção a partir da branch `preview`:
     ```bash
     git checkout -b nome-da-branch preview
     ```
   - Lembre-se de usar nomes descritivos para as branches.

2. **Desenvolvimento e Commits**:
   - Faça commits pequenos e frequentes. Descreva as mudanças claramente em cada commit.

3. **Sincronização com a Branch Principal**:
   - Antes de enviar suas mudanças, sincronize sua branch com a branch `preview` para evitar conflitos de merge:
     ```bash
     git fetch origin
     git rebase origin/preview
     ```
## A partir desse ponto é função do lider do projeto

4. **Criação de Pull Request**:
   - Após finalizar suas mudanças, crie um PR no GitHub.
   - Escolha `preview` como **base** e sua branch de desenvolvimento como **compare**.
   - Descreva claramente o que foi feito e como testar as mudanças.

5. **Revisão e Aprovação**:
   - O código passará por uma revisão. Após a aprovação e a mesclagem na branch `preview`, será feito o deploy no ambiente de pré-visualização.
   - Apenas após a validação no ambiente de pré-visualização, as mudanças serão mescladas na branch `main`.

## Deleção de Branch Local

Depois que uma branch foi mesclada, você pode deletá-la localmente com o comando:
```bash
git branch -d nome-da-branch

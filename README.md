# Welcome to Recipe 101 Project!

## Readme em português
<details><summary><b>Portugês</b></summary><br/>
Boas-vindas ao repositório do projeto App de Receitas(Recipe 101)!

Nesse projeto, desenvolvi em grupo, um App de receitas, que chegamos ao nome Recipe 101!

# Sobre o desenvolvimento

Nesse projeto utilizamos React com componente funcionais, Hooks, ContextAPI e RTL.

# Como rodar o projeto

Para rodar nossa aplicação basta clonar este repositório e rodar o comando npm start.

# APIs

  * <details><summary><b>The MealDB</b></summary><br/>

    O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

      Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)


* <details><summary><b> The CockTailDB API</b></summary>
    Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

    Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)
    </details>

# Requisitos

## Testes unitários

### 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%
<br />

---

## Tela de login


#### 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

#### 3 - Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha

#### 4 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

#### 5 - Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user`

#### 6 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login
---

## Header

#### 7 - Implemente o header de acordo com a necessidade de cada tela

#### 8 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

#### 9 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la
---

## Barra de busca - Header

#### 10 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

#### 11 - Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter

#### 12 - Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas

#### 13 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

#### 14 - Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma

#### 15 - Exiba um `alert` caso nenhuma receita seja encontrada

---

## Menu inferior

#### 16 - Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas

#### 17 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo

#### 18 - Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior

---

## Tela principal de receitas

#### 19 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

#### 20 - Implemente os botões de categoria para serem utilizados como filtro

#### 21 - Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria

#### 22 - Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro

#### 23 - Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

---

## Tela de detalhes de uma receita

#### 24 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

#### 25 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações

#### 26 - Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida

#### 27 - Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`

#### 28 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

#### 29 - Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça

#### 30 - Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

#### 31 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

#### 32 - Implemente um botão de compartilhar e um de favoritar a receita

#### 33 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link de detalhes da receita deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer na tela em uma tag HTML

#### 34 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

#### 35 - Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e vazio caso contrário

#### 36 - Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para vazio e vice-versa
---

#### Tela de receita em progresso
### 37 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções

#### 38 - Desenvolva um checkbox para cada item da lista de ingredientes

#### 39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

#### 40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

#### 41 - Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui

#### 42 - Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

#### 43 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

---

## Tela de receitas feitas

#### 44 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

#### 45 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

#### 46 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

#### 47 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

#### 48 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

#### 49 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita
---

## Tela de receitas favoritas

#### 50 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo

#### 51 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"

#### 52 - Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita,  nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

#### 53 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

#### 54 - Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

#### 55 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

#### 56 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

---

## Tela de perfil

#### 57 - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

#### 58 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível

#### 59 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

#### 60 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

#### 61 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

#### 62 - Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login
</details>

---

## Readme in English

<details><summary><b>English</b></summary><br/>


# Welcome to the Recipe App (Recipe 101) project repository!

In this project, we developed a recipe app called Recipe 101 as a group.

# About the development

In this project, we used React with functional components, Hooks, Context API, and RTL (React Testing Library).

# How to run the project

To run our application, simply clone this repository and run the command `npm start`.

# APIs

* <details><summary><b>The MealDB</b></summary><br/>

    [TheMealDB](https://www.themealdb.com/) is an open database, maintained by the community, with recipes and ingredients from around the world.

    The API endpoints are quite rich, you can [see them here](https://www.themealdb.com/api.php).


* <details><summary><b>The CockTailDB API</b></summary>
    This API, maintained by the same organization as TheMealDB API, is focused on beverages.

    The API endpoints are also quite rich, you can [see them here](https://www.thecocktaildb.com/api.php)
    </details>

# Requirements

## Unit tests

### 1 - Develop unit tests with a coverage of at least 90%
<br />

---

## Login screen


#### 2 - Create all elements that must respect the attributes described in the prototype for the login screen

#### 3 - Develop the screen in a way that users can enter their email in the email input and their password in the password input

#### 4 - Develop the screen in a way that the form is only valid after a valid email and a password with more than 6 characters are entered

#### 5 - After submitting the form, save the user's email in localStorage with the key `user`

#### 6 - Redirect the user to the main food recipe screen after successful login submission and validation
---

## Header

#### 7 - Implement the header according to the requirements of each screen

#### 8 - Redirect the user to the profile screen when the profile button is clicked

#### 9 - Develop a search button that, when clicked, displays the search bar. The same button should hide the search bar when clicked again
---

## Search bar - Header

#### 10 - Implement the search bar elements respecting the attributes described in the prototype

#### 11 - Implement 3 radio buttons in the search bar: Ingredient, Name, and First letter

#### 12 - Search the food API if the user is on the food page, and the drink API if they are on the drinks page

#### 13 - Redirect to the recipe details screen if only one recipe is found, with the recipe ID in the URL

#### 14 - If the search returns more than one recipe, render the first 12 recipes found, displaying the image and name of each one

#### 15 - Display an alert message if no recipe is found
---

## Bottom Menu

#### 16 - Implement the bottom menu, positioning it fixed and containing 2 icons: one for food and another for drinks

#### 17 - Display the bottom menu only on the screens indicated by the prototype

#### 18 - Redirect the user to the correct screen when each icon in the bottom menu is clicked
---

## Main Food Recipe Screen

#### 19 - Load the first 12 food or drink recipes, one in each card

#### 20 - Implement category buttons to be used as filters

#### 21 - Implement the recipe filter by clicking on the category filter, using the API

#### 22 - Implement the filter as a toggle, which, if selected again, the app should return the recipes without any filter.

#### 23 - Redirect the user to the details screen when a recipe card is clicked, which should change the route and include the recipe ID in the URL.

---

## Recipe Details Screen

#### 24 - Make a request to the API passing the recipe `id` that should be available in the URL parameters.

#### 25 - Develop the screen to include an image of the recipe, the title, the category for food recipes, and whether it is alcoholic for drink recipes. It should also display a list of ingredients followed by their quantities, instructions, an embedded YouTube video, and recommendations.

#### 26 - Implement the recommendations. For food recipes, the recommendation should be a drink, and for drink recipes, the recommendation should be food.

#### 27 - Implement 6 recommendation cards, displaying only 2 at a time. The scroll should be horizontal, similar to a carousel.

#### 28 - Develop a button named "Start Recipe" that should be fixed at the bottom of the screen at all times.

#### 29 - Implement the solution so that if the recipe has already been made, the "Start Recipe" button disappears.

#### 30 - Implement the solution so that if the recipe has been started but not finished, the text of the button should be "Continue Recipe".

#### 31 - Redirect the user if the "Start Recipe" button is clicked, and the route should change to the in-progress recipe screen.

#### 32 - Implement a share button and a favorite button for the recipe.

#### 33 - Implement the solution so that when the share button is clicked, the recipe details link should be copied to the clipboard, and a message indicating that the link has been copied should appear on the screen in an HTML tag.

#### 34 - Save favorite recipes in the `localStorage` under the key `favoriteRecipes`.

#### 35 - Implement the heart icon (favorite) so that it appears filled if the recipe is favorited and empty otherwise.

#### 36 - Implement the logic for the favorite button. When clicked, the heart icon should toggle its current state, filled if it's empty, and empty if it's filled.
---

## In-Progress Recipe Screen

#### 37 - Develop the screen to include an image of the recipe, the title, the category for food recipes, and whether it is alcoholic for drink recipes. It should also display a list of ingredients with their respective quantities and instructions.

#### 38 - Develop a checkbox for each ingredient in the list.

#### 39 - Implement logic so that when a checkbox for an ingredient is clicked, the ingredient name should be "crossed out" in the list.

#### 40 - Save the progress state, which should be maintained if the user refreshes the page or returns to the same recipe.

#### 41 - Develop the logic for favorite and share buttons. The logic from the Recipe Details screen applies here.

#### 42 - Implement the solution so that the "Finish Recipe" button is only enabled when all ingredients are checked.

#### 43 - Redirect the user after clicking the "Finish Recipe" button to the page of completed recipes, with the route being `/done-recipes`.

---

## Done Recipes Screen

#### 44 - Implement the elements of the Done Recipes screen respecting the attributes described in the prototype.

#### 45 - Develop the screen so that if the recipe on the card is a food recipe, it should display: the recipe photo, name, category, nationality, the date the recipe was made, the first 2 tags returned by the API, and a share button.

#### 46 - Develop the screen so that if the recipe on the card is a drink recipe

, it should display: the recipe photo, name, whether it is alcoholic, the date the recipe was made, and a share button.

#### 47 - Implement the solution so that the share button copies the URL of the recipe details screen to the clipboard.

#### 48 - Implement 2 buttons that filter recipes by food or drink, and a third button that removes all filters.

#### 49 - Redirect to the recipe details screen when the photo or name of the recipe is clicked.
---

## Favorite Recipes Screen

#### 50 - Implement the elements of the Favorite Recipes screen (cumulative with the attributes shared with the Done Recipes screen), respecting the attributes described in the prototype.

#### 51 - Develop the screen so that if the recipe on the card is a food recipe, it should display: the recipe photo, name, category, nationality, a share button, and an "unfavorite" button.

#### 52 - Develop the screen so that if the recipe on the card is a drink recipe, it should display: the recipe photo, name, whether it is alcoholic or not, a share button, and an "unfavorite" button.

#### 53 - Implement the solution so that the share button copies the URL of the recipe details screen to the clipboard.

#### 54 - Implement the solution so that the "unfavorite" button removes the recipe from the favorite recipes list in the `localStorage` and from the screen.

#### 55 - Implement 2 buttons that filter recipes by food or drink, and a third button that removes all filters.

#### 56 - Redirect the user to the recipe details screen when the photo or name of the recipe is clicked.
---

## Profile Screen

#### 57 - Implement the elements of the Profile screen respecting the attributes described in the prototype.

#### 58 - Implement the solution so that the user's email address is visible.

#### 59 - Implement 3 buttons: one named "Done Recipes", one named "Favorite Recipes", and one named "Logout".

#### 60 - Redirect the user to the Done Recipes screen when the "Done Recipes" button is clicked.

#### 61 - Redirect the user to the Favorite Recipes screen when the "Favorite Recipes" button is clicked.

#### 62 - Clear the `localStorage` and change the route to the login screen when the "Logout" button is clicked.

</details>
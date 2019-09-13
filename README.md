# Mobly
<h3>Teste para Desenvolvedor PHP na Mobly :)</h3>
<h4>Tecnologias Utilizadas: PHP 7.2, Laravel 6.0, React, MySQL, Composer, Git</h4>

Passos para deploy:
<ol>
	<li>Clonar este repositório: <i>git clone https://github.com/leonardolaporte/Mobly.git</i></li>
	<li>Atualizar o composer dentro do diretório criado: <i>composer update</i></li>
	<li>Criar o arquivo de configuraçao, renomeando o exemplo: <i>mv .env.example .env</i></li>
	<li>Gerar a app key: <i>php artisan key:generate</i></li>
	<li>Criar um banco de dados no servidor MySQL: <i>create database mobly</i></li>
	<li>Configurar o arquivo de configuraçao (.env) com os dados de conexao com o banco de dados MySQL.</li>
	<li>Criar tabelas de dados: <i>php artisan migrate</i></li>
	<li>Execute a URL de importaçao de usuários: <i>{URL}/users/import</i></li>
	<li>Execute a URL de importaçao de posts: <i>{URL}/posts/import</i></li>
	<li>URL da API para retornar todos os usuários: <i>{URL}/users</i></li>
	<li>URL da API para retornar um usuário específico: <i>{URL}/users/{id}</i></li>
	<li>URL da API para retornar os posts de um determinado usuário: <i>{URL}{URL}/users/{id}/posts</i></li>
	
</ol>
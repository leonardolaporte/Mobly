# Mobly
Teste para Desenvolvedor PHP na Mobly :)

Passos para deploy:
<ol>
	<li>Clonar este repositório: <i>git clone https://github.com/leonardolaporte/Mobly.git</i></li>
	<li>Atualizar o composer dentro do diretório criado: <i>composer update</i></li>
	<li>Criar o arquivo de configuraçao, renomeando o exemplo: <i>mv .env.example .env</i></li>
	<li>Gerar a app key: <i>php artisan key:generate</i></li>
	<li>Criar um banco de dados no servidor MySQL: <i>create database mobly</i></li>
	<li>Configurar o arquivo de configuraçao (.env) com os dados de conexao com o banco de dados MySQL.</li>
	<li>Criar tabelas de dados: <i>php artisan migrate</i></li>
	<li>Execute a URL de importaçao: <i>{URL}/users/import</i></li>
</ol>
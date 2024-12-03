<?php
// Exibe erros para ajudar no desenvolvimento
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Inclui a configuração do banco de dados
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname']
    $email = $_POST['email'];
    $celular = $_POST['number'];
    $senha = password_hash($_POST['password'], PASSWORD_DEFAULT); // Cria hash da senha
    $genero = $_POST['gender'];

    // Verifica se o e-mail já existe no banco de dados
    $checkEmail = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $result = $checkEmail->get_result();

    if ($result->num_rows > 0) {
        echo "Este e-mail já está cadastrado!";
    } else {
        // Prepara a inserção de um novo usuário
        $stmt = $conn->prepare("INSERT INTO usuarios (firstname, lastname, email, celular, senha, genero) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $firstname, $lastname, $email, $celular, $senha, $genero);

        // Executa o cadastro e redireciona para o login se bem-sucedido
        if ($stmt->execute()) {
            // Cadastro bem-sucedido, redireciona para a página de login
            header("Location: ../pages/login.html?success=1");
            exit();
        } else {
            echo "Erro ao cadastrar: " . $conn->error;
        }

        $stmt->close();
    }

    $checkEmail->close();
}

$conn->close();
?>

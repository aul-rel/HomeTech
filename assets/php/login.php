<?php
// Exibe erros para ajudar no desenvolvimento
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Inclui a configuração do banco de dados
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; // Atualize para usar 'email' ao invés de 'username'
    $password = $_POST['password'];

    // Consulta para verificar se o usuário existe
    $stmt = $conn->prepare("SELECT senha FROM usuarios WHERE email = ?"); // Use 'email' na consulta
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verifica a senha
        if (password_verify($password, $user['senha'])) {
            // Redireciona para a landpage se o login for bem-sucedido
            header("Location: ../pages/landpage.html");
            exit();
        } else {
            echo "Senha incorreta.";
        }
    } else {
        echo "Usuário não encontrado.";
    }

    $stmt->close();
}

$conn->close();
?>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// HEADERS OBRIGATÓRIOS PARA JSON E CORS (Evita erro de conexao entre React e PHP)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

$response = ['status' => 'error', 'message' => 'Erro desconhecido.'];

// Se for uma requisição OPTIONS (pre-flight do navegador), encerra aqui com sucesso
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Método inválido.']);
    exit;
}

try {
    // 1. CAPTURA O JSON ENVIADO PELO REACT
    $jsonContent = file_get_contents('php://input');
    $data = json_decode($jsonContent, true);

    // 2. SANITIZAÇÃO DOS DADOS DO REACT
    $nome = strip_tags(trim($data['nome'] ?? ''));
    $email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $whatsapp = strip_tags(trim($data['whatsapp'] ?? ''));
    $tipoInteresse = strip_tags(trim($data['tipoInteresse'] ?? ''));

    // 3. VALIDAÇÃO
    if (empty($nome) || empty($email) || empty($whatsapp) || empty($tipoInteresse)) {
        throw new Exception('Por favor, preencha todos os campos obrigatórios.');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('O e-mail informado é inválido.');
    }

    // 4. TRADUÇÃO DO TIPO DE INTERESSE (Opcional, para ficar bonito no e-mail)
    $interesseLabel = $tipoInteresse;
    switch ($tipoInteresse) {
        case '2-quartos': $interesseLabel = '2 Quartos com Suíte'; break;
        case '3-quartos': $interesseLabel = '3 Quartos com Varanda'; break;
        case 'cobertura': $interesseLabel = 'Cobertura Vista Mar'; break;
    }

    // 5. CONFIGURAÇÃO DO PHPMAILER
    $mail = new PHPMailer(true);
    
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Descomente para ver logs de erro no console
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    
    // --- IMPORTANTE: Configure suas credenciais aqui ---
    $mail->Username   = getenv('SMTP_USER');
    $mail->Password   = getenv('SMTP_PASS'); 

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
    $mail->Port       = 465;

    // Ignorar verificação SSL (apenas para desenvolvimento local, remova em produção se tiver SSL válido)
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Remetente e Destinatário
    $mail->setFrom(getenv('SMTP_USER'), 'Site Construtora Alfama');
    $mail->addAddress('vini.dionysio@gmail.com'); 
    $mail->addReplyTo($email, $nome);

    // Conteúdo do E-mail
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = "Novo Lead Imobiliário: $nome";

    // Layout do E-mail HTML
    $mail->Body    = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; color: #333; border: 1px solid #ddd; padding: 20px;'>
            <h2 style='color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;'>Nova Solicitação de Tabela</h2>
            <p>Um novo cliente solicitou informações através da Landing Page.</p>
            
            <table style='width: 100%; margin-top: 20px; border-collapse: collapse;'>
                <tr>
                    <td style='padding: 8px; background: #f9fafb; font-weight: bold;'>Nome:</td>
                    <td style='padding: 8px;'>$nome</td>
                </tr>
                <tr>
                    <td style='padding: 8px; background: #f9fafb; font-weight: bold;'>WhatsApp:</td>
                    <td style='padding: 8px;'>$whatsapp</td>
                </tr>
                <tr>
                    <td style='padding: 8px; background: #f9fafb; font-weight: bold;'>E-mail:</td>
                    <td style='padding: 8px;'>$email</td>
                </tr>
                <tr>
                    <td style='padding: 8px; background: #f9fafb; font-weight: bold; color: #d97706;'>Interesse:</td>
                    <td style='padding: 8px; font-weight: bold;'>$interesseLabel</td>
                </tr>
            </table>

            <p style='margin-top: 30px; font-size: 12px; color: #888;'>
                Lead capturado em: " . date('d/m/Y H:i:s') . "
            </p>
        </div>
    ";
    
    $mail->AltBody = "Novo Lead:\n\nNome: $nome\nWhatsApp: $whatsapp\nEmail: $email\nInteresse: $interesseLabel";

    $mail->send();

    $response['status'] = 'success'; // Alterei para 'status' para bater com o seu check no React (result.status === 'success')
    $response['message'] = 'Recebemos seus dados! Entraremos em contato em breve.';

} catch (Exception $e) {
    $response['status'] = 'error';
    $response['message'] = 'Erro ao enviar: ' . $mail->ErrorInfo; // Em produção, oculte o erro técnico
}

echo json_encode($response);

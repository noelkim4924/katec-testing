
interface EmailTemplateProps {
  name: string;    
  email: string;   
  subject: string; 
  message: string; 
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, subject, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Contact Form Submission</h1>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;


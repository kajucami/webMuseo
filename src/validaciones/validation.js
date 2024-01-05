const validateUsername = (username) => {
    // Al menos 3 caracteres alfanuméricos
    const regex = /^[a-zA-Z0-9áéíóúü\s]{3,}$/;
    return regex.test(username);
  };
  
  const validateEmail = (email) => {
    // Estructura de email básica
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const validatePassword = (password) => {
    // Al menos 8 caracteres
    const regex = /^.{8,}$/;
    return regex.test(password);
  };
  
  const validatePhone = (phone) => {
    // Estructura de número de teléfono
    const regex = /^[+]?[(]?\d{1,4}[)]?[-\s.]?\d{1,4}[-\s.]?\d{1,9}$/;
    return regex.test(phone);
  };
  


  export { validateUsername, validateEmail, validatePassword, validatePhone };
  export function requiredRules(value) {
    if (!value) {
        return 'This field is required';
      }
      return true;
  }
 
  export function characterRules(value) {
    if (!/^[a-zA-Z ]+$/.test(value)) {
        return 'This field must contain only letters and spaces';
      }
      return true;
  }
  export function usernameRules(username) {
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{4,}$/.test(username);
  
    if (isEmail) {
      return 'Enter a correct email.';
    }

    const usernameRegex = /^[a-zA-Z0-9@.,-_]{5,}$/;
  
    if (!usernameRegex.test(username)) {
      return 'Username must contain only letters, numbers, and the following special characters: @.,-_.';
    }
    return true;
  }
  
  

  export function emailRules(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailRegex.test(input)) {
      return 'Enter a correct email.';
    }
    return true;
  }
  

  
  export function passwordRules(password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password))
      {
        return 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.';
      
      }
      
    return true;
}

  
  
  const ValidationPlugin = {};
  
  
  ValidationPlugin.install = function (Vue) {
    
    Vue.prototype.$rules = {
      emailRules,
      passwordRules,
      requiredRules,
      characterRules,
      usernameRules
    };
  };
  
  
  export default ValidationPlugin;
  
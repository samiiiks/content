import { useRef } from 'react';

const PasswordToggle = () => {
  const passViconRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handlePasswordToggle = () => {
    const passVicon = passViconRef.current;
    const passwordInput = passwordInputRef.current;

    passVicon.classList.toggle('eye-slash');
    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  };

  return (
    <div>
      <span ref={passViconRef} className="passVicon">
        Password Toggle
      </span>
      <input ref={passwordInputRef} type="password" className="pass_log_id" />
      <button onClick={handlePasswordToggle}>Toggle Password</button>
    </div>
  );
};

export default PasswordToggle;
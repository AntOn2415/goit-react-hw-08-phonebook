import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsLock, BsEnvelopeAt } from 'react-icons/bs';
import { authOperations } from 'redux/auth';
import { isLoadingSelector } from 'redux/selectors';
import { useThemeContext } from '../../hooks/ThemeContext'; 
import {
  FormContainer,
  Form,
  IconWrapper,
  LabelForm,
  LabelSpan,
  InputForm,
  BtnForm,
} from './LoginView.styled';

function LoginView() {
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const isButtonDisabled = email.trim() === '' || password.trim() === '';

  useThemeContext();
  
  return (
    <section>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <LabelForm>
            <IconWrapper>
              <BsEnvelopeAt />
            </IconWrapper>
            <LabelSpan>Email</LabelSpan>
            <InputForm
              type="email"
              value={email}
              name="email"
              title="Please enter a valid email address"
              required
              placeholder="Enter email"
              onChange={handleChange}
            />
          </LabelForm>
          <LabelForm>
            <IconWrapper>
              <BsLock />
            </IconWrapper>
            <LabelSpan>Password</LabelSpan>
            <InputForm
              type="password"
              value={password}
              name="password"
              pattern="^(?=.*[a-zA-Z\d!@#$%^&*]).{8,}$"
              title="Password must be at least 8 characters long and can include letters, digits, and special characters like !@#$%^&*."
              minLength={8}
              required
              placeholder="Enter password"
              onChange={handleChange}
            />
          </LabelForm>

          <BtnForm
            type="submit"
            isLoading={isLoading}
            disabled={isLoading || isButtonDisabled}
          >
            Login
          </BtnForm>
        </Form>
      </FormContainer>
    </section>
  );
}

export default LoginView;

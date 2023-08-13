import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPersonPlus, BsUnlock, BsLock, BsEnvelopeAt } from 'react-icons/bs';
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
} from './RegisterForm.styled';

function RegisterForm() {
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value.replace(/(^|\s)\S/g, match => match.toUpperCase()));
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      authOperations.register({
        name,
        email,
        password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const isPasswordValid = /^(?=.*[a-zA-Z\d!@#$%^&*]).{8,}$/.test(password);

  const doPasswordsMatch = password && password === confirmPassword;

  const isButtonDisabled =
    name.trim() === '' ||
    email.trim() === '' ||
    password.trim() === '' ||
    !doPasswordsMatch;

  useThemeContext();

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <LabelForm>
          <IconWrapper>
            <BsPersonPlus />
          </IconWrapper>
          <LabelSpan>Name</LabelSpan>
          <InputForm
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+(([' \-][a-zA-Zа-яА-ЯґҐєЄіІїЇ ])?[a-zA-Zа-яА-ЯґҐєЄіІїЇ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            onChange={handleChange}
          />
        </LabelForm>
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
            {isPasswordValid ? <BsLock /> : <BsUnlock />}
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
        <LabelForm>
          <IconWrapper>
            {doPasswordsMatch ? <BsLock /> : <BsUnlock />}
          </IconWrapper>
          <LabelSpan>Confirm Password</LabelSpan>
          <InputForm
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            pattern={password}
            minLength={8}
            required
            placeholder="Confirm password"
            onChange={handleChange}
            title="Please confirm your password"
          />
        </LabelForm>
        <BtnForm
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || isButtonDisabled}
        >
          Register
        </BtnForm>
      </Form>
    </FormContainer>
  );
}

export default RegisterForm;

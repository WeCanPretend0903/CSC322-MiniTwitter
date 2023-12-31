import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrghtText} from '../Components/Styles';

import Logo from '../Assets/logo.png';

import { Formik, Form } from 'formik';
import { TextInput } from '../Components/FormLib';
import * as Yup from 'yup';
//icons
import {FiMail, FiLock, FiUser} from 'react-icons/fi';
import { ThreeCircles as Loader } from 'react-loader-spinner';

//authservice
import {connect} from 'react-redux';
import { signupUser } from '../authService/action/userAction';
import {useNavigate} from 'react-router-dom';
const SignUp = ({signupUser}) => {
    const history = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme}size ={30}>User Signup</StyledTitle>
                <Formik
                   initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        userName: "",
                   }}
                   validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email address")
                        .required("Required"),
                        password: Yup.string()
                        .min(6, "Password is too short")
                        .max(20, "Password is too long")
                        .required("Required"),
                        userName: Yup.string().required("Required"),
                        repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password Must Match")

                    })}
                   onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        signupUser(values,history, setFieldError, setSubmitting )
                   }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                               name="email"
                               type="text"
                               label="Email Address"
                               placeholder="Email Address..."
                               icon={<FiMail/>}
                            />
                            <TextInput 
                               name="UserName"
                               type="text"
                               label="User Name"
                               placeholder="JohnDoe12..."
                               icon={<FiUser/>}
                            />
                            <TextInput 
                               name="password"
                               type="password"
                               label="Password"
                               placeholder="password..."
                               icon={<FiLock/>}
                            />
                            <TextInput 
                               name="repeatPassword"
                               type="password"
                               label="Repeat Password"
                               placeholder="password..."
                               icon={<FiLock/>}
                            />
                            <ButtonGroup>
                                {!isSubmitting && (
                                <StyledFormButton
                                    type="submit">SignUp
                                </StyledFormButton>
                                )}
                                {isSubmitting && (
                                    <Loader
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Have an Account? <TextLink to="/login">Login</TextLink> 
                </ExtraText>
            </StyledFormArea>
        </div>
    );
};

export default connect(null, {signupUser})(SignUp);
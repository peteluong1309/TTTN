import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../Action/alert';
import { register } from '../../Action/user';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = ({ setAlert, register, isAuthenticated }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        account: '',
        password: '',
        passwordConfirmation: ''
    })

    const { email, account, password, passwordConfirmation } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            setAlert('Mật khẩu không trùng khớp', 'danger', 5000);
        } else {
            register({ account, email, password });
            // return <Redirect to="/log-in" />
        }
    }

    const handleClick = () => {
        window.scrollTo(0, 0);

    }

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng ký
                    </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                    <TextField
                        autoComplete="email"
                        name="email"
                        margin="normal"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        value={email}
                        autoFocus
                        onChange={e => onChange(e)}
                    />


                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        id="account"
                        label="Tên tài khoản"
                        name="account"
                        value={account}
                        autoComplete="account"
                        onChange={e => onChange(e)}
                    />

                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        id="password"
                        label="Mật khẩu"
                        value={password}
                        name="password"
                        type="password"
                        minLength={6}
                        autoComplete="password"
                        onChange={e => onChange(e)}
                    />

                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        name="passwordConfirmation"
                        label="Nhập lại mật khẩu"
                        type="password"
                        value={passwordConfirmation}
                        id="passwordConfirmation"
                        onChange={e => onChange(e)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        // color="red"
                        onClick={handleClick}
                        className={classes.submit}
                    >
                        Đăng ký
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/log-in" variant="body2">
                                Đã có tài khoản? Đăng nhập
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>

    )
}

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapStateToProps, { setAlert, register })(SignUp);
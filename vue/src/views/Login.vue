<template>
    <div>
        <!-- contact-form -->
        <div class="message warning">
            <div class="inset">
                <div class="login-head">
                    <h1>Login Form</h1>
                </div>
                <form class="loginForm">
                    <li>
                        <input v-model="username" type="text" class="text" placeholder="admin"><a
                            class=" icon user"></a>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <input v-model="password" type="password" placeholder="admin"> <a class="icon lock"></a>
                    </li>
                    <div class="clear"></div>
                    <div class="button">
                        <router-link to="/home">
                            <input type="button" value="Sign in">
                        </router-link>
                    </div>

                </form>
            </div>
        </div>
        <!--- footer --->
        <div class="footer">
            <p>Copyright &copy; 2018.</p>
        </div>
    </div>
</template>

<script lang="ts">
    // import Vue from 'vue';
    import {Component, Vue} from 'vue-property-decorator';
    import {mapModel} from '../helper/ViewHelper';

    @Component({
        computed:{
            ...mapModel([{ns:'userInfo',names:['username','password']}])
        }
    })
    export default class Login extends Vue {
    }
</script>

<style>
    .message.warning {
        background: rgba(255, 255, 255, 0.33);
        -moz-box-shadow: 0 0 0 3px rgba(56, 41, 32, 0.25);
        -webkit-box-shadow: 0 0 0 3px rgba(56, 41, 32, 0.25);
        box-shadow: 0 0 0 3px rgba(56, 41, 32, 0.25);
        margin: 9% auto 0;
        width: 30%;
    }

    .login-head {
        padding: 2em 0;
        background: grey;
        position: relative;
    }

    .login-head h1 {
        color: #fff;
        font-size: 1.5em;
        text-align: left;
        margin: 0 23px;
    }

    .loginForm {
        padding: 3em 2em;
        background: #F2F2F2;

    }

    .loginForm li {
        border: 2px ridge rgba(187, 185, 189, 0.11);
        border-radius: 0.3em;
        -webkit-border-radius: 0.3em;
        -moz-border-radius: 0.3em;
        -o-border-radius: 0.3em;
        list-style: none;
        margin-bottom: 12px;
        background: #F0EEF0;

    }

    .icon {
        background: url(../assets/icons.png) no-repeat 0px 0px;
        height: 30px;
        width: 30px;
        display: block;
        float: right;
        margin: 12px 9px 9px 0px;
    }

    .user {
        background: url(../assets/icons.png) no-repeat 7px 1px;

    }

    .lock {
        background: url(../assets/icons.png) no-repeat -22px 1px;
    }

    input[type="text"], input[type="password"] {
        font-family: 'Droid Sans', sans-serif;
        width: 70%;
        padding: 0.5em 2em 0.5em 1em;
        color: #B8B8B8;
        font-size: 20px;
        outline: none;
        background: none;
        border: none;
    }

    input[type="text"]:hover, input[type="password"]:hover {
        color: grey;

    }

    .submit h4 a {
        float: left;
        font-size: 16px;
        color: #999;
        font-weight: 400;
        font-family: 'Droid Sans', sans-serif;
        margin-top: 15px;
        margin-left: 21px;
    }

    .submit h4 a:hover {
        color: grey;
    }

    .tlinks {
        text-indent: -9999px;
        height: 0;
        line-height: 0;
        font-size: 0;
        overflow: hidden;
    }

    /*************************/
    .submit {
        padding-top: 3em;
    }

    input[type="button"] {
        color: #fff;
        cursor: pointer;
        font-weight: 900;
        outline: none;
        font-family: 'Raleway', sans-serif;
        padding: 12px 0px;
        width: 35%;
        font-size: 18px;
        background: grey;
        border: 2px solid grey;
        border-radius: 0.5em;
        -webkit-border-radius: 0.5em;
        -moz-border-radius: 0.5em;
        -o-border-radius: 0.5em;
    }

    input[type="button"]:hover {
        background: #fff;
        color: grey;
        border: 2px solid grey;
    }

    /*----*/
    /* footer */
    .footer {
        position: absolute;
        bottom: 76px;
        left: 45%;
    }

    .footer p {
        position: relative;
        font-family: 'Droid Sans', sans-serif;
        color: grey;
        display: block;
        font-size: 1.2em;
        font-weight: 400;
        text-align: center;
        padding-top: 2em;
    }

    .footer p a {
        color: #000;
        transition: all 0.5s ease-out;
        -webkit-transition: all 0.5s ease-out;
        -moz-transition: all 0.5s ease-out;
        -ms-transition: all 0.5s ease-out;
        -o-transition: all 0.5s ease-out;
    }

    .footer p a:hover {
        color: #fff
    }

    .message {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 1px 2px rgba(0, 0, 0, 0.4);
        position: relative;
    }

    .warning {
        text-align: center;
        margin: 14% auto;
        width: 280px;
        background: rgba(82, 97, 97, 0.68);
        border-radius: 6px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        -o-border-radius: 6px;
    }

    .alert-close {
        cursor: pointer;
        height: 30px;
        position: absolute;
        right: 12px;
        top: 34px;
        -webkit-transition: color 0.2s ease-in-out;
        -moz-transition: color 0.2s ease-in-out;
        -o-transition: color 0.2s ease-in-out;
        transition: color 0.2s ease-in-out;
        width: 30px;
    }

    /*-----start-responsive-design------*/
    @media (max-width: 1440px) {
        .message.warning {
            margin: 11% auto 0;
            width: 30%;
        }

        .footer {
            left: 44%;
        }
    }

    @media (max-width: 1366px) {
        .message.warning {
            margin: 7% auto 0;
            width: 35%;
        }

        .footer {
            left: 43%;
            bottom: 9%;
        }
    }

    @media (max-width: 1280px) {
        .message.warning {
            margin: 7% auto 0;
            width: 33%;
        }

        .footer {
            left: 43%;
        }
    }

    @media (max-width: 1024px) {
        .message.warning {
            margin: 12% auto 0;
            width: 47%;
        }

        .footer {
            left: 41%;
        }
    }

    @media (max-width: 768px) {
        .message.warning {
            margin: 13% auto 0;
            width: 65%;
        }

        .footer {
            left: 38%;
            bottom: 87px;
        }
    }

    @media (max-width: 640px) {
        .message.warning {
            margin: 13% auto 0;
            width: 67%;
        }

        .footer {
            left: 35%;
            bottom: 87px;
        }
    }

    @media (max-width: 480px) {
        .message.warning {
            margin: 15% auto 0;
            width: 90%;
        }

        .footer {
            left: 33%;
            bottom: 136px;
        }
    }

    @media (max-width: 320px) {
        .message.warning {
            margin: 8% auto 0;
            width: 90%;
        }

        .login-head {
            padding: 1.45em 0;
        }

        .login-head h1 {
            font-size: 1.15em;
        }

        .icon {
            margin: -33px 9px 9px 0px;
        }

        input[type="text"], input[type="password"] {
            font-size: 16px;
        }

        .alert-close {
            right: 12px;
            top: 22px;
        }

        form {
            padding: 1.5em 1.5em;
        }

        .submit {
            padding-top: 0.4em;
        }

        input[type="button"] {
            float: none;
            padding: 11px 0px;
            width: 52%;
            font-size: 15px;
        }

        .submit h4 {
            margin-top: 15px;
            margin-bottom: 20px;
        }

        .submit h4 a {
            float: none;
            font-size: 15px;
        }

        .footer {
            left: 22%;
            bottom: 59px;
        }

    }
</style>

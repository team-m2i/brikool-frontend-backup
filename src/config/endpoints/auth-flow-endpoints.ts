import {BASE_URL} from "@/lib/constants";


const base_path = `${BASE_URL}/auth`
type AuthFlowEndpoints = {
    authFlow: {
        signIn: () => string;
        signUp: () => string;
        signOut: () => string;
        checkEmail: () => string;
    };
    config: {
        forgotPassword: () => string;
        resetPassword: () => string;
    }
    jwt: {
        verifyToken: () => string;
        refreshToken: () => string;
    }
}

export const authFlowEndpoints: AuthFlowEndpoints = {
    authFlow: {
        signIn: () => `${base_path}/login`,
        signUp: () => `${base_path}/registration`,
        signOut: () => `${base_path}/logout`,
        checkEmail: () => `${base_path}/checkEmail`,
    },
    config: {
        forgotPassword: () => `${base_path}/forgotPassword`,
        resetPassword: () => `${base_path}/resetPassword`,
    },
    jwt: {
        verifyToken: () => `${base_path}/verifyJwt`,
        refreshToken: () => `${base_path}/refresh`,
    }
}